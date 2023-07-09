import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ReportsService } from 'src/app/services/reports.service';

@Component({
  selector: 'app-view-reports',
  templateUrl: './view-reports.component.html',
  styleUrls: ['./view-reports.component.css']
})
export class ViewReportsComponent {

  Sales:any={};

  constructor(private _reports:ReportsService,private snack:MatSnackBar){
    this._reports.getReports().subscribe(
      {
        next:(v)=>{
          this.Sales=v;
          console.log(this.Sales);
        }
      }
    );
  }

  public deleteReports(id:any){
    this._reports.deleteReports(id).subscribe(
      {
        next:(v)=>{
          console.log(v);
          this.snack.open("deleted successfully");
        }
      }
    );
  }


}
