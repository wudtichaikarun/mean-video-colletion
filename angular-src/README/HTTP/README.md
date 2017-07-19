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

> อธิบายรูปตามหมายเลข
  1. เมื่อมีการพิมพ์ Url ลงที่ Web Browser ซึ่งก็คือการเรียกมาที่ http://localhost:4200/videos  ด้วยMethod: GET (สมมุติว่าตอนนี้ผมเขียนcode เสร็จแล้วสั่งรัน <code>ng serve</code>
  
  2. angular ก็จะส่ง result ทั้งหมดกลับไปให้ web browser (เช่น code,รูป )
     * ภานใน angular จะมีสิ่งที่เรียกว่า Route คอยบริหารจัดการว่าจะเอา component ตัวไหนไปแสดงโดยตัดสินใจจาก path ที่ส่ง request มาในที่นี้คือ/videos ก็ให้ vieos componet ขึ้นมาทำงาน
     * เมื่อ videos componet ถูกเรียกจะมี method ที่ชื่อว่า ngOnInit(){...} ถูกเรียนขึ้นมาทำงาน(Browser เป็นคนเรียก)
    
  3. ผมก็เขียน code เรียกใช้งาน Http service ไว้ภายใต้  ngOnInit(){...} เรียกไปที่ /api/videos 
  4. ไม่ทำงาน?????
<br>

> **ปัญหาคือPORTไม่ตรงกัน!!!!**
  * angular http service เรียกมาที่ http://localhost:4200/api/videos 
  * server ให้บริหารที่ http://localhost:3000/api/videos
  
  ###### แก้ปัญหาportไม่ตรงกัน
  1. อย่างที่เราทราบกันว่า angular2 เป็น web แบบ single page คำศัพใหม่มาอีกละ!  ไม่เข้าใจว่า sigle page web คืออะไรเชิญทางนี้ -->[Evolution of Frontend](https://www.youtube.com/watch?v=JhwaEWKq4pw&index=15&list=PLuI72UCT2_FGMXOpsJfcOhGoK3Wt8lx3J) เมื่อPortไม่ตรงกันเราก็ใช้ angular cli สั่ง <code>ng build</code> anglar cli ก็จะ build project และสร้าง folder ชื่อ dist ขึ้นมาและเก็บ code ที่ build เป็น single page website ไว้ในนั้น แต่ในโปรเจคนี้ผมอยากได้ folder ชื่อ public ก็เข้าไปแก้ใน ./angular-src/.angular-cli.json ตรง outDir <br>
 *เข้าไปดูผลลัพจากการสั่ง ng build ได้ใน folderชื่อ public*
 ```sh
 ......
 
   "apps": [
    {
      "root": "src",
      "outDir": "../public",
      "assets": [
        "assets",
        "favicon.ico"
      ],
  
  .....
 ```
2. ให้ server มาอ่าน file ใน folder public (code จาก server.js) 

 ```sh
 ......
  app.use(express.static(path.join(__dirname, 'public')))
 
  app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'public/index.html'))
    }) 
  .....
 ```

<br><br><br><br>
===================================
* project นี้ใช้ RESTful APIซึ่งเป็น stateless ก็คือ server ไม่มีการจดจำข้อมูลใดๆเกี่ยวกับ user ไว้เลย *แล้วเราจะ ระบุตัวตน user ที่ login เข้ามาในระบบได้ยังไง?*<br>
    * *คำตอบคือ* ใช้ Token ซึ่งผมเลือกใช้เป็น Json Web Tokenตัวย่อคือ(JWT)ศึกษาเพิ่มเติมได้ที่ [Token และ JWT คืออะไร? ](https://devahoy.com/posts/understanding-token-and-jwt-create-authentication-with-hapijs/)
 * การสร้าง Token 
    * user ทำการ register จากนั้น server ทำการบันทึกข้อมูลลง database
    * user log in server ตรวจสอบข้อมูลถ้าผิดส่งข้อความ success: fase กลับไปให้ Angular 
    * ข้อมูลถูกต้อง server สร้างและส่ง Token พร้อมกับข้อความ sucess: true กลับไปให้ Angular
 * การจัดเก็บ Token
    * 
