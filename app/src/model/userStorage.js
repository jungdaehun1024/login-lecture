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
                newUsers[field] = users[field];
            }

            return newUsers;
        },{});
        return newUsers ;
        
    }
}




module.exports = UserStorage;
