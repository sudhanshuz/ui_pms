import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{

  name:any;
  role:any;
constructor(public login:LoginService,private _user:UserService){
this.name=login.getUser().name;
this.role=login.getUser().role;
console.log(this.name);
  
}
  ngOnInit(): void {

  }
}
