import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, Validators, FormBuilder } from '@angular/forms';

//service
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
    private builder: FormBuilder,
    private authService: AuthService,
    private flashMessages: FlashMessagesService,
    private router:Router
  ){}

  ngOnInit() {
    this.buildForm()
  }

  // Build and validate form by angular
  buildForm(){
    this.form = this.builder.group({
      name: ['', Validators.required],
      username: ['', Validators.compose([
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(10)
      ])],
      email: ['@hotmail.com', Validators.compose([
        Validators.required,
        Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
      ])],
      password: ['',Validators.compose([
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(8)
      ])],
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
    this.authService.register(this.form.value)
  }

  // onRegisterSubmit(even){
  //     event.preventDefault();
  //   // Register user
  //   this.authService.registerUser(this.form.value).subscribe(data => {
  //     if(data.success){
  //       this.flashMessages.show('You are now register and can login', {cssClass: 'alert-success', timeout: 3000 });
  //       this.router.navigate(['/login']);
  //     }else{
  //       this.flashMessages.show('Something went wrong', {cssClass: 'alert-danger', timeout: 3000 });
  //       this.router.navigate(['/register']);
  //     }
  //   });
  // }

}
