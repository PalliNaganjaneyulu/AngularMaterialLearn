import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';4
import { Observable } from 'rxjs'
import {map, startWith } from 'rxjs/operators'
@Component({
  selector: 'app-v21autocomplete',
  templateUrl: './v21autocomplete.component.html',
  styleUrls: ['./v21autocomplete.component.scss']
})
export class V21autocompleteComponent implements OnInit {
 ngOnInit(): void {
  this.filterOptions = this.myControl.valueChanges.pipe(startWith(''),
  map(value => this._filter(value)))
 }
  private _filter(value: string): string [ ] {
    const filterValue = value.toLowerCase()
    return this.options.filter( option => option.toLowerCase().includes(filterValue))
  }
 myControl = new FormControl()
 filterOptions : Observable<string[]> | undefined;
 options: string [] = ['Angular', 'React', 'Vue'];
 objectOptions = [
  {name: "Angular"},
  {name: "Angular Material"},
  {name: "React"},
  {name: "vue"}
 ];
 displayFn(subject:any){
  return subject ? subject.name : undefined;
 }
}
