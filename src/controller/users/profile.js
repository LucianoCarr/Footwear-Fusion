const {readJSON}= require('../../data')

module.exports = (req,res) => {
    const users = readJSON('usersData.json')
    const user = users.find(user => user.id === req.session.userLogin.id)
    const provinces = readJSON('provinces.json')
    const cities = readJSON('city.json')


    return res.render('profile',{
        ...user,
        provinces,
        cities
    })
}