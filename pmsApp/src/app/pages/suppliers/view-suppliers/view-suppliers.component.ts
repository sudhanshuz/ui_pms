import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SupplierService } from 'src/app/services/supplier.service';

@Component({
  selector: 'app-view-suppliers',
  templateUrl: './view-suppliers.component.html',
  styleUrls: ['./view-suppliers.component.css']
})
export class ViewSuppliersComponent implements OnInit{

  Suppliers=[];
  searchTerm: string="";
  filterData:any;
  isButtonClicked: boolean = false;

  constructor(private _supplier:SupplierService, private snack:MatSnackBar){

  }

  ngOnInit(): void { 
    this._supplier.viewSuppliers().subscribe({

      next:(data:any)=>{
        this.Suppliers=data;
        console.log(this.Suppliers);
      },
      error:(e)=>{
        this.snack.open("supplier not available",'',
        {
          duration:3000
        }
        )
      }

      //handle error here  
  });
}

deleteSupplier(id:any){
  this._supplier.deleteSupplier(id).subscribe(
    {
      next: (v) => this.snack.open('successfully deleted','',{
        duration:3000
        
      })
      ,
      error: (e) => this.snack.open('something went wrong','',{
        duration:3000
      }),
      complete: () => console.info('complete')
      //handle the error here
  }
  );
}



search() {
  this._supplier.viewSupplierByName(this.searchTerm).subscribe({
    next:(data:any)=>{
      console.log(data);
      if(data!==null){
      this.filterData=data;
      this.isButtonClicked=true;}
      else{
        this.snack.open('invalid name','',{
          duration:3000
        });
      }
    },
    error:(e)=>{this.snack.open('invalid name','',{
      duration:3000
    });

    }
    //handle error here  
});
}

reset(){
  this.isButtonClicked=false;
}
}
