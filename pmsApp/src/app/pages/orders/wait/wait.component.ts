import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrdersService } from 'src/app/services/orders.service';
import { PageReloadService } from 'src/app/services/page-reload.service';

@Component({
  selector: 'app-wait',
  templateUrl: './wait.component.html',
  styleUrls: ['./wait.component.css']
})
export class WaitComponent {
Order:any;
orderId:any;
isPlaced=false;

  constructor(private _orders:OrdersService, private _route:ActivatedRoute,private _pageReload:PageReloadService){
    this['orderId']=this._route.snapshot.params['orderId'];
    this._orders.getOrderById(this.orderId).subscribe(
      (data:any)=>{
        this.Order=data;
        this.Order.orderId=this.orderId;
        console.log(this.Order);
      },
    );

    this._pageReload.getReloadObservable().subscribe(() => {
      this.reloadPage();
    });
  }

  reloadPage() {
    location.reload();
  }
}
