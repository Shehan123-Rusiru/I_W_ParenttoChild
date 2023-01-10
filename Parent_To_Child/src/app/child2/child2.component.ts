import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.scss']
})
export class Child2Component {

  @Output() newNameEvent = new EventEmitter<string>();

  addItem(value: any) {
    this.newNameEvent.emit(value);
  }
}
