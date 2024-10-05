// Express를 사용한 서버 띄우기

//모듈
const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");


const app = express();
dotenv.config();

// const accessLogStream = require("./src/config/log");  
//import
const home = require("./src/routes/home");

app.set("views", "./src/views");//화면(views)을 관리해줄 폴더이름을 두번째 파라미터로
app.set("view engine", "ejs");//어떤 엔진으로 해석할지
app.use(express.static(`${__dirname}/src/public`)) // 정적경로를 추가 (__dirname는 app.js의 위치를 반환)
app.use(bodyParser.json());
// app.use(morgan("dev"));


//url을 통해서 전달되는 데이터에 한글,공백등이 포함될 경우 제대로 인식안되는 문제 해결
app.use(bodyParser.urlencoded({ extended : true}));
app.use("/", home);//use- > 미들웨어를 등록해주는메서드
module.exports = app;