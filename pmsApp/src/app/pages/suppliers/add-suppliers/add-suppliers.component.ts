import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SupplierService } from 'src/app/services/supplier.service';

@Component({
  selector: 'app-add-suppliers',
  templateUrl: './add-suppliers.component.html',
  styleUrls: ['./add-suppliers.component.css']
})
export class AddSuppliersComponent implements OnInit{
  constructor(private _supplier :SupplierService, private snack:MatSnackBar){

  }
  public Supplier={
    supplierId:'', 
    supplierName:'',
    supplierEmail:'',
    supplierPhoneNo:''
  }

  ngOnInit(): void {
      
  }

  formSubmit(){
    this._supplier.addSuppliers(this.Supplier).subscribe({
      next: (v) => this.snack.open('successfully added','',{
        duration:3000
      }),
      error: (e) => this.snack.open('something went wrong','',{
        duration:3000
      }),
      complete: () => console.info('complete')
      //handle the error here
  });
  }
}
