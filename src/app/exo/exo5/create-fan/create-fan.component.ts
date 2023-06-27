import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FanService } from 'src/app/shared/services/fan.service';
import { ageRestriction } from 'src/app/shared/validators/ageRestriction';

@Component({
  selector: 'app-create-fan',
  templateUrl: './create-fan.component.html',
  styleUrls: ['./create-fan.component.scss']
})
export class CreateFanComponent {
  fanForm : FormGroup;

  constructor(private _fb : FormBuilder, private _fanService : FanService, private _router : Router) {
    this.fanForm = this._fb.group({
      name : [null, [Validators.required]],
      birthdate : [null, [Validators.required, ageRestriction(13)]],
      series : this._fb.array([])
    })
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

  addFan() {
    if(this.fanForm.valid) {
      this._fanService.add(this.fanForm.value);
      this._router.navigateByUrl('/exo/exo5')
    } else {
      this.fanForm.markAllAsTouched();
    }
  }
}
