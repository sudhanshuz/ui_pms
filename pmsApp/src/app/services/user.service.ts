import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
    
   }

  //add user
  public addUser(User:any){
    return this.http.post(`${baseUrl}/user/add`,User);
  }

public verifyOrderById(orderId:any){
return this.http.put(`${baseUrl}/user/verifyOrderByOrderId/${orderId}`,orderId);
}

public getUserByUserName(name:any){
  return this.http.post(`${baseUrl}/user/getByName/${name}`,name);
}

public editUser(user:any){
  return this.http.put(`${baseUrl}/user/edit/${user}`,user);
}
}
