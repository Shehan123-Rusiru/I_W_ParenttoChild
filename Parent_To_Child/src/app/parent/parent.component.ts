import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {
  //@Output() newItemEvent = new EventEmitter<string>();
  //MyName = "Shehan Rusiru Senanayake";


  public MyName = "";
  public NewName= "";
  


  showItems(newName: any){
     this.NewName = newName;
   }
}
