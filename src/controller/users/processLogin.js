const {validationResult} = require('express-validator');
const { readJSON }= require('../../data')

module.exports = (req,res) =>{
    const errors = validationResult(req)

    if(errors.isEmpty()){
        const users= readJSON('usersData.json');
        const {id,username,role,lastname,birthday,address,province,city} = users.find(user => user.email === req.body.email)

        req.session.userLogin = {
            id,
            username,
            lastname,
            birthday ,
            address ,
            province ,
            city ,
            role
        }

        req.body.remember !== undefined && res.cookie('footwear', req.session.userLogin,{
            maxAge : 1000 * 60 * 10
        })

        return res.redirect('/')
    }else{
        return res.render('login',{
            errors : errors.mapped()
     })
    }
}