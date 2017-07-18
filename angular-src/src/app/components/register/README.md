# Register(FontEnd)
## Angular2 Reactive Forms
 - Javascript(register.component.ts) จะเป็นคนจัดการเกี่ยวกับฟอม(Logic)
 - Template(register.component.html) จะใช้ในการรับค่าและแสดงผลไม่ยุ่งเกี่ยวกับ Logic 
 ### FormGroup
  * คือ form ที่ครอบตัว input tag ใน html ใน FormGroup อาจจะประกอบไปด้วยด้วย input tag หลายtagหรือ มีแค่tagเดียวก็ได้
  * กรณี ประกอบไปด้วยด้วย input tag หลายtag เช่น FormGroup ของ Name ที่ประกอบไปด้วย FirstName และ LastName เป็นต้น
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
...
import { FormGroup } from '@angular/forms';
...
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

      })
  }
  
}
```
3. ที่ Template(register.component.html) 
    * สร้าง form ขึ้นมาใส่ input tag ตามจำนวนที่ต้องการ 
    * เพิ่ม button type เป็น submit 
    * ทำการรับค่าที่ component(register.component.ts) ทำ Property Binding มาให้ 
```sh
<form [formGroup]="form" > 
  
    <div class="form-group">
        <label for="username">Username:</label>
        <input type="text" id="username" placeholder="Enter Username 4-8 Character" >  
    </div>
  
    <div class="form-group">
        <label for="email" >Email:</label>
        <input type="text" id="email" placeholder="Enter Email" >
    </div>
  
    <div class="form-group">
        <label for="password" >Password:</label>
        <input type="password" id="password"  placeholder="Enter Password 4-8 Character" >
    </div>

  <input *ngIf="form.valid" type="submit" class="btn btn-primary" value="Register" >
</form>
}
```
 ### FormControl
 * คือ Tag input ต่างๆที่อยู่ใน Template(register.component.html) เพราะอยู่ภายใต้การcontrol ของFormGroup
  #### ขั้นตอนการใช้งาน FormControl
   1. ไปที่ Conponent(register.component.ts ) ./angular-src/src/app/components/register/register.component.ts 
        * import FormControl เข้ามาใช้งาน
        * สร้างตัวแปรขึ้นมา firstName โดยให้มีค่าเป็น FormControl 
        * initial ค่าให้ตัวแปร firstName ที่สร้างขึ้นมา
        * สร้าง method onSubmit() ไว้เพื่อตรวจสอบว่าสามารถส่งค่ามาจาก Template(register.component.html) ได้ไหม
```sh
...
import { FormGroup, FormControl } from '@angular/forms';
...
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  form: FormGroup;
  userName: FormControl;
  
  constructor(){}
 
  ngOnInit() {
      this.form = new FormGroup({

      })

      this.userName = new FormControl();
  }

  onSubmit(event){
      event.preventDefault();
      console.log(this.userName.value);
  }
  
}
```
2. ไปที่ Template(register.component.html) 
    * ที่ input ของ username ทำการเพื่ิม FormControl เข้ามาโดยให้มีค่าตาม id ซึ่งก็คือ username *ทดสอบ username อันเดียวก่อน*
    * ในข้อ 1 ที่ Conponent(register.component.ts ) เราสร้าง method รอไว้ชื่อว่า onSubmit() เพราะฉนั้น ที่Template(register.component.html) ที่ tag from ต้องมีการส่งค่าไปให้ Conponent(register.component.ts ) เราเรียกวีธีการนี้ว่า Event Binding
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

    <input *ngIf="form.valid" type="submit" class="btn btn-primary" value="Register" >
</form>
}
```

ERROR:

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