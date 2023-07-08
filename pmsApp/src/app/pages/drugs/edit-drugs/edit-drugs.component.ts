import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { DrugsService } from 'src/app/services/drugs.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-drugs',
  templateUrl: './edit-drugs.component.html',
  styleUrls: ['./edit-drugs.component.css']
})
export class EditDrugsComponent {
  drugName:string="";
  Drugs:any;
  constructor(private _route:ActivatedRoute,private _drugs:DrugsService,private snack:MatSnackBar
    , private _router:Router
    ){
    this['drugName']=this._route.snapshot.params['drugName'];
    this._drugs.viewDrugByName(this.drugName).subscribe(
      (data:any)=>{
        this.Drugs=data;
        console.log(this.Drugs);
      },
    );


  } 

  public editDrugs(){
    this._drugs.editDrugs(this.Drugs).subscribe(
      {
        next: (v) =>{
          this._router.navigate(['/admin/viewDrugs'])
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
