import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Fan } from 'src/app/shared/models/fan';
import { FanService } from 'src/app/shared/services/fan.service';
import { ageRestriction } from 'src/app/shared/validators/ageRestriction';

@Component({
  selector: 'app-update-fan',
  templateUrl: './update-fan.component.html',
  styleUrls: ['./update-fan.component.scss']
})
export class UpdateFanComponent implements OnInit {
  fanForm : FormGroup;
  fanId : number;
  

  constructor(private _activeRoute : ActivatedRoute, private _fb : FormBuilder, private _fanService : FanService, private _router : Router) {
    this.fanId = parseInt(this._activeRoute.snapshot.params['id']);

    this.fanForm = this._fb.group({
      name : [null, [Validators.required]],
      birthdate : [null, [Validators.required, ageRestriction(13)]],
      series : this._fb.array([])
    })
  }
  
  ngOnInit(): void {
      let fan : Fan | undefined = this._fanService.getById(this.fanId)

      fan?.series.forEach(s => this.addSerie()); // On crée autant d'input que de séries
      if(fan) {
        this.fanForm.patchValue({
          name : fan.name,
          // attendu comme format de valeur 'yyyy-MM-dd'
          birthdate : `${fan.birthdate.getFullYear()}-${fan.birthdate.getMonth()+1 < 10 ? '0' : ''}${fan.birthdate.getMonth()+1}-${fan.birthdate.getDate()+1 < 10 ? '0' : ''}${fan.birthdate.getDate()}`,
          series : fan?.series
        })

      }
  }

  get series() : FormArray {
    return this.fanForm.get('series') as FormArray
  }

  addSerie() : void {
    this.series.push(this._fb.control(null, Validators.required))
  }

  removeSerie(i : number) {
    this.series.removeAt(i);
  }

  updateFan() {
    if(this.fanForm.valid) {
      this._fanService.update(this.fanId, this.fanForm.value);
      this._router.navigateByUrl('/exo/exo5')
    } else {
      this.fanForm.markAllAsTouched();
    }
  }
}
