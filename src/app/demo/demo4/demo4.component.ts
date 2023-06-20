import { Component } from '@angular/core';

@Component({
  selector: 'app-demo4',
  templateUrl: './demo4.component.html',
  styleUrls: ['./demo4.component.scss']
})
export class Demo4Component {
  firstname : string = "Roger";
  hobbies : string[] = ["Pétanque", "Ricard", "OnePiece"];

  childNeed : string = "...[Ne sait pas ce qu'il veut]...";

  receiveNeed(need : string) {
    this.childNeed = need;
  }
}
