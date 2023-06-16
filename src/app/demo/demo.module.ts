import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoRoutingModule } from './demo-routing.module';
import { DemoComponent } from './demo.component';
import { Demo1Component } from './demo1/demo1.component';


@NgModule({
  declarations: [
    DemoComponent,
    Demo1Component
  ],
  imports: [
    CommonModule,
    DemoRoutingModule
  ],
  bootstrap : [DemoComponent]
})
export class DemoModule { }
