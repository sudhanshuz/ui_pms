import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(public login:LoginService){

  }

  localStorageIsEmpty(): boolean {
    return localStorage.getItem('User')==null;
  }

  public isLoggedIn():boolean{
    return this.login.isLoggedIn();
  }
  

  public logout(){
    this.login.logout();
    //window.location.reload();
  }
}
