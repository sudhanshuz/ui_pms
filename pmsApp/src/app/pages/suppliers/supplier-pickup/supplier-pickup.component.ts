import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { OrdersService } from 'src/app/services/orders.service';
import { SupplierService } from 'src/app/services/supplier.service';

@Component({
  selector: 'app-supplier-pickup',
  templateUrl: './supplier-pickup.component.html',
  styleUrls: ['./supplier-pickup.component.css']
})
export class SupplierPickupComponent {

  Orders:any={};
  supplierId:any;
constructor(private _orders:OrdersService, private _supplier:SupplierService,private snack:MatSnackBar){

  this._orders.viewVerifiedOrders().subscribe(
    (data:any)=>{
      this._orders=data;
      this.Orders=data; 
      console.log(this._orders);
    },
  );
}

PickupOrder(orderId:any,supplierId:any){
  this._supplier.pickupOrder(orderId,supplierId).subscribe({
    next:(data)=>{
      console.log(data);
      this.snack.open("Order has been picked up successfully!",'',{
        duration:3000
      })
    },
    error:(e)=>{
      this.snack.open("something went wrong",'',{
        duration:3000
      });
    }
  }
  
  );
}

} 
