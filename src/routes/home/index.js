"use strict";

const express = require('express');
const router = express.Router();

const ctrl = require("./home.ctrl");

router.get("/",ctrl.hello );
 
router.get("/login",ctrl.login);

 //라우터 객체를 외부파일에서 사용할 수 있게 내보내기(exprots)
 module.exports = router;
 