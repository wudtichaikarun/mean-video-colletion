# MEAN-STACK CRUD Use Angular2
- **Project Overviews**
- **How to run Project**
- **FontEnd(Angular2)**
- **BackEnd(MVC)**
 ## Project Overview
 - **Register**
 - **Login**
 - **Create** 
 - **Read/Render**
 - **Update Delete**
  ### Register: 
  * [Register(FontEnd)](angular-src/src/app/components/register/README.md) เทคนิคการใช้ Angular2 Reactive Forms 
  * [Http service](angular-src/README/HTTP/README.md) การส่งข้อมูลจาก Form ผ่าน http protocol
  * [Login/Register(BackEnd)](app/users/README.md) การใช้ Express Routing ไปที่ NodeJs(controller) และทำการบันทึกข้อมูลด้วย Mongoose(Model)
<a href="https://github.com/wudtichaikarun/mean-video-colletion/blob/master/angular-src/src/assets/images/register.png" target="_blank">
    <img border="0" src="https://github.com/wudtichaikarun/mean-video-colletion/blob/master/angular-src/src/assets/images/register.png" />
</a>
 
 ### Login: 
 * [Login(FontEnd)](angular-src/src/app/components/login/README.md) เทคนิคการใช้ Angular2 Driven Forms 
<a href="https://github.com/wudtichaikarun/mean-video-colletion/blob/master/angular-src/src/assets/images/login.png" target="_blank">
    <img border="0" src="https://github.com/wudtichaikarun/mean-video-colletion/blob/master/angular-src/src/assets/images/login.png" />
</a>

 ### Create:
 * การเพิ่มกดที่ปุ่ม +NEW VIDEO
 * ใช้เทคนิค Validate form แบบเดียวกับการ Register
 * Category: ดึงข้อมูลจาก data base มา
 <a href="https://github.com/wudtichaikarun/mean-video-colletion/blob/master/angular-src/src/assets/images/create.png" target="_blank">
    <img border="0" src="https://github.com/wudtichaikarun/mean-video-colletion/blob/master/angular-src/src/assets/images/create.png" />
</a>

 ### Read/Render:
 * component ที่ใช้คือ ./angular-src/video ประกอบไปด้วย
    * video-center component เป็นตัว main
    * video-detail component คือส่วนที่แสดง video
    * video-list component คือส่วนของ list รายชื่อ videos
 <a href="https://github.com/wudtichaikarun/mean-video-colletion/blob/master/angular-src/src/assets/images/read-render.png" target="_blank">
    <img border="0" src="https://github.com/wudtichaikarun/mean-video-colletion/blob/master/angular-src/src/assets/images/read-render.png" />
</a>

 ### Update Delete: 
 * update กดปุ่ม edit เพื่อทำการ update แก้ไขข้อมูลของ video
    * เงื่อนไขในการ edit update คือต้องเป็น videos ที่ตนเองเป็นคนสร้างเท่านั้น
 * delete video กดที่ปุ่ม delete แล้วกดยืนยัน
    * เงื่อนไขในการ delete คือต้องเป็น videos ที่ตนเองเป็นคนสร้างเท่านั้น
    
 <a href="https://github.com/wudtichaikarun/mean-video-colletion/blob/master/angular-src/src/assets/images/update-delete.png" target="_blank">
    <img border="0" src="https://github.com/wudtichaikarun/mean-video-colletion/blob/master/angular-src/src/assets/images/update-delete.png" />
</a>

 ## How to run project
 1. สร้าง folder config ใน folder config สร้าง file ชื่อ config.js และ mongoose.js<br>
    <a href="http://www.mx7.com/view2/zZHryFJweBZoYCuj" target="_blank">
        <img border="0" width="300" height="300" src="http://www.mx7.com/i/22b/EecXAE.png" />
    </a><br>
Project นี้ผมใช้ data base ของ <a href="https://mlab.com/login/">mLap</a> โดยรูปแบบ uri จะเป็น mongodb://ชื่อผู้ใช้:รหัสผ่าน@ds161041.mlab.com:61041/ชื่อ collection
```sh
//config.js
module.exports = {
    uri: "<<you data base>>",// ใช้ได้ทั้ง databaseในเครื่องหรือจากบริการของเว็ปไซต์
    secret: "<<you secret password>>"//ใช้ตัวเลขตัวอักษรได้ตามใจชอบ
}
```
```sh
// mongoose.js
var config = require('./config');
var mongoose = require('mongoose');
module.exports = function(){
    var db = mongoose.connect(config.uri);
    return db;
}
```
        
 2. Download dependencies ใช้คำสั่ง <code>npm install </code> จากนั้น สั่ง Start project ใช้คำสั่ง <code>npm start</code> 

 ## FontEnd(Angular2)
| Topic                         | Description                                 | Link Detailed                            |
|:---------------------------------:|:-------------------------------------------:|:-----------------------------------|
| ARCHITECTURE OVERVIEW |อธิบายเบื้องต้นเกี่ยวกับ Components, Templates, Metadata, Data-binding, Directives, Services, Dependency-injection    |[Architecture](angular-src/README/archetecture/README.md)|
| Driven Forms | Login ใช้ Diven Forms ในการจัดการ |[Login(FontEnd)](angular-src/src/app/components/login/README.md)|
| Reactive Forms| Register ใช้ Reactive Forms  ในการจัดการ |[Register(FontEnd)](angular-src/src/app/components/register/README.md)|
| RESTful API   | ใช้ RESTfull API ในการทำงาน ระบุตัวตนผ่าน Token(JWT) และจัดเก็บ Password โดยการเข้ารหัสด้วย Becrypt |[RESTful API](angular-src/README/RESTful/README.md)|
| Http Service  | Http service and custom ให้ทุกๆ request ที่ส่งออกไปโยน Token ใส่ Http header ไปด้วย |[Http service](angular-src/README/HTTP/README.md)                         |
| Router |                                      |                                    |
| Guard             |                                             |                                    |
| Proxy              |                                             |                                    |


 ## BackEnd(MVC)
 - Express (Routing)
 - Nodejs (Controller)
 - MongoDB,Mongoose (Model)

| Topic                         | Description                                 | Link Detailed                            |
|:---------------------------------:|:-------------------------------------------:|:-----------------------------------|
| What is MVC| MVC ย่อมาจาก Model View Controller  |                                    |
| MVC Folder By Feature | รูปแบบการแบ่ง Folder ตาม Feature ที่ทำงานเพื่อให้จัดการข้อมูลอย่างเป็นระบบ|                                    |
| NodeJs login/Register |ประกอบไปด้วยการจัดการ routing controller และ models |[Login/Register(BackEnd)](app/users/README.md)|
| Express Routing | เทคนิคการเขียน Routing ให้สามารถใช้ประโยชน์ จาก concept foder by feature |                                    |
| Mongoose Paginate            |                                             |                                    |

