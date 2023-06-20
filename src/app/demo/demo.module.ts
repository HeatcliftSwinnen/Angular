import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoRoutingModule } from './demo-routing.module';
import { DemoComponent } from './demo.component';
import { Demo1Component } from './demo1/demo1.component';
import { Demo2Component } from './demo2/demo2.component';
import { SharedModule } from '../shared/shared.module';
import { Demo3Component } from './demo3/demo3.component';
import { Demo4Component } from './demo4/demo4.component';
import { Demo4enfantComponent } from './demo4/demo4enfant/demo4enfant.component';


@NgModule({
  declarations: [
    DemoComponent,
    Demo1Component,
    Demo2Component,
    Demo3Component,
    Demo4Component,
    Demo4enfantComponent,
  ],
  imports: [
    CommonModule,
    DemoRoutingModule,
    SharedModule, //Nous permet d'accéder à toutes les fonctionnalités exportées dans le module partagé
  ],
  bootstrap : [DemoComponent]
})
export class DemoModule { }
