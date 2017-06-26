import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, Validators } from '@angular/forms';

//service
// import { ValidateService } from '../../services/validate.service';
import { AuthService } from '../../services/auth.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;

  formErrors ={
    name: '',
    username: '',
    email: '',
    password: ''
  }

  validatetionMessages = {
    name: {
      required: 'Name is required.'
    },
    username: {
      required: 'Username is required.',
      minlength: 'Username required 4-10 character.',
      maxlength: 'Username required 4-10 character.'
    },
    email:{
      required: 'Email is required.',
      pattern: 'Invalid email pattern'
    },
    password:{
      required: 'Password is required.',
      minlength: 'Username required 4-8 character.',
      maxlength: 'Username required 4-8 character.'
    }

  }

  constructor(
    // private validateService: ValidateService, 
    private authService: AuthService,
    private flashMessages: FlashMessagesService,
    private router:Router
    ) { }

  ngOnInit() {
    this.buildForm()
  }

  //build and validate form
  buildForm(){
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      username: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(10)
      ])),
      email: new FormControl('@hotmail.com', Validators.compose([
        Validators.required,
        Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
      ])),
      password: new FormControl('',Validators.compose([
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(8)
      ])),
    });

    this.form
        .valueChanges
        //.debounceTime(400)
        //.distinctUntilChange()
        .subscribe(()=> this.onValueChanged())
  }
  
  
  onValueChanged(){
    if(!this.form) return;

    for(const field in this.formErrors){
      this.formErrors[field] = '';
      const control = this.form.get(field);

      if(control && control.dirty && !control.valid){
        const messages = this.validatetionMessages[field];

        for(const key in control.errors){
          this.formErrors[field] += messages[key] + '';
        }
      }
    }
  }

 onRegisterSubmit(even){
      event.preventDefault();
        // const user = this.form;
        // const name = this.form.get('name').value;
        // console.log(name);
        // console.log(user);
    //   const user = {
    //     name: this.form.get('name').value,
    //     email: this.form.get('email').value,
    //     username: this.form.get('username').value,
    //     password: this.form.get('password').value
    // }

    // buildForm() can do everthing
        // Required Fields
        // if(!this.validateService.validateRegister(this.form)){
        //   this.flashMessages.show('Please fill in all fields', {cssClass: 'alert-danger', timeout: 3000 });
        //   return false;
        // }
        // Validate Email
        // if(!this.validateService.validateEmail(this.form.get('email').value)){
        //     this.flashMessages.show('Please enter a valid email', {cssClass: 'alert-danger', timeout: 3000 });
        //   return false;
        // }

   // Register user
    this.authService.registerUser(this.form.value).subscribe(data => {
      if(data.success){
        this.flashMessages.show('You are now register and can login', {cssClass: 'alert-success', timeout: 3000 });
        this.router.navigate(['/login']);
      }else{
        this.flashMessages.show('Something went wrong', {cssClass: 'alert-danger', timeout: 3000 });
        this.router.navigate(['/register']);
      }
    });
  }

}
