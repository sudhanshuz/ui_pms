import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import baseUrl from './helper';
@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private _http: HttpClient) { }

  public createOrder(orderRequest:any){
    return this._http.post(`${baseUrl}/payment/createOrder`,orderRequest);
  }
}
