// Express를 사용한 서버 띄우기

//모듈
const express = require('express');
const app = express();
const PORT = 3000;

//import
const home = require("./src/routes/home");



app.set("views","./src/views");//화면(views)을 관리해줄 폴더이름을 두번째 파라미터로
app.set("view engine","ejs");//어떤 엔진으로 해석할지
app.use(express.static(`${__dirname}/src/public`)) // 정적경로를 추가 (__dirname는 app.js의 위치를 반환)
app.use("/",home);//use- > 미들웨어를 등록해주는메서드

module.exports = app;