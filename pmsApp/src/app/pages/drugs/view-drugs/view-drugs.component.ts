import { Component, OnInit } from '@angular/core';
import { DrugsService } from 'src/app/services/drugs.service';

@Component({
  selector: 'app-view-drugs',
  templateUrl: './view-drugs.component.html',
  styleUrls: ['./view-drugs.component.css']
})

export class ViewDrugsComponent implements OnInit{
    Drugs=[];
  constructor(private _drugs:DrugsService){

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
}
