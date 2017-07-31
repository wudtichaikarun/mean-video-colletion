import { Injectable } from '@angular/core';
import { CanActivate,Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../services/auth.service'

@Injectable()
export class AuthGuard implements CanActivate {
  loggedIn: boolean;

  constructor(
    private router: Router,
    private authService: AuthService
  ){}
  
  canActivate(){
    if(this.authService.loggedIn()){
     return true
    }else{
     this.router.navigate(['/login']);
     return false;
    }
  }

}
