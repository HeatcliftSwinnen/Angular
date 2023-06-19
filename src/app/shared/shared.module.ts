import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToFarenheitPipe } from './pipes/to-farenheit.pipe';
import { ConvertTempPipe } from './pipes/convert-temp.pipe';
import { ConvertTimePipe } from './pipes/convert-time.pipe';
import { HighlightDirective } from './directives/highlight.directive';

// Module partagé qui va nous servir à déclarer des fonctionnalités qu'on voudra rendre disponibles pour toute l'app grâce à l'export

@NgModule({
  declarations: [
    ToFarenheitPipe,
    ConvertTempPipe,
    ConvertTimePipe,
    HighlightDirective
  ],
  imports: [
    CommonModule
  ],
  exports : [
    ToFarenheitPipe,
    ConvertTempPipe,
    ConvertTimePipe,
    HighlightDirective
  ]
})
export class SharedModule { }
