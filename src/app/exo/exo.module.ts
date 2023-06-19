import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExoRoutingModule } from './exo-routing.module';
import { ExoComponent } from './exo.component';
import { Exo1Component } from './exo1/exo1.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ExoComponent,
    Exo1Component
  ],
  imports: [
    CommonModule,
    ExoRoutingModule,
    SharedModule
  ]
})
export class ExoModule { }
