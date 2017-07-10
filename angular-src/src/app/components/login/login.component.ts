import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Subject } from 'rxjs'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: String;
  password: String;
  isloggedIn: Subject<boolean>

  constructor(
    private authService: AuthService,
    private flashMessage: FlashMessagesService,
    private router: Router
  ) { }

  ngOnInit() {
  }
  
  onLoginSubmit(){
    const user = {
      username: this.username,
      password: this.password
    }
    //console.log(`Username is: ${user.username} Password is: ${user.password}`)
    this.authService.logIn(user).subscribe(data => {
    if(data.success){
      this.authService.storeToken(data.token)
      this.flashMessage.show('You are now logged in', { cssClass: 'alert-success',timeout:2000});
      this.router.navigate(['home'])
    }else{
      this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
      //this.router.navigate(['login'])
    }
    })
  }
  //---------------------- START OLD LOGIN CODE ----------------------
    // onLoginSubmit(){
    //   const user = {
    //     username: this.username,
    //     password: this.password
    //   }

    //   this.authService.authenticateUser(user).subscribe(data => {
    //     if(data.success){
    //       this.authService.storeUserData(data.token, data.user);
    //       this.flashMessage.show('You are now logged in', {
    //          cssClass: 'alert-success',
    //          timeout: 5000 });
    //       this.router.navigate(['dashboard'])
    //     }else{
    //           this.flashMessage.show(data.msg, {
    //           cssClass: 'alert-danger',
    //           timeout: 5000 });
    //           this.router.navigate(['login'])
    //     }
    //   });
    // }
  //---------------------- END OLD LOGIN CODE ----------------------

}
