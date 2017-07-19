# Register(FontEnd)
- **FormGroup**
- **FormControl**
- **FormControlName**
- **Validators**

## Angular2 Reactive Forms
 - Javascript(register.component.ts) จะเป็นคนจัดการเกี่ยวกับฟอม(Logic)
 - Template(register.component.html) จะใช้ในการรับค่าและแสดงผลไม่ยุ่งเกี่ยวกับ Logic 
> ### FormGroup
  * คือ form ที่ครอบตัว input tag ทั้งหมดใน Template(register.component.html) ค่าทุกค่าที่อยู่ใน input tag จะถูกเก็บไว้ในFormGroup
  #### ขั้นตอนการเรียกใช้งาน
1. ไปที่ ./angular-src/src/app/app.module.ts
    * import ReactiveFormsModule เข้ามาใช้
    * ที่ @NgModule -> imports: ทำการเพิ่ม ReactiveFormsModule เข้าไป
```sh
...
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
...

@NgModule({
  declarations: [
    .....
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule
    .....
  ],
  providers: [
    .....
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }

```


2. ไปที่ ./angular-src/src/app/components/register
    * เข้าไปที่ register.component.ts ทำการ import FormGroup เข้ามาใช้งาน
    * สร้างตัวแปร form ขึ้นมาโดยให้มีค่าเป็น FormGroup 
    * initial ค่าให้ตัวแปร form ที่สร้างขึ้นมา
```sh
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms'; // <-----import FormGroup

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  form: FormGroup;//<----สร้างตัวแปร form
  
  constructor(){}
 
  ngOnInit() {
      this.form = new FormGroup({ //<----initialค่าให้ตัวแปรform

      })
  }
  
}
```
3. ที่ Template(register.component.html) 
    * สร้าง form ขึ้นมาภายใต้FormGroupใส่ input tag ตามจำนวนที่ต้องการ 
    * เพิ่ม button type เป็น submit 
    * ทำการรับค่าที่ component(register.component.ts) ทำ Property Binding มาให้ 
```sh
<form [formGroup]="form" > //<---รับค่า
  
    <div class="form-group"> 
        <label for="username">Username:</label> 
        <input type="text" id="username" placeholder="Enter Username 4-8 Character" >  //<-----สร้าง input tag 
    </div>
  
    <div class="form-group">
        <label for="email" >Email:</label>
        <input type="text" id="email" placeholder="Enter Email" >
    </div>
  
    <div class="form-group">
        <label for="password" >Password:</label>
        <input type="password" id="password"  placeholder="Enter Password 4-8 Character" >
    </div>

  <button type="submit" class="btn btn-primary" value="Register" ></button> //<-----เพิ่ม button
</form>
}
```
> ### FormControl
 * คือ Tag input ต่างๆที่อยู่ใน Template(register.component.html) เพราะอยู่ภายใต้การcontrol ของFormGroup
  #### ขั้นตอนการใช้งาน FormControl
   1. ไปที่ Conponent(register.component.ts ) ./angular-src/src/app/components/register/register.component.ts 
        * import FormControl เข้ามาใช้งาน
        * สร้างตัวแปรขึ้นมา userName โดยให้มีค่าเป็น FormControl 
        * initial ค่าให้ตัวแปร firstName ที่สร้างขึ้นมา
        * สร้าง method onSubmit() ไว้เพื่อตรวจสอบว่าสามารถส่งค่ามาจาก Template(register.component.html) ได้ไหม
```sh
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'; //<----import FormControl

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  form: FormGroup;
  userName: FormControl; //<----สร้างตัวแปรขึ้นมา firstName
  
  constructor(){}
 
  ngOnInit() {
      this.form = new FormGroup({

      })

      this.userName = new FormControl(); //<----initialค่าให้ตัวแปร firstName
  }

  onSubmit(event){ //<---สร้าง method รอรับ Event Binding จาก Template(register.component.html) 
      event.preventDefault();
      console.log(this.userName.value);
  }
  
}
```
2. ไปที่ Template(register.component.html) 
    * ที่ input ของ username ทำการเพื่ิม FormControl เข้ามาโดยให้มีค่าตาม id ซึ่งก็คือ username *ทดสอบ username อันเดียวก่อน*
    * ในข้อ 1 ที่ Conponent(register.component.ts ) เราสร้าง method รอไว้ชื่อว่า onSubmit() เพราะฉนั้น ที่Template(register.component.html) ที่ tag from ต้องมีการส่งค่าไปให้ Conponent(register.component.ts ) เราเรียกวีธีการนี้ว่า Event Binding --> (submit)="onSubmit()"
```sh 
<form (submit)="onSubmit()" [formGroup]="form" > 
    
    <div class="form-group">
        <label for="username">Username:</label>
        <input 
            type="text" 
            id="username" 
            class="form-control" 
            placeholder="Enter Username 4-8 Character"
            [FormControl]="username" > 
    </div>
   
    .....

    <button type="submit" class="btn btn-primary" value="Register" ></button>
</form>
}
```
3. ทดสอบการทำงาน 
    * ที่ Termial ใช้คำสั่ง <code>ng serve</code> 
    * ที่ Chome คลิกขวา inspect ไปที่ Console
    * ทำการป้อนข้อมูลที่ช่อง username กด Register

    *ถ้าทุกอย่างถูกต้องหลังจากกด  Register ค่าที่กรอกใน input tag username จะแสดงใน Console*
    
> ### FormControlName
- อย่างที่เราทราบกันแล้วว่า FormGroup คือตัวที่ครอบ FormControlไว้เพราะฉนั้นเราไม่มีความจำเป็นที่จะมาประกาศ FormControl แยกทีละตัวเราจะรวม FormControl ทั้งหมดไว้ในFormGroup ผ่านสึ่งที่เรียกว่า FormControlName
#### ขั้นตอนการใช้งาน FormControlName
 1. ไปที่ Conponent(register.component.ts )
  * ลบ userName ที่ประกาศไว้ออก
  * initialค่าให้ตัวแปร userName ภายใต้ FormGroup
  * เพิ่มตัวแปรให้ครบกับจำนวน Input tag ในTemplate(register.component.html) 
  * แก้ไขการแสดงค่าในconsole.log()
 ```sh
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'; //<----import FormControl

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  form: FormGroup;

  constructor(){}
 
  ngOnInit() {
      this.form = new FormGroup({
          username: new FormControl(), //<---firstName ภายใต้ FormGroup
          email:  new FormControl(),
          password:  new FormControl()

      })
  }

  onSubmit(event){ 
      event.preventDefault();
      console.log(this.form.controls); //<----แก้ไขการแสดงค่า
  }
  
}
```
2. ไปที่ Template(register.component.html)แก้ไข code
   *  เปลี่ยนจาก [FormControl]="username" เป็น formControlName="username"
   *  ใส่ formControlName ให้กับ Tag input ทุกตัว

```sh
<form (submit)="onRegisterSubmit()" [formGroup]="form" > 
    
    <div class="form-group">
        <label for="username">Username:</label>
        <input 
            type="text" 
            id="username" 
            class="form-control" 
            placeholder="Enter Username 4-8 Character"
            formControlName="username" >
    </div>
    
    <div class="form-group">
        <label for="email" >Email:</label>
        <input 
            type="text" 
            id="email" 
            class="form-control" 
            placeholder="Enter Email"
            formControlName="email" >
    </div>
    
    <div class="form-group">
        <label for="password" >Password:</label>
        <input 
            type="password" 
            id="password" 
            class="form-control" 
            placeholder="Enter Password 4-8 Character"
            formControlName="password" >
    </div>

    <button type="submit" class="btn btn-primary" value="Register" ></button>
</form>
}
```
3. ทดสอบการทำงาน 
    * ที่ Termial ใช้คำสั่ง <code>ng serve</code> 
    * ที่ Chome คลิกขวา inspect ไปที่ Console
    * ทำการป้อนข้อมูลที่ช่องให้ครบทุกช่อง กด Register

    *ถ้าทุกอย่างถูกต้องหลังจากกด  Register ค่าที่กรอกใน input tag จะแสดงใน Consoleเป็น Object ประกอบไปด้วย username email password*<br>

 > ### Validators
- จะสังเกตได้ว่าที่ Template(register.component.html) input tag จะมีการใส่ placeholder="Enter Username 4-8 Character" ซึ่งก็คือต้องการตรวจสอบการป้อน ข้อความเข้ามาจาก user กำหนดเงื่อนไขคือต้องมีตัวอักษร 4-8 ตัวเพื่อให้ใช้งานความสามารถนี้ได้เราจะใช้งานสิ่งที่เรียกว่า Validators
#### ขั้นตอนการใช้งาน FormControlName
1. ไปที่ Conponent(register.component.ts )
 * import Validators เข้ามา
 * เรียกใช้งาน
    - argument ตัวแรก คือการใส่ค่าเริมต้นลงไปใน Tag input
    - argument ตัวที่สอง คือเงื่อนใขในการ Validat จากตัวอย่าง  Validators.required คือต้องมีการใส่ค่าลงไป

 ```sh
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'; //<----import Validators

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  form: FormGroup;

  constructor(){}
 
  ngOnInit() {
      this.form = new FormGroup({
          username: new FormControl('', Validators.required), //<---เรียกใช้งาน
          email:  new FormControl('', Validators.required),
          password:  new FormControl('', Validators.required)

      })
  }

  onSubmit(event){ 
      event.preventDefault();
      console.log(this.form.controls); 
  }
  
}
```
2. Validators ที่ใช้ในโปรเจคนี้
    ในTag input 1 tag เราสามารถใช้ Validators หลายตัวได้
    - username
        - Validators.required ต้องมีการใส่ค่า
        - Validators.minLength(4) ใช้ตัวอักษรต่ำสุดได้ 4 ตัวอักษร
        - Validators.maxLength(10) ใช้ตัวอักษรสูงสุดได้ 10 ตัวอักษร
     - email
        - Validators.required ต้องมีการใส่ค่า
        - Validators.pattern(...) คือ regular expression ของ email
    - password
        - Validators.required ต้องมีการใส่ค่า
        - Validators.minLength(4) ใช้ตัวอักษรต่ำสุดได้ 4 ตัวอักษร
        - Validators.maxLength(8) ใช้ตัวอักษรสูงสุดได้ 8 ตัวอักษร
 ```sh
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'; //<----import Validators

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  form: FormGroup;

  constructor(){}
 
  ngOnInit() {
    this.form = new FormGroup({
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
      ])]
    });
  }

  onSubmit(event){ 
      event.preventDefault();
      console.log(this.form.controls); 
  }
  
}
```
3. ไปที่ StyleSheey(register.component.css)
    - เพิ่ม code ใน file stylesheet
```sh
.ng-valid:not(form):not(fieldset) {
    border-left: 5px solid #42A948;
}

.ng-invalid:not(form):not(fieldset){
    border-left:  5px solid #A94442;
}

.errMassage{
    color: #A94442;
}
```
4. ไปที่ Template(register.component.html)แก้ไข code
    * เพื่อใช้ประโยชน์จากValidators เราจะให้แสดงปุ่ม Register เมื่อ Form ผ่านการ Validat แล้วเท่านั้น
```sh
<form (submit)="onRegisterSubmit()" [formGroup]="form" > 
    
    <div class="form-group">
        <label for="username">Username:</label>
        <input 
            type="text" 
            id="username" 
            class="form-control" 
            placeholder="Enter Username 4-8 Character"
            formControlName="username" >
    </div>
    
    <div class="form-group">
        <label for="email" >Email:</label>
        <input 
            type="text" 
            id="email" 
            class="form-control" 
            placeholder="Enter Email"
            formControlName="email" >
    </div>
    
    <div class="form-group">
        <label for="password" >Password:</label>
        <input 
            type="password" 
            id="password" 
            class="form-control" 
            placeholder="Enter Password 4-8 Character"
            formControlName="password" >
    </div>

    <input *ngIf="form.valid" type="submit" class="btn btn-primary" value="Register" >
</form>
}
```

5.   ทดสอบการทำงาน 
    * ที่ Termial ใช้คำสั่ง <code>ng serve</code> 
    * *ถ้าทุกอย่างถูกต้องที่Tag input จะมีสีแดง และไม่แสดงปุ่ม Register* <br><br>
    <a href="https://github.com/wudtichaikarun/mean-video-colletion/blob/master/angular-src/src/assets/images/registerValidat.png"         target="_blank"><img border="1" src="https://github.com/wudtichaikarun/mean-video-colletion/blob/master/angular-src/src/assets/images/registerValidat.png" />
    </a>

6.   การแสดงข้อความ Error เมื่อมีการกรอกข้อมูลไม่ถูกต้องลงใน from
    * ที่ Conponent(register.component.ts )เนื่องจาก code ใน ngOnInit() เริ่มยาวมากและจำเป็นต้องเขียนเพิ่มอีกให้ทำการสร้างmethod ใหม่ขึ้นมาเพื่อทำหน้าที่ตั้งชื่อว่า buildForm() แล้วทำการย้าย code ไปไว้ใน method ใหม่
    * สร้าง method ขึ้นมาเพื่อเฝ้าดูการเปลี่ยนแปลงค่าใน form ตั้งชื่อว่า onValueChanged()
    * สร้าง object ขึ้นมาเพื่อใช้เก็บค่า error ไปแสดง ตั้งชื่อว่า formErrors = {...}
    * สร้าง object ขึ้นมาเพื่อเอาไว้เก็บข้อความที่จะแสดงเมื่อ form invalid ตั้งชื่อว่า validatetionMessages = {...}
```sh
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'; //<----import Validators

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  form: FormGroup;

  formErrors = {
    username: '',
    email: '',
    password: ''
  }

  validatetionMessages = {
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
      username: ['', Validators.compose([
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(10)
      ])],
      email: ['', Validators.compose([
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

  onSubmit(event){ 
      event.preventDefault();
      console.log(this.form.controls); 
  }
  
}
```
7. ไปที่ Template(register.component.html)แก้ไข code
    - ใส่เงื่อนไขในการแสดงข้อความ errror --> *ngIf="formErrors.username"
    - ใส่ข้อความที่จะแสดงไว้ใน {{....}}
```sh
<form (submit)="onRegisterSubmit()" [formGroup]="form" > 
    
    <div class="form-group">
        <label for="username">Username:</label>
        <input 
            type="text" 
            id="username" 
            class="form-control" 
            placeholder="Enter Username 4-8 Character"
            formControlName="username" >
        <div *ngIf="formErrors.username" class="errMassage"> 
            {{ formErrors.username  }} 
        </div> 
    </div>
    
    <div class="form-group">
        <label for="email" >Email:</label>
        <input 
            type="text" 
            id="email" 
            class="form-control" 
            placeholder="Enter Email"
            formControlName="email" >
        <div *ngIf="formErrors.email" class="errMassage"> 
            {{ formErrors.email }} 
        </div>
    </div>
    
    <div class="form-group">
        <label for="password" >Password:</label>
        <input 
            type="password" 
            id="password" 
            class="form-control" 
            placeholder="Enter Password 4-8 Character"
            formControlName="password" >
        <div *ngIf="formErrors.password" class="errMassage"> 
            {{ formErrors.password }} 
        </div>
    </div>

    <input *ngIf="form.valid" type="submit" class="btn btn-primary" value="Register" >
</form>
}
```
