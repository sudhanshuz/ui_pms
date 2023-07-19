import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  constructor(private _http:HttpClient) { }
  public getReports(){
    return this._http.get(`${baseUrl}/salesReport/getReports`);
  }

  public deleteReports(id:any){
    return this._http.delete(`${baseUrl}/salesReport/delete/${id}`,id);
  }

  public addTodaysReports(date:any){
    return this._http.get(`${baseUrl}/salesReport/addSalesByDate/${date}`,date);

}
public printPdf(sales:any){
  return this._http.post(`${baseUrl}/salesReport/pdf`,sales,{responseType:'arraybuffer'});
}
}
