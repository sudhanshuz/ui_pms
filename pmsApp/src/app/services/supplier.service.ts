import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  constructor(private _http:HttpClient) { }

  public viewSuppliers(){
    return this._http.get(`${baseUrl}/supplier/getAll`);
        }

        public addSuppliers(Supplier:any){
          return this._http.post(`${baseUrl}/supplier/add`,Supplier);
              }

              public deleteSupplier(supplierId:any){
                return this._http.delete(`${baseUrl}/supplier/delete/${supplierId}`,supplierId);
              }

              public viewSupplierByName(supplierName:any){
                return this._http.get(`${baseUrl}/supplier/viewSupplierByName/${supplierName}`,supplierName);
              }

              public editSupplier(Supplier:any){
                return this._http.put(`${baseUrl}/supplier/edit`,Supplier);
              }

              public viewSupplierById(supplierId:any){
                return this._http.get(`${baseUrl}/supplier/viewSupplierById/${supplierId}`,supplierId);
              }

              public pickupOrder(orderId:any,supplierId:any){
                return this._http.put(`${baseUrl}/supplier/pickUpOrder/${orderId}/${supplierId}`,orderId,supplierId);
              }
}
