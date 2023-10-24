const db = require('../../database/models')
//const LoginUser = require('../../services/userServices/login.Services')

const {validationResult} = require('express-validator');

module.exports = (req,res) =>{
    const errors = validationResult(req)

    if(errors.isEmpty()){
     
        db.User.findOne({
            where : {
                email : req.body.email
            }
        })
        .then((user) =>{
            req.session.userLogin = {
                id: user.id,
                name: user.name,
                role: user.rolesId,
            }
            res.cookie('footwear', req.session.userLogin,{
                maxAge : 1000 * 60 * 10
            })
            return res.redirect('/')
        })
        .catch((error) => console.log(error));
       
    }else{
        return res.render('login',{
            errors : errors.mapped()
     })
    }
}