import { HttpClient,HttpErrorResponse  } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DrugsService } from 'src/app/services/drugs.service';

@Component({
  selector: 'app-add-drugs',
  templateUrl: './add-drugs.component.html',
  styleUrls: ['./add-drugs.component.css']
})
export class AddDrugsComponent implements OnInit{

  constructor(private _drugs :DrugsService, private snack:MatSnackBar,private httpClient: HttpClient){

  }
  public Drugs={
    drugName:'', 
    price:'',
    exp_date:'',
    batchId:'',
    imageName:''
  }

file:any;
  ngOnInit(): void {
      
  }

  OnChangeFileField(event:any){
    console.log(event.target.files[0]);
    this.file=event.target.files[0];
    this.Drugs.imageName=this.file.name;
    console.log(this.file);
    console.log(this.Drugs);
  }

  formSubmit(){
    console.log(this.Drugs);
    this._drugs.addDrugsWithImg(this.Drugs,this.file).subscribe({
      next:(data)=>{
console.log(data);
alert("added successfully");
      },
      error:(e)=>{
        console.log(e);
console.log("something went wrong");
      },
      complete:()=>{

      }
    })
  }

}
