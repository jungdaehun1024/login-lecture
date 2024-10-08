"use strict"

const { response } = require("express");
const UserStorage =require("./userStorage");
class User{

    constructor(body){
        this.body = body;
    }

    async login(){
    const client = this.body;
    // await UserStorage.getUserInfo(client.id);

    try{
      const result =await UserStorage.getUserInfo(client.id);
      const {id,password} = result;
  
      if(id){
        if(id === client.id && password === client.password){
          return {success : true};
        }
        return {success : false,msg:"비밀번호가 틀렸습니다."}
      }
      return  {success : false,msg:"존재하지 않는 아이디"}
    }catch(err){
      return {success : false, err};
    }
 
    }

    async register(){
    const client = this.body;
    // console.log("client:"+client.id);
    
    try{
      const reponse = await UserStorage.save(client);
      return reponse;
    }catch(err){
      return {success:false , err};
    }
}
}
module.exports = User;
