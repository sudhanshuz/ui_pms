import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-wait',
  templateUrl: './wait.component.html',
  styleUrls: ['./wait.component.css']
})
export class WaitComponent {
Order:any;
orderId:any;

  constructor(private _orders:OrdersService, private _route:ActivatedRoute){
    this['orderId']=this._route.snapshot.params['orderId'];
    this._orders.getOrderById(this.orderId).subscribe(
      (data:any)=>{
        this.Order=data;
        this.Order.orderId=this.orderId;
        console.log(this.Order);
        if(this.Order.verified){
          //location.reload();
          console.log("payment page");
        }
      },
    );
  }


}
