import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DrugsService } from 'src/app/services/drugs.service';
import { LoginService } from 'src/app/services/login.service';



@Component({
  selector: 'app-view-drugs',
  templateUrl: './view-drugs.component.html',
  styleUrls: ['./view-drugs.component.css']
})

export class ViewDrugsComponent implements OnInit{
    Drugs=[];
    searchTerm: string="";
    filterData:any;
    isButtonClicked: boolean = false;
  constructor(private _drugs:DrugsService,public user:LoginService, private snack:MatSnackBar){

  }

  getValue(){
    let User= localStorage.getItem("User");
    if(User?.charAt(10)==='2'){
      return true;
    }
    return false;
  }

  ngOnInit(): void {
      this._drugs.viewDrugs().subscribe(
        (data:any)=>{
          this.Drugs=data;
          console.log(this.Drugs);
        },
        //handle error here  
      );


  }

  deleteDrugs(drugName:any){
    this._drugs.deleteDrugs(drugName).subscribe(
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
    this._drugs.viewDrugByName(this.searchTerm).subscribe(
      (data:any)=>{
        console.log(data);
        this.filterData=data;
        this.isButtonClicked=true;
      },
      //handle error here  
    );
  }

  reset(){
    this.isButtonClicked=false;
  }


}
