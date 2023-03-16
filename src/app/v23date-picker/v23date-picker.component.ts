import { Component } from '@angular/core';

@Component({
  selector: 'app-v23date-picker',
  templateUrl: './v23date-picker.component.html',
  styleUrls: ['./v23date-picker.component.scss']
})
export class V23datePickerComponent {

  minDate = new Date(2023, 2, 13)
  maxDate = new Date(2023, 2, 22)

  dateFileter = (date:any)=> {
    const day = date.getDay();
    return day != 0 && day !=6
  }

}
