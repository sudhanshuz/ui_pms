import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmation-dialog',
  template: `
    <h2 mat-dialog-title>{{ data.title }}</h2>
    <div mat-dialog-content>{{ data.message }}</div>
    <div mat-dialog-actions>
      <button mat-button (click)="onCancelClick()">Cancel</button>
      <button mat-button (click)="onSureClick()">Sure</button>
    </div>
  `,
})
export class ConfirmationDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<ConfirmationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onCancelClick(): void {
    this.dialogRef.close(false);
  }

  onSureClick(): void {
    this.dialogRef.close(true);
  }
}

