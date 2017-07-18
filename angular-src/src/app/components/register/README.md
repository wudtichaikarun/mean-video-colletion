# Register(FontEnd)
## Angular2 Reactive Forms
 - Javascript(register.component.ts) จะเป็นคนจัดการเกี่ยวกับฟอม(Logic)
 - Template(register.component.html) จะใช้ในการรับค่าและแสดงผลไม่ยุ่งเกี่ยวกับ Logic 
 ### FormGroup
  * คือ form ที่ครอบตัว input tag ใน html ทั้งหมดโดยค่าทุกค่าที่อยู่ใน tag input จะเก็บไว้ใน FormGroup<br>
  **ขั้นตอนการเรียกใช้งาน**
1. ไปที่ ./angular-src/src/app/app.module.ts
    * import ReactiveFormsModule เข้ามาใช้ <code> import { FormsModule, ReactiveFormsModule } from '@angular/forms';</code>
    * ที่ @NgModule -> imports: ทำการเพิ่ม ReactiveFormsModule เข้าไป
2. ไปที่ ./angular-src/src/app/components/register
    * เข้าไปที่ register.component.ts ทำการ import FormGroup เข้ามาใช้งาน<code> import { FormGroup } from '@angular/forms';</code>
3. ภายใต้ class RegisterComponent สร้างตัวแปร form ขึ้นมาโดยให้มีค่าเป็น FormGroup <code> form: FormGroup;</code> เพื่อทำ Property Binding ไปยัง Template(register.component.html)
4. ที่ Template(register.component.html) สร้าง form ขึ้นมาใส่ input tag ตามจำนวนที่ต้องการ เพิ่ม button type เป็น submit และทำการรับค่าที่ component(register.component.ts) ทำ Property Binding มาให้ <code> <form (submit)="......" [formGroup]="form" ></code> 
 ### FormControl
