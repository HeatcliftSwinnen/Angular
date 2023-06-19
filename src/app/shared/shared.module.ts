import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToFarenheitPipe } from './pipes/to-farenheit.pipe';
import { ConvertTempPipe } from './pipes/convert-temp.pipe';

// Module partagé qui va nous servir à déclarer des fonctionnalités qu'on voudra rendre disponibles pour toute l'app grâce à l'export

@NgModule({
  declarations: [
    ToFarenheitPipe,
    ConvertTempPipe
  ],
  imports: [
    CommonModule
  ],
  exports : [
    ToFarenheitPipe,
    ConvertTempPipe
  ]
})
export class SharedModule { }
