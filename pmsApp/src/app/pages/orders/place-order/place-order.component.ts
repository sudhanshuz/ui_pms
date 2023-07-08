import { state } from '@angular/animations';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { DrugsService } from 'src/app/services/drugs.service';
import { LoginService } from 'src/app/services/login.service';
import { OrdersService } from 'src/app/services/orders.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.css']
})
export class PlaceOrderComponent {

  public User={
    name:'', 
    fullName:'',
    contact:'',
    email:'',
    password:'',
  }
  
Drugs:any;
Data:any;
public Orders={
  docName:'', 
  docEmail:'',
  docContact:'',
  drugName:'',
  qty:''
}
  drugName:string="";


  constructor(private _route:ActivatedRoute,private _drugs:DrugsService,private snack:MatSnackBar
    , private _router:Router, private _orders:OrdersService, private _login:LoginService
    ){
    this['drugName']=this._route.snapshot.params['drugName'];
    this._drugs.viewDrugByName(this.drugName).subscribe(
      (data:any)=>{
        this.Drugs=data;
        this.Orders.drugName=this.drugName;
        console.log(this.Drugs);
      },
    );

    this.User=this._login.getUser();
      this.Orders.docName=this.User.fullName;
      this.Orders.docEmail=this.User.email;
      this.Orders.docContact=this.User.contact;

      
  } 
  
  public placeOrder(){

    console.log(this.Orders);
    this._orders.placeOrder(this.Orders).subscribe(
      {
        next: (v) =>{
          //here navigate to payment page if confirmed by admin
          this.Data=v;
         this._router.navigate(['/doctor/wait/'+this.Data.orderId]);
          console.log(v);
        }
        ,
        error: (e) =>{
        console.log(this.Orders);
        },
        complete: () => console.info('complete')
        //handle the error here
    }
    )
  }

}
