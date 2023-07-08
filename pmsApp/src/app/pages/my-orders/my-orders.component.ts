import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent {
  Order:any;
  fullName:any;
  constructor(private _route:ActivatedRoute,private _orders:OrdersService){
    this['fullName']=this._route.snapshot.params['fullName'];
    this._orders.getMyOrdersByDocName(this.fullName).subscribe(
      (data:any)=>{
        this.Order=data;
        console.log(this.Order);
      },
    );
  }
}
