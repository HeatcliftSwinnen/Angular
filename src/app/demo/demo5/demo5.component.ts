import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from 'src/app/shared/models/user';
import { FakeAuthService } from 'src/app/shared/services/fake-auth.service';

@Component({
  selector: 'app-demo5',
  templateUrl: './demo5.component.html',
  styleUrls: ['./demo5.component.scss']
})
export class Demo5Component implements OnInit, OnDestroy {
  connectedUser : User | undefined;

  login : string = "";
  password : string = "";

  userSubscription : Subscription = new Subscription();

  constructor(private _fakeAuthS : FakeAuthService) {
  }

  ngOnInit(): void {
      this.userSubscription = this._fakeAuthS.$connectedUser.subscribe({
        next : (newUser : User | undefined ) => {
          // Se déclenche quand notre Observable va changer de valeur
          console.log("NEXT déclenché dans Demo5 : ", newUser);
          this.connectedUser = newUser;
          
        },
        error : ( error ) => {
          // Se déclenche quand notre Observable va rencontrer une erreur
          // ! Elle met fin à l'observable
        },
        complete : () => {
          // Se déclenche à la fin de vie l'observable
        }
      })
  }

  ngOnDestroy(): void {
    // Nous permet de nous désabonner de l'observable,
    // Sinon, si on oublie cette étape, chaque fois qu'on va arriver sur le composant, on va s'abonner et au bout d'un moment, on peut avoir 352 fois l'abonnement à notre observable, niveau ressources, c'est pas incr
    console.log("Désabo");    
    this.userSubscription.unsubscribe();
  }

  connect() {
    this._fakeAuthS.login(this.login, this.password);
    // this.connectedUser = this._fakeAuthS.connectedUser;
    this.login = "";
    this.password = "";
  }
  
  disconnect() {
    this._fakeAuthS.logout();
    // this.connectedUser = this._fakeAuthS.connectedUser;

  }
}
