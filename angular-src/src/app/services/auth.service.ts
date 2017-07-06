import { Injectable } from '@angular/core';
import { RequestOptionsArgs, Response ,Headers } from '@angular/http';
import { AuthHttpService } from '../shared/auth-http.service'
import { Observable, BehaviorSubject} from 'rxjs';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import { tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class AuthService {
  //-----------------_> New HTTP- SERVICE START ---------------------------
  //loggedIn = new Subject<boolean>();
   authToken: any;

  constructor(
    private http: AuthHttpService,
    private router: Router
  ){}

  // Login
  logIn(user){
    const options: RequestOptionsArgs = {
      headers: new Headers({ 'Content-Type': 'application/json'})
    };
    const response : Observable<Response> = this.http
      .post('/users/login', user, options);
    this.setTokenFromResponse(response);
    this.router.navigate(['/'])
  }

  private setTokenFromResponse(observable: Observable<Response>){
    observable
      .map(({ headers }: Response) => headers.get('Authorization'))
      .map((token: string) => token.match(/JWT (.*)/)[1])
      .subscribe((token: string) => {
      this.storeToken(token);
      })
  }
    // Set token to localstorage
  storeToken(token: string){
    localStorage.setItem('access-token', token)
  }

  // Register
  register(user){
    const options: RequestOptionsArgs = {
      headers: new Headers({ 'Content-Type': 'application/json'})
    };
    const response : Observable<Response> = this.http
      .post('/users/register', user, options);
    this.setTokenFromResponse(response);
    this.router.navigate(['/'])
  }

  logout(){
    localStorage.clear()
  }
  registerUser(user){

  }

  getProfile(){
    return this.http.get('users/profile')
    .map(res => res.json());
  }


  loggedIn() {
  return  tokenNotExpired('access-token');
  }
  
}
//---------------_> New HTTP- SERVICE START----------------------------------



//export class AuthService {
  //authToken: any;
  //user: any;
  // constructor(private http: Http ) {}

  //--------------_>old http start-----------------------------------------

//   // Register Sent data to routes/users.js method post('/register', ....) like postMan
//   registerUser(user){
//     let headers = new Headers();
//     headers.append('Content-Type','application/json');
//     return this.http.post('users/register', user, {headers: headers})
//     .map(res => res.json());
//   }

// // Authentication
//   authenticateUser(user){
//     let headers = new Headers();
//     headers.append('Content-Type','application/json');
//     return this.http.post('users/authenticate', user, {headers: headers})
//     .map(res => res.json());
//   }

//   // Profile get data
//   getProfile(){
//     let headers = new Headers();
//     this.loadToken();
//     headers.append('Authorization', this.authToken);
//     headers.append('Content-Type','application/json');
//     return this.http.get('users/profile',{headers: headers})
//     .map(res => res.json());
//   }

//   // Set local storage
//   storeUserData(token, user){
//     localStorage.setItem('id_token', token);
//     localStorage.setItem('user', JSON.stringify(user));
//     this.authToken = token;
//     this.user = user
//   }

  // loadToken(){
  //   const token = localStorage.getItem('id_token');
  //   this.authToken = token;
  //   //show when go to /profile
  //   //console.log("token_id "+token)
  // }

//   loggedIn() {
//   return tokenNotExpired('id_token');
//   }

//   // Log out
//   logout(){
//     this.authToken = null;
//     this.user = null;
//     localStorage.clear();
//   }
//}
//--------------_> Old HTTP- SERVICE- END -------------------------------------


