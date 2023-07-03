import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class DrugsService {

  constructor(private _http:HttpClient) {

   }

   public viewDrugs(){
    return this._http.get(`${baseUrl}/drugs/getAll`);
        }
}
