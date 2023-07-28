import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  username:any;
  name:any;
  role:any;
  User:any;
constructor(public login:LoginService,private _user:UserService){
this.username=login.getUser().name;
this.role=login.getUser().role;
console.log(this.username);
this.getUserByUserName();
  
}

public getUserByUserName(){
  this._user.getUserByUserName(this.username).subscribe({
    next:(e)=>{
      this.User=e;
      console.log(e);
      console.log(this.User);

    }
  });
}
  ngOnInit(): void {

  }
}
