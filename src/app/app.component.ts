import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { V26modelComponent } from './v26model/v26model.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mymatlearn';
  opened =false
  userName = 'Palli'
  mySelectedValue!:string
  mySelectedValue1!:string

  constructor(public dialog:MatDialog){}

  onTabChange(ind:any){
    console.log("indeeeex", ind)

  }
  // onOpenModel(){
  //   this.dialog.open(V26modelComponent )

  // }
  onOpenModel(){
    let dialogRef = this.dialog.open(V26modelComponent)
    dialogRef.afterClosed().subscribe(
      result => { console.log(`Dialog Result: ${result}`)}
    )
  }

}
