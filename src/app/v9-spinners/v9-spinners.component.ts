import { Component } from '@angular/core';

@Component({
  selector: 'app-v9-spinners',
  templateUrl: './v9-spinners.component.html',
  styleUrls: ['./v9-spinners.component.scss']
})
export class V9SpinnersComponent {
  showSpinner = false
  onLoadData(){
    this.showSpinner = true;
    setTimeout(()=>{
      this.showSpinner=false
    },5000)
  }
}
