import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})

export class ChildComponent {
 
  @Input() name: string;
  @Output() newNameEvent = new EventEmitter<string>();

  private Typed_names = "";

  constructor(){
    this.name = "";
  }



  addItem(value: any) {
    this.newNameEvent.emit(value);
  }

}

