import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-demo6',
  templateUrl: './demo6.component.html',
  styleUrls: ['./demo6.component.scss']
})
export class Demo6Component {
  contactForm : FormGroup;

  constructor(private _fb : FormBuilder) {
    this.contactForm = this._fb.group({
      //nomControl : [valeur, [Validateurs synchrones] , [Validateurs asynchrones]]
      lastname : [null, [ Validators.required, Validators.minLength(2), Validators.maxLength(100) ]],
      firstname : [null, [ Validators.required, Validators.minLength(2), Validators.maxLength(100) ]],
      birthdate : [null, [ Validators.required ]],
      email : [null, [Validators.required, Validators.email]],
      height : [null, [Validators.min(50), Validators.max(230)]],
      couple : [false],
      gender : ['male', [Validators.required]],
      type : ['', [Validators.required]],
      //password : [null, [Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)]]
    })
  }

  addContact() {
    if(this.contactForm.valid) {
      console.log(this.contactForm.value);
    } else {
      console.log("PAS VALIDE !!");
      //Tous les controls vont être touched
      //Du coup toutes nos erreurs requis vont apparaitre
      this.contactForm.markAllAsTouched();
    }    
  }
}
