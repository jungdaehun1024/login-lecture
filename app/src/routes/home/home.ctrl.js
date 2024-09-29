"use strict";

const output = {
    home: (req, res) => {
        res.render("home/index");
     },

     login:(req, res) => {
        res.render("home/login")
    }
}

const users = {
    id:["qwer123","정대훈","eogns"],
    password:["1234","1234","12345"],
};

const process = {
    login:(req,res)=>{
        const id = req.body.id,
            password=req.body.password;

            if(users.id.includes(id)){
                const idx = users.id.indexOf(id);
                if(users.password[idx] ===password){
                    return res.json({
                        success: true,
                    });
                }
            }

            return res.json({
                success: false,
                msg:"로그인에 실패",
            });
    },
}

module.exports = {
    output,
    process
};
