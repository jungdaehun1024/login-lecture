"use strict"

class UserStorage{
   static #users = {
        id:["qwer123","정대훈","eogns"],
        password:["1234","1234","12345"],
        name:["정별이","별이","김별이"]
    };

    static getUsers(...fields){
        const users =  this.#users;
        const newUsers = fields.reduce((newUsers,field)=>{
            if(users.hasOwnProperty(field)){
                newUsers[field] = users[field]; //newUsers에 대괄호 표기법 사용해 동적으로 속성 추가
            }
            return newUsers;
        },{});
        return newUsers ;
        
    }

    static getUserInfo(id){
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const userKeys = Object.keys(users); // users의 key값들만 배열로
        const userInfo = userKeys.reduce((newUser, info)=>{
            newUser[info] = users[info][idx];//users의 key값의 idx
            return newUser;
        },{});

        return userInfo;
    }
}




module.exports = UserStorage;
