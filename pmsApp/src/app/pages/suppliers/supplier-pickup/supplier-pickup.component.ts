import { Component } from '@angular/core';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-supplier-pickup',
  templateUrl: './supplier-pickup.component.html',
  styleUrls: ['./supplier-pickup.component.css']
})
export class SupplierPickupComponent {

  Orders:any={};
  supplierId:any;
constructor(private _orders:OrdersService){

  this._orders.viewVerifiedOrders().subscribe(
    (data:any)=>{
      this._orders=data;
      this.Orders=data; 
      console.log(this._orders);
    },
  );
}

PickupOrder(){
  console.log(this.supplierId);
  this._orders.pickUpOrder(this.Orders.orderId,this.supplierId).subscribe(
    {
      next:(data)=>{
        console.log(data);
      }
    }
  );
}
} 
