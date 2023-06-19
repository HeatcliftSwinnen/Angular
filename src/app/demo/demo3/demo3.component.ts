import { Component } from '@angular/core';

@Component({
  selector: 'app-demo3',
  templateUrl: './demo3.component.html',
  styleUrls: ['./demo3.component.scss']
})
export class Demo3Component {
  // ngStyle
  colors : string[] = ["green", "red", "blue", "yellow"];
  currentColor : number = 0;

  // ngClass
  isBig : boolean = false;
  isBold : boolean = false;
  isItalic : boolean = false;

  constructor() {
    //ngStyle
    setInterval(() => {
      this.currentColor++;
      if(this.currentColor > this.colors.length-1) this.currentColor = 0;
    }, 2000)
  }

  toggleBig() : void {
    this.isBig = !this.isBig;
  }
  toggleBold() : void {
    this.isBold = !this.isBold;
  }
  toggleItalic() : void {
    this.isItalic = !this.isItalic;
  }
}
