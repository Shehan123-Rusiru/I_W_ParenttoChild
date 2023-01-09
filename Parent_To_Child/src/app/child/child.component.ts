import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})

export class ChildComponent {
 
  @Input() name: string;

  constructor(){
    this.name = "";
    //console.log();
   // alert(this.name);
  }

}

