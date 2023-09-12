const {validationResult} = require('express-validator');
const { readJSON }= require('../../data')

module.exports = (req,res) =>{
    const errors = validationResult(req)

    if(errors.isEmpty()){
        const users= readJSON('usersData.json');
        const {id,username,role} = users.find(user => user.email === req.body.email)

        req.session.userLogin = {
            id,
            username,
            role
        }

        req.body.remember !== undefined && res.cookie('footwear',req.session.userLogin,{
            maxAge : 1000 * 60
        })

        return res.redirect('/')
    }else{
        return res.send(errors.mapped())
    }
}