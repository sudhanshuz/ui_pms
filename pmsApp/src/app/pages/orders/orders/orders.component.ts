import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { OrdersService } from 'src/app/services/orders.service';
import { PageReloadService } from 'src/app/services/page-reload.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
}) 
export class OrdersComponent {
  Orders=[];

  constructor(private _orders:OrdersService,private _user:UserService,private snack:MatSnackBar,private _pageRelod:PageReloadService){

  }

  ngOnInit(): void { 

    this._orders.viewNewOrders().subscribe(
      (data:any)=>{
        this._orders=data;
        this.Orders=data;
        console.log(this._orders);
      },
      //handle error here  
    );

}

verifyOrder(orderId:string){
  this._user.verifyOrderById(orderId).subscribe(
{
  next:(v)=>{
    this.snack.open("verified successfully");
    this._pageRelod.reloadPage();
    console.log(v);
  },
  error:(e)=>{
console.log(e);
console.log(this.Orders);
  },
}
  );
}
}
