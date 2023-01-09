import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})

export class ChildComponent {
 
  @Input() name: string;
  names = [''];

  constructor(){
    this.name = "";
  
  }

  addItem(newName: any)
  {
    this.names.push(newName);
  }

}

