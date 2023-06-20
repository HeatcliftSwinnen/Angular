import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToFarenheitPipe } from './pipes/to-farenheit.pipe';
import { ConvertTempPipe } from './pipes/convert-temp.pipe';
import { ConvertTimePipe } from './pipes/convert-time.pipe';
import { HighlightDirective } from './directives/highlight.directive';
import { TrainerCardComponent } from '../components/trainer-card/trainer-card.component';

// Module partagé qui va nous servir à déclarer des fonctionnalités qu'on voudra rendre disponibles pour toute l'app grâce à l'export

@NgModule({
  declarations: [
    ToFarenheitPipe,
    ConvertTempPipe,
    ConvertTimePipe,
    HighlightDirective,
    TrainerCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports : [
    ToFarenheitPipe,
    ConvertTempPipe,
    ConvertTimePipe,
    HighlightDirective,
    TrainerCardComponent
  ]
})
export class SharedModule { }
