import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/shared/models/product';

@Component({
  selector: 'app-exo2enfant',
  templateUrl: './exo2enfant.component.html',
  styleUrls: ['./exo2enfant.component.scss']
})
export class Exo2enfantComponent {
  @Input() listToShow : Product[] = [];

  @Output() deleteEvent : EventEmitter<number> = new EventEmitter<number>();

  sendDeleteEvent(id : number) {
    this.deleteEvent.emit(id);
  }
}
