import { Component } from '@angular/core';
import { CountryCode } from 'src/app/shared/models/countriesCodeEnum';
import { AgeInfo, GenreInfo, NationalityInfo } from 'src/app/shared/models/nameInfo';
import { NameInfoService } from 'src/app/shared/services/name-info.service';

@Component({
  selector: 'app-demo8',
  templateUrl: './demo8.component.html',
  styleUrls: ['./demo8.component.scss']
})
export class Demo8Component {
  nameAge : string = '';
  countryCodeAge : string = '';

  nameGenre : string = '';
  countryCodeGenre : string = '';

  nameNationality : string = "";

  age! : AgeInfo;
  genre! : GenreInfo;
  natio! : NationalityInfo;


  constructor(private _nameInfoService : NameInfoService) {
  }

  predireAge() : void {
    //Si les deux input ne sont pas vides
    if(this.nameAge.trim() !== '' && this.countryCodeAge != '') {
      //On envoie la requête
      this._nameInfoService.getAge(this.nameAge, this.countryCodeAge).subscribe({
        next : ( ageInfo ) => {
          // Déclenché quand la requête est finie et qu'on a otenu les infos (stockées dans ageInfo)
          this.age = ageInfo;
        },
        error : ( err ) => {
          // Déclenché si la requête produit une erreur
          console.log(err);

        },
        complete : () => {
          // Se déclenche à la fin de l'Observable
          // Ici, la durée de vie de notre observable = le temps de la requête
          console.log('Finiiii');

        }
      })
    }
  }
}
