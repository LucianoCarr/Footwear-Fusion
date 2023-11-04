const db = require('../../database/models')
//const profileUser = require('../../services/userServices/profile.Services')
const moment = require("moment");

module.exports = async (req,res) => {
  try {
    const id = await req.session.userLogin.id    

  const user = await db.User.findByPk(id,{
    include : ["adress"]
})

  const adresses = await db.Adress.findAll()

    return res.render('profile',{
        ...user.dataValues,
        moment,
        adresses 
       
        
    })
  } catch (error) {
    console.log(error);
  }
}