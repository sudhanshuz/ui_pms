import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from '../services/login.service';


export const doctorGuard: CanActivateFn = (route, state) => {
  let router=inject(Router);
  let login=inject(LoginService);
  if(login.getUserRole()&&login.getUserRole()=="ROLE_DOCTOR"){
    return true;
    }
  return false;
};