import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-demo6',
  templateUrl: './demo6.component.html',
  styleUrls: ['./demo6.component.scss']
})
export class Demo6Component {
  contactForm : FormGroup;

  constructor(private _fb : FormBuilder) {
    this.contactForm = this._fb.group({
      lastname : [null, []],
      firstname : [null],
      birthdate : [null],
      email : [null],
      height : [null],
      couple : [false],
      gender : ['male'],
      type : ['']
    })
  }

  addContact() {
    console.log(this.contactForm.value);
    
  }
}
