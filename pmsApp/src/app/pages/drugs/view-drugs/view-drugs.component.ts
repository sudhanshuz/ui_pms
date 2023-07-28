import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DrugsService } from 'src/app/services/drugs.service';
import { LoginService } from 'src/app/services/login.service';
import { HttpClient,HttpErrorResponse  } from '@angular/common/http';
import { ConfirmationDialogComponent } from 'src/app/components/confirmation-dialog/confirmation-dialog.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-view-drugs',
  templateUrl: './view-drugs.component.html',
  styleUrls: ['./view-drugs.component.css']
})

export class ViewDrugsComponent implements OnInit{
    Drugs=[];
    searchTerm: string="";
    filterData:any;
    unFilterData:any;
    isButtonClicked: boolean = false;
    isPageRefreshed:boolean=false;

    retrievedImage:string[]=[];
    filterImg:any;
    base64Data: any;
    retrieveResonse:any;
    imageName:any;
  constructor(private _drugs:DrugsService,public user:LoginService, private snack:MatSnackBar , private  httpClient:HttpClient,private dialog:MatDialog){

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
          data.forEach((item: any) => {
            this.getImage(item['imageName'])
            console.log(item);
          });
           //this.imageName=item['imageName']; 
          console.log(this.Drugs);
        },
        //handle error here  
      );   

  }

  onDeleteClick(name:any): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: {
        title: 'Delete Confirmation',
        message: 'Are you sure you want to delete this item?',
      },
    });

    dialogRef.afterClosed().subscribe({
      
     next:(result)  => {
      if (result === true) {
        // Perform the delete action here
        // Call your delete API or delete logic
        this.deleteDrugs(name);
      } 
  }});
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
    this._drugs.viewDrugByName(this.searchTerm).subscribe({
      next:(data)=>{
        console.log(data);
        this.filterData=data;
        this.getFilteredImage(this.filterData['imageName']);
        this.isButtonClicked=true;
      },
      //handle error here
      error:(e)=>{
        this.snack.open("incorrect drug name",'',{
          duration:3000
        });
      }  
  });
  }

  getImage(img:any) {
    //Make a call to Sprinf Boot to get the Image Bytes.
    this.httpClient.get('http://localhost:8000/image/get/' + img)
      .subscribe(
        res => {
          this.retrieveResonse = res;
          this.base64Data = this.retrieveResonse.picByte;
          this.retrievedImage.push('data:image/jpeg;base64,' + this.base64Data);
        }
      );
      console.log(this.retrievedImage);
  }


  getFilteredImage(img:any) {
    //Make a call to Sprinf Boot to get the Image Bytes.
    this.httpClient.get('http://localhost:8000/image/get/' + img)
      .subscribe(
        res => {
          this.retrieveResonse = res;
          this.base64Data = this.retrieveResonse.picByte;
          this.filterImg=('data:image/jpeg;base64,' + this.base64Data);
        }
      );
      console.log(this.retrievedImage); 
  }

  reset(){
    this.isButtonClicked=false;
  }


}
