import { Component } from '@angular/core';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-picked-up-orders',
  templateUrl: './picked-up-orders.component.html',
  styleUrls: ['./picked-up-orders.component.css']
})
export class PickedUpOrdersComponent {

  pickedUpOrders=[];

  constructor(private _pickedUpOrders:OrdersService){

  }

  ngOnInit(): void { 

    this._pickedUpOrders.viewPickedUpOrders().subscribe(
      (data:any)=>{
        this._pickedUpOrders=data;
        console.log(this._pickedUpOrders);
      },
      //handle error here  
    );
}
} 
