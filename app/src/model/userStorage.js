"use strict"
const db = require("../config/db");

class UserStorage{
    // static #getUserInfo(data,id){
    //     const users = JSON.parse(data);
    //     const idx = users.id.indexOf(id);
    //     const userKeys = Object.keys(users); // users의 key값들만 배열로
    //     const userInfo = userKeys.reduce((newUser, info)=>{
    //         newUser[info] = users[info][idx];//users의 key값의 idx
    //         return newUser;
    //     },{});

    //     return userInfo;
    // }
 
    // static #getUsers(data,isAll,fields){
    //     const users = JSON.parse(data);
    //     if(isAll) return users;

    //     const newUsers = fields.reduce((newUsers,field)=>{
    //         if(users.hasOwnProperty(field)){
    //             newUsers[field] = users[field]; //newUsers에 대괄호 표기법 사용해 동적으로 속성 추가
    //         }
    //         return newUsers;
    //     },{});
    //     return newUsers ;
    // }
    static getUsers(isAll,...fields){
    }
    static getUserInfo(id){

        return new Promise((resolve,reject)=>{
            db.query("SELECT * FROM users WHERE id = ?",[id], (err,data)=>{
                if(err) reject(err);
                 resolve(data[0]);
              });
        });
    }
    static save(userInfo){

        return new Promise((resolve,reject)=>{
            const params = [userInfo.id,userInfo.password,userInfo.name];
            db.query("INSERT INTO users(`id`,`password`,`name`)VALUES(?,?,?)",params,(err,data)=>{
                if(err) reject(err);
                resolve(data);
            });
        })
      
    }
}




module.exports = UserStorage;
