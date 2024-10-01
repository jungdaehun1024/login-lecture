"use strict"
const fs = require("fs").promises;
class UserStorage{
    static #getUserInfo(data,id){
        const users = JSON.parse(data);
        const idx = users.id.indexOf(id);
        const userKeys = Object.keys(users); // users의 key값들만 배열로
        const userInfo = userKeys.reduce((newUser, info)=>{
            newUser[info] = users[info][idx];//users의 key값의 idx
            return newUser;
        },{});

        return userInfo;
    }
 

    static getUsers(...fields){
        // const users =  this.#users;
        const newUsers = fields.reduce((newUsers,field)=>{
            if(users.hasOwnProperty(field)){
                newUsers[field] = users[field]; //newUsers에 대괄호 표기법 사용해 동적으로 속성 추가
            }
            return newUsers;
        },{});
        return newUsers ;
        
    }

    static getUserInfo(id){
      
    return fs.readFile("./src/databases/users.json")
    .then((data)=>{
        return this.#getUserInfo(data,id);
    })
    .catch((err)=> console.error(err));
       
    }



    static save(userInfo){
        console.log(userInfo.id);
        // const users = this.#users;
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.password.push(userInfo.password);
        return {success : true};
    }
}




module.exports = UserStorage;
