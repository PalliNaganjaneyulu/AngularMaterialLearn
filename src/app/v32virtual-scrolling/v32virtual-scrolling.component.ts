import { Component } from '@angular/core';

@Component({
  selector: 'app-v32virtual-scrolling',
  templateUrl: './v32virtual-scrolling.component.html',
  styleUrls: ['./v32virtual-scrolling.component.scss']
})
export class V32virtualScrollingComponent {
  numbers:any = []

  constructor(){
    for(let i=1; i<=100; i++){
      this.numbers.push(i)
    }
  }
}
