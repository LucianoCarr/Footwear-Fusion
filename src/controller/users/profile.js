const db = require('../../database/models')

module.exports = (req,res) => {

const id = req.session.userLogin.id    

  const user= db.User.findByPk(id,{
    include : ["adress"]
})

  const adresses = db.Adress.findAll()

Promise.all([user,adresses])

.then(([user,adresses]) => {

    const birthday = new Date(user.birthday).toISOString();
    console.log(birthday.split('T')[0]);
    console.log(user);
    return res.render('profile',{
        ...user.dataValues,
        birthday : birthday.split('T')[0],
        adresses 
       
        
    })
})
.catch(error => console.log(error))

}