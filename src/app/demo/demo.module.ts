import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoRoutingModule } from './demo-routing.module';
import { DemoComponent } from './demo.component';
import { Demo1Component } from './demo1/demo1.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DemoComponent,
    Demo1Component
  ],
  imports: [
    CommonModule,
    DemoRoutingModule,
    FormsModule, //Vous permet d'utiliser ngModel pour le Two Way Binding
  ],
  bootstrap : [DemoComponent]
})
export class DemoModule { }
