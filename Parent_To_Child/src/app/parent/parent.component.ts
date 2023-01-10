import { Component} from '@angular/core';


@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {

 // @Output() newItemEvent = new EventEmitter<string>(); // 

  public MyName = "";
  public NewName= "";
  


  showItems(newName: any){
     this.NewName = newName;
   }

     // addItem(newName: string)
  // {
  //   this.Typed_names.push(newName);
  // }
  
   
  
}
