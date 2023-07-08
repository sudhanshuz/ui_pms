import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { SupplierService } from 'src/app/services/supplier.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-suppliers',
  templateUrl: './edit-suppliers.component.html',
  styleUrls: ['./edit-suppliers.component.css'] 
})
export class EditSuppliersComponent {
  supplierId=0;
  Supplier:any;
  constructor(private _route:ActivatedRoute,private _supplier:SupplierService,private snack:MatSnackBar
    , private _router:Router
    ){
    this['supplierId']=this._route.snapshot.params['supplierId'];
    this._supplier.viewSupplierById(this.supplierId).subscribe(
      (data:any)=>{
        this.Supplier=data;
        console.log(this.Supplier);
      },
    );


  }

  public editSupplier(){
    this._supplier.editSupplier(this.Supplier).subscribe(
      {
        next: (v) =>{
          this._router.navigate(['/admin/viewSuppliers']);
        }
        ,
        error: (e) => this.snack.open('something went wrong','',{
          duration:3000
        }),
        complete: () => console.info('complete')
        //handle the error here
    }
    )
  }


}
