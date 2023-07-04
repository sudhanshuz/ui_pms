import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DrugsService } from 'src/app/services/drugs.service';

@Component({
  selector: 'app-add-drugs',
  templateUrl: './add-drugs.component.html',
  styleUrls: ['./add-drugs.component.css']
})
export class AddDrugsComponent implements OnInit{

  constructor(private _drugs :DrugsService, private snack:MatSnackBar){

  }
  public Drugs={
    drugName:'', 
    price:'',
    exp_date:'',
    batchId:'',
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
