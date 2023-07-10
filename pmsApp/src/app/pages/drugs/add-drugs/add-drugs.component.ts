import { HttpClient } from '@angular/common/http';
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
    img:''
  }


  selectedFile :any;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  message: string="";
  imageName: any;

  //Gets called when the user selects an image
  public onFileChanged(event:any) {
    //Select File
    this.selectedFile = event.target.files[0];
  }


  //Gets called when the user clicks on submit to upload the image
  onUpload() {
    console.log(this.selectedFile);
    
    //FormData API provides methods and properties to allow us easily prepare form data to be sent with POST HTTP requests.
    const uploadImageData = new FormData();
    uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);
  
    //Make a call to the Spring Boot Application to save the image
    this.Drugs.img=this.selectedFile.name;
    this.httpClient.post('http://localhost:8000/image/upload', uploadImageData)
      .subscribe((response) => {
        if (response) {
          this.Drugs.img=File.name;
          this.message = 'Image uploaded successfully';
          console.log("Image uploaded successfully");
        } else {
          this.Drugs.img=File.name;
          this.message = 'Image not uploaded successfully';
          console.log("Image uploaded successfully");
        }
      }
      );


  }






  ngOnInit(): void {
      
  }

  formSubmit(){
    this._drugs.addDrugs(this.Drugs).subscribe({
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
