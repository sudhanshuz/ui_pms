import { Component, OnInit } from '@angular/core';
import { SupplierService } from 'src/app/services/supplier.service';

@Component({
  selector: 'app-view-suppliers',
  templateUrl: './view-suppliers.component.html',
  styleUrls: ['./view-suppliers.component.css']
})
export class ViewSuppliersComponent implements OnInit{

  Suppliers=[];

  constructor(private _supplier:SupplierService){

  }

  ngOnInit(): void { 
    this._supplier.viewSuppliers().subscribe(
      (data:any)=>{
        this.Suppliers=data;
        console.log(this.Suppliers);
      },
      //handle error here  
    );
}
}
