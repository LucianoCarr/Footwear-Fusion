const db = require('../../database/models')
const {validationResult} = require('express-validator')
const {hashSync} = require('bcryptjs');
module.exports = (req,res) => {

       const {name,lastName,email,password,rolesId,adressesId,birthday} = req.body
       const errors = validationResult(req)

       

       if(errors.isEmpty()){
    
       db.User.create({
           name ,
           lastName,
           email,
           password : hashSync(password,10),
           rolesId : 2,
           adressesId ,
           birthday: null

           
       })
       
       .then(() => {
              return res.redirect('/')
       })
       .catch((error) => console.log(error));
}else {
       return res.render('register',{
              errors : errors.mapped(),
              old : req.body
       })
}
}