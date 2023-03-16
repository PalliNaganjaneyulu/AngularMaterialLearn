import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-v25snakebar',
  templateUrl: './v25snakebar.component.html',
  styleUrls: ['./v25snakebar.component.scss']
})
export class V25snakebarComponent {

  constructor(private _snackBar: MatSnackBar){

  }

  // openSnakBar(msg:string, action:any){
  //   this._snackBar.open(msg, action, {duration:2000})

  // }

  openSnakBar(msg:string, action:any){
   let snackBarRef =  this._snackBar.open(msg, action, {duration:2000})
   snackBarRef.afterDismissed().subscribe(
    ()=>{console.log("Action Dismissed")}
   )

   snackBarRef.onAction().subscribe(
    ()=>{console.log("Action Was Triggered")}
   )

  }
}
