import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ConfirmationDialogComponent } from 'src/app/components/confirmation-dialog/confirmation-dialog.component';
import { ReportsService } from 'src/app/services/reports.service';

@Component({
  selector: 'app-view-reports',
  templateUrl: './view-reports.component.html',
  styleUrls: ['./view-reports.component.css']
})
export class ViewReportsComponent {

  Sales:any={};
  constructor(private _reports:ReportsService,private snack:MatSnackBar,private dialog: MatDialog){
    this._reports.getReports().subscribe(
      {
        next:(v)=>{
          this.Sales=v;
          console.log(this.Sales);
        }
      }
    );
  }

  onDeleteClick(id:any): void {
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
        this.deleteReports(id);
      } 
  }});
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

  public printPdf(sales:any){
    console.log(sales);
    this._reports.printPdf(sales).subscribe({
      next:(response)=>{
        const file = new Blob([response], { type: 'application/pdf' });

      // Create a URL for the Blob
      const fileURL = URL.createObjectURL(file);

      // Open the PDF in a new window for printing
      window.open(fileURL, '_blank');
      },
      error:(e)=>{
        console.log(sales);
        console.log(e);
        alert("something went wrong");
      }
    })
  }

}
