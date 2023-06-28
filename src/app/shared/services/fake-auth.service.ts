import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { BehaviorSubject, Observable, Subject, last } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FakeAuthService {

  // Normalement on fait appel à la db, pour l'instant on n'a pas encore appris donc on fait une liste privée qui sera notre fakedb
  private _users : User[] = [
    { id : 1, lastname : 'Ly', firstname : 'Khun', pseudo : 'kly', email : 'khun.ly@bstorm.be', password : 'Khun1234='},
    { id : 2, lastname : 'Bya', firstname : 'Seb', pseudo : 'sbya', email : 'sebastien.bya@bstorm.be', password : 'Seb1234='}
  ]

  // Avant observable
  // connectedUser : User | undefined;

  // Avec observable
  // On le passe en privé, pour l'utiliser que dans la service et ne pouvoir emettre de nouvelle valeur qu'ici
  //private _$connectedUser : Subject<User | undefined> = new Subject<User | undefined>();

  // Deuxième type d'observable :
  // Différence entre Subject et Behavior :
  // Le Behavior va déclencher un premier next au subscribe et se remplir avec la valeur renseignée à son initialisation
  private _$connectedUser : BehaviorSubject<User | undefined> = new BehaviorSubject<User | undefined>(this._users.find(u => u.id === parseInt(localStorage.getItem('userId') ?? "-1")));


  // La variable qu'on rend public pour nos composants sera notre Subject mais transformé en observable
  $connectedUser : Observable<User | undefined> = this._$connectedUser.asObservable();


  constructor() { }

  login(login : string, pwd : string) : void {
    // login contient soit pseudo, soit email, donc on cherche les deux
    let userToFind = this._users.find(u => u.pseudo === login || u.email === login);
    //Si on a trouvé un user qui correspond, on check son pwd
    if(userToFind) {
      if(userToFind.password === pwd) {
        // Avant, sans observable
        // this.connectedUser = userToFind;

        // Après, avec observable
        this._$connectedUser.next(userToFind);

        // Ajout de son id dans le localStorage
        localStorage.setItem('userId', userToFind.id.toString());
        
      }
      else {
        // Avant, sans observable
        // this.connectedUser = undefined;

        // Après,
        this._$connectedUser.next(undefined);
      }
    }
    else {
      //Avant
      // this.connectedUser = userToFind; //undefined
      
      //Après
      this._$connectedUser.next(userToFind);
    }
  }

  logout() : void {
    // Avant Obs
    // this.connectedUser = undefined;

    // Après
    this._$connectedUser.next(undefined);

    // Enlever l'id dans le localStorage
    localStorage.removeItem('userId');
  }
}
