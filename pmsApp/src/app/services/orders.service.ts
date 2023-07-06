import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class OrdersService{

  constructor(private _http:HttpClient) { }

  public viewNewOrders(){
    return this._http.get(`${baseUrl}/orders/viewNewOrders`);
        }

        public viewPickedUpOrders(){
          return this._http.get(`${baseUrl}/orders/viewPickedUpOrders`);
              }

              public placeOrder(Orders:any){
                return this._http.post(`${baseUrl}/orders/add`,Orders);
              }



}
