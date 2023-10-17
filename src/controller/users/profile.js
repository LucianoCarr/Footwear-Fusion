const db = require('../../database/models')

module.exports = (req,res) => {

const id = req.session.userLogin.id    

  db.User.findByPk(id,{
    include : ["Adress"]
})


.then(user => {
    return res.send(user)
    return res.render('profile',{
        ...user.dataValues
    })
})
.catch(error => console.log(error))
/*Promise.all([user,adress])
    .then(([user,adress])=>{
        res.render('profile',{
            ...user.dataValues,
           
        })
    })
*/
}