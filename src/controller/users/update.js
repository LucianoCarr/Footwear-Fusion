const db = require('../../database/models');
//const updateUser = require('../../services/userServices/update.Services')

const { validationResult } = require('express-validator')

module.exports = async (req,res) =>{
    try {
        const errors = validationResult(req)
     
        if(errors.isEmpty()){
            let {name,lastName,birthday} = req.body
            
            db.User.findByPk(req.session.userLogin.id)
            .then(() =>{
                
            db.User.update(
                {   name : name.trim(),
                    lastName : lastName.trim(),
                    birthday
                },
                {
                    where : {
                        id : req.session.userLogin.id
                    }
                }
            )
                
                req.session.userLogin.name = name;
                res.locals.userLogin.name = name;
                 
                if(req.cookies.footwear){
                    res.cookie("footwear",req.session.userLogin)
                }
                return res.redirect('/')
            })
        }
    } catch (error) {
        console.log(error);
    }
}