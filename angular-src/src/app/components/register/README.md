# Register(FontEnd)
## Angular2 Reactive Forms
 - Javascript(register.component.ts) จะเป็นคนจัดการเกี่ยวกับฟอม(Logic)
 - Template(register.component.html) จะใช้ในการรับค่าและแสดงผลไม่ยุ่งเกี่ยวกับ Logic 
 ### FormGroup
  * คือ form ที่ครอบตัว input tag ใน html ทั้งหมดโดยค่าทุกค่าที่อยู่ใน tag input จะเก็บไว้ใน FormGroup<br>
  **ขั้นตอนการเรียกใช้งาน**
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
 
  ngOnInit() {}
  
}
```
4. ที่ Template(register.component.html) 
    * สร้าง form ขึ้นมาใส่ input tag ตามจำนวนที่ต้องการ 
    * เพิ่ม button type เป็น submit 
    * ทำการรับค่าที่ component(register.component.ts) ทำ Property Binding มาให้ 
```sh
<form (submit)="onRegisterSubmit()" [formGroup]="form" > 
  
    <label for="username">Username:</label> 
    <input type="text" id="username" placeholder="Enter Username 4-8 Character" >
 
    <label for="email" >Email:</label> 
    <input type="text" id="email" placeholder="Enter Email" >
   
    <label for="password" >Password:</label>
    <input type="password" id="password" placeholder="Enter Password 4-8 Character">
 
  <input *ngIf="form.valid" type="submit" class="btn btn-primary" value="Register" >
</form>
}
```
 ### FormControl
