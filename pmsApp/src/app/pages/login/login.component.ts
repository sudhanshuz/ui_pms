import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Component ,OnInit} from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

loginData={
  username:'',
  password:''
}

constructor(private snack:MatSnackBar,private login:LoginService){

}

ngOnInit(): void {

}

formSubmit(){
  console.log('login btn clicked');
  if(this.loginData.username.trim()==''||this.loginData.username==null){
this.snack.open('username is required','',{
  duration:3000,
});
return;
  }

  //req server to generate token
this.login.generateToken(this.loginData).subscribe(
    (data:any)=>{
      this.login.loginUser(data.token);
      console.log(data);

      this.login.getCurrentUser().subscribe(
        (user:any)=>{
          this.login.setUser(user);
          console.log(user);
          //if user is admin--> redirect to admin's dashboard
          //if doctor--> redirect to doctor's dashboard

          if(this.login.getUserRole()=="ROLE_ADMIN"){
            //admin dashboard
            window.location.href='/admin';
          }
          else if(this.login.getUserRole()=="ROLE_DOCTOR"){
            //doctor's dashboard
            window.location.href='/doctor';
          }
          else{
            this.login.logout();
          }
        },
        //*******handle error here
      );
    },
    //**************handle error here */
  );
  
}
}


