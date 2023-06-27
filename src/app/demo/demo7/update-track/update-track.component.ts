import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Track } from 'src/app/shared/models/track';
import { TrackService } from 'src/app/shared/services/track.service';

@Component({
  selector: 'app-update-track',
  templateUrl: './update-track.component.html',
  styleUrls: ['./update-track.component.scss']
})
export class UpdateTrackComponent implements OnInit, OnDestroy {
  trackId : number;
  trackForm : FormGroup;
  track : Track | undefined;

  //Injection de la classe ActivatedRoute : Pour récupérer des infos de la route active, comme l'url, les id etc
  //Injection de la classe Router : Pour utiliser le routing général, faire des redirections
  constructor(private _activeRoute : ActivatedRoute, private _fb : FormBuilder, private _trackService : TrackService, private _router : Router) {
    //#region Explication activeRoute param
    //snapshot : Permet de récupérer l'instantané de la route à l'instant T
    //params : Tableau contenant tous les paramètres
    //Pour selectionnner le paramètre dont on a besoin, on doit mettre le nom qu'on a indiqué dans le path du component 
    // ex : path : 'demo/untruc/:monSuperParam -> this._activeRoute.snapshot.params['monSuperParam'] pour récup sa valeur
    //! Attention ! L'url est "découpée" pour récupérer les paramètres, on obtient donc une chaine
    //#endregion
    
    this.trackId = parseInt(this._activeRoute.snapshot.params["id"]);

    this.trackForm = this._fb.group({
      title : [null, [Validators.required]],
      duration : [null, [Validators.required, Validators.min(0), Validators.max(600)]],
      album : [null],
      genre : ['', [Validators.required]],
      artists : this._fb.array([
      ])
    })
  }

  //Méthode appelée quand le composant apparait à l'écran (On s'en sert pour aller chercher des infos en db, initialiser des données etc...)
  ngOnInit(): void {
      console.log("ON INIT UPDATE TRACK");
      //On récupère la track dont on a récup l'id en """"db""""
      this.track = this._trackService.getById(this.trackId);

      //Ajouter un input pour chacun des artistes de la track récupérée
      this.track?.artists.forEach(a => this.addArtist())

      //Mettre à jour le formulaire
      this.trackForm.patchValue({
        title : this.track?.title,
        duration : this.track?.duration,
        album : this.track?.album,
        genre : this.track?.genre,
        artists : this.track?.artists
      })
  }

  //Méthode appelée quand le composant disparait de l'écran (On s'en servira plus tard pour se désabonner de nos Observables mais vous savez pas encore cékoi un Observable)
  ngOnDestroy(): void {
      console.log("ON DESTROY UPDATE TRACK");      
  }

  //getter 
  get artists() : FormArray {
    return this.trackForm.get('artists') as FormArray;
  }

  //Pour ajouter un input Artist
  addArtist() : void {
    this.artists.push(this._fb.control(null, Validators.required))
  }
  //Pour dégager un input Artist
  removeArtist(i : number) : void {
    this.artists.removeAt(i);
  }

  updateTrack() : void {
    if(this.trackForm.valid){
      this._trackService.update(this.trackId, this.trackForm.value)
      // Penser à injecter la classe Router dans le constructeur
      this._router.navigateByUrl('/demo/demo7')
    }
    else {
      this.trackForm.markAllAsTouched();
    }
  }

}
