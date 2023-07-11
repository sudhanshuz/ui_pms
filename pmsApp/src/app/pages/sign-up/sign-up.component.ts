import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit{

  constructor(private userService :UserService, private snack:MatSnackBar){

  }
  public User={
    name:'', 
    fullName:'',
    contact:'',
    email:'',
    password:'',
  }
  ngOnInit(): void {
      
  }

  formSubmit(){
    this.userService.addUser(this.User).subscribe({
      next: (v) => this.snack.open('successfully registered!! please Proceed with login','',{
        duration:3000
      }),
      error: (e) => this.snack.open('something went wrong','',{
        duration:3000
      }),
      complete: () => console.info('complete')
      //handle the error here
  });
  }
}

