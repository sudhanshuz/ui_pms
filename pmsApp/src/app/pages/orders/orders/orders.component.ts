import { Component } from '@angular/core';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {
  Orders=[];

  constructor(private _orders:OrdersService){

  }

  ngOnInit(): void { 

    this._orders.viewNewOrders().subscribe(
      (data:any)=>{
        this._orders=data;
        console.log(this._orders);
      },
      //handle error here  
    );
}
}
