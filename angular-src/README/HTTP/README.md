# Angular2 Http service
* Angular2 จะมีการแบ่งการทำงานกันออกเป็นส่วนๆ
  * Templateก็จัดารเรื่องการแสดงผลการติดต่อกับ้ใช้งาน 
  * Componentจัดการเกี่ยวกับLogicต่างๆ
  * การติดต่อแลกเปลี่ยนข้อมูลกับภายนอกจะทำผ่านสิ่งที่เรียกว่า service และตัวที่จะกล่าถึงในหัวข้อนี้คือ Http service
  <br>
  
  > ปัญหาที่พบตอนศึกษาแรกๆ
  * ไม่เข้าเรื่องวิธีการเรียกใช้งาน angular และ server
  * สับสนเรื่อง Route ระหว่างของ angular และ server
  <a href="https://github.com/wudtichaikarun/mean-video-colletion/blob/master/angular-src/src/assets/images/http.png" target="_blank">
    <img border="0" src="https://github.com/wudtichaikarun/mean-video-colletion/blob/master/angular-src/src/assets/images/http.png" />
</a>












* project นี้ใช้ RESTful APIซึ่งเป็น stateless ก็คือ server ไม่มีการจดจำข้อมูลใดๆเกี่ยวกับ user ไว้เลย *แล้วเราจะ ระบุตัวตน user ที่ login เข้ามาในระบบได้ยังไง?*<br>
    * *คำตอบคือ* ใช้ Token ซึ่งผมเลือกใช้เป็น Json Web Tokenตัวย่อคือ(JWT)ศึกษาเพิ่มเติมได้ที่ [Token และ JWT คืออะไร? ](https://devahoy.com/posts/understanding-token-and-jwt-create-authentication-with-hapijs/)
 * การสร้าง Token 
    * user ทำการ register จากนั้น server ทำการบันทึกข้อมูลลง database
    * user log in server ตรวจสอบข้อมูลถ้าผิดส่งข้อความ success: fase กลับไปให้ Angular 
    * ข้อมูลถูกต้อง server สร้างและส่ง Token พร้อมกับข้อความ sucess: true กลับไปให้ Angular
 * การจัดเก็บ Token
    * 
