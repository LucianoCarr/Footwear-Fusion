const {validationResult} = require('express-validator');
const db = require('../../database/models')

module.exports = async (req,res) =>{
    const errors = validationResult(req)

    if(errors.isEmpty()){
    
        const user = await db.User.findOne({
            where : {
                email : req.body.email
            }
        })
            req.session.userLogin = {
                id: user.id,
                name: user.name,
                role: user.rolesId,
            }
            res.cookie('footwear', req.session.userLogin,{
                maxAge : 1000 * 60 * 10
            })
            return res.redirect('/')

    }else{
        return res.render('login',{
            errors : errors.mapped()
        })
    }
}