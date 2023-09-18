const { validationResult } = require('express-validator')
const {readJSON,writeJSON} = require('../../data')


module.exports = (req,res) =>{
    const errors = validationResult(req)
    const users = readJSON('usersData.json')
    if(errors.isEmpty()){
        const {username,lastname,birthday,address,province,city} = req.body
        
        const userModify = users.map((user)=>{
           
            if(user.id === req.session.userLogin.id){
                user.username = username.trim();
                user.lastname = lastname.trim();
                user.birthday =  birthday || null ;
                user.address = address?.trim() || null;
                user.province = province || null;
                user.city = city || null;
            }
            return user
        });

        writeJSON(userModify,'usersData.json')
        
        return res.redirect('/')
    }

/* const user = users.find(user => user.id === req.session.userLogin.id) */
const provinces = readJSON('provinces.json')
const cities = readJSON('city.json')
return res.render('profile',{
    ...req.body,
    errors: errors.mapped(),
    provinces,
    cities
})
    
    
}