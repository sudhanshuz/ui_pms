import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  //get current user
  public getCurrentUser(){
    let accessToken = localStorage.getItem('token');
    return this.http.get(`${baseUrl}/user/currentUser`,{
      headers: new HttpHeaders({
        "Authorization":`Bearer ${accessToken}`,
      }),
    });
  }

  //generate token

  public generateToken(loginData:any){
    return this.http.post(`${baseUrl}/user/authenticate`,loginData);
  }

  //login user: sets token in localStorage
  public loginUser(token:any){
    localStorage.setItem('token',token)
      return true;
  }
//isLogged in or not
public isLoggedIn(){
  let tokenStr=localStorage.getItem("token")
  if(tokenStr==undefined||tokenStr==''||tokenStr==null){
    return false;
  }
  else{
    return true;
  }
}

//islogout

public isLoggedOut(){
  let tokenStr=localStorage.getItem("token")
  if(tokenStr==undefined||tokenStr==''||tokenStr==null){
    return true;
  }
  else{
    return false;
  }
}
//logout: remove token from local storage
public logout(){
  localStorage.removeItem('token');
  localStorage.removeItem('User');
  return true;
}
//get token
public getToken(){
  return localStorage.getItem('token');
}

//set userDetails
public setUser(User:any){
  localStorage.setItem('User',JSON.stringify(User));

}

public getUser(){
  let userStr=localStorage.getItem('User');
  if(userStr!=null){
    return JSON.parse(userStr);
  }
  else{
    this.logout();
    return null;
  }
}

//getUser role
public getUserRole(){
  let user=this.getUser();
  return user.role;
}
}
