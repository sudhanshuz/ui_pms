import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import baseUrl from './helper';
import { Observable } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

@Injectable({
  providedIn: 'root'
})


export class PaymentService {

  constructor(private _http: HttpClient) { }

  public createOrder(orderRequest:any):Observable<any>{
    return this._http.post(`${baseUrl}/payment/createOrder`,
    {customerName: orderRequest.name,
		email: orderRequest.email,
		phoneNumber: orderRequest.phone,
		amount: orderRequest.amount
		},httpOptions);
  }
}
