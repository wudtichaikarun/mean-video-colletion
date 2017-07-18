# MEAN-STACK CRUD Use Angular2
 ## How to run project
 - create folder config<br>
    <img src="https://www.img.in.th/images/69dcbc8dda429e7b9ad26b9c43764c9b.png" width="300" height="300" />
 - ใน folder config create file<br>
    <a href="http://www.mx7.com/view2/zZHryFJweBZoYCuj" target="_blank">
        <img border="0" width="300" height="300" src="http://www.mx7.com/i/22b/EecXAE.png" />
    </a>
    - config.js
    - mongoose.js
        
 - run
    Download dependencies:
        <code>npm install </code>
    Start project:
        <code>npm start</code> 

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

## Create
## Read/Render
## Update
## Delete