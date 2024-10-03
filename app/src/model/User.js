"use strict"

const UserStorage =require("./userStorage");
class User{

    constructor(body){
        this.body = body;
    }

    async login(){
    const client = this.body;
    // await UserStorage.getUserInfo(client.id);
    const result =await UserStorage.getUserInfo(client.id);
    // console.log(result+"result값");
    const {id,password} = result;
    

    if(id){
      if(id === client.id && password === client.password){
        return {success : true};
      }
      return {success : false,msg:"비밀번호가 틀렸어"}
    }
    return  {success : false,msg:"존재하지 않는 아이디"}
    }

    async register(){
    const client = this.body;
    try{
      const response = await UserStorage.save(client);
      return response;
    }catch(err){
      return {success : false , msg: err}
    }
    
    }
}

module.exports = User;
