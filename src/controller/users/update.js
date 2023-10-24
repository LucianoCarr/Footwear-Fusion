const db = require('../../database/models');
//const updateUser = require('../../services/userServices/update.Services')

const { validationResult } = require('express-validator')

module.exports = (req,res) =>{
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
        .then(response => {
            console.log(response);
            
            req.session.userLogin.name = name;
            res.locals.userLogin.name = name;
             
            if(req.cookies.footwear){
                res.cookie("footwear",req.session.userLogin)
            }
            return res.redirect('/')
        })
        })
        .catch(error => console.log(error))

    }

/* const user = users.find(user => user.id === req.session.userLogin.id) 
const provinces = readJSON('provinces.json')
const cities = readJSON('city.json')
return res.render('profile',{
    ...req.body,
    errors: errors.mapped(),
    provinces,
    cities
})*/
    
    
}