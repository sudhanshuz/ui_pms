import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-wait',
  templateUrl: './wait.component.html',
  styleUrls: ['./wait.component.css']
})
export class WaitComponent {
  public Order={
    docName:'', 
    docEmail:'',
    docContact:'',
    drugName:'',
    qty:''
  }

  constructor(){
    console.log(this.Order);
  }


}
