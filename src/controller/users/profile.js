const db = require('../../database/models')
//const profileUser = require('../../services/userServices/profile.Services')

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



/*module.exports = async (req,res) => {

try {
 const user = req.session.userLogin.id
 const userLog = await profileUser(user)

 return res.render('profile',{
  ...userLog.dataValues
 })
} catch (error) {
  return res.status(error.status || 500).json({
    ok : false,
    status : error.status || 500,
    error : error.message  || 'Hubo un ERROR al cargar el perfil'
})
}
 
 

} */