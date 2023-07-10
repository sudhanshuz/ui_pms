import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html', 
  styleUrls: ['./edit-user.component.css']
}) 
export class EditUserComponent {

  username:string="";
  User:any;
  constructor(private _route:ActivatedRoute,private _user:UserService,private _login:LoginService,private snack:MatSnackBar){
    //this['username']=this._route.snapshot.params['name']; 
    this.username=_login.getUser().name;
   console.log(this.username);  
   this.User=_login.getUser();
   console.log(this.User);
}

editUser(){
  console.log(this.User);
  this._user.editUser(this.User).subscribe({

    next:(data)=>{
      this.User=data;
      console.log(data);
      this.snack.open("updated successfully",'',{
        duration:3000
      }
      
      );
    },
    error:(e)=>{
      this.snack.open("something went wrong",'',{
        duration:3000
      }
      
      );
    }
  });
}

}
