const db = require('../../database/models')

module.exports = (req,res) => {

       const {name,lastName,email,password,rolesId,adressesId,birthday} = req.body

       db.User.create({
           name ,
           lastName,
           email,
           password,
           rolesId : 2,
           adressesId ,
           birthday: null

           
       })
       
       .then(() => {
              return res.redirect('login')
       })
       .catch((error) => console.log(error));
}