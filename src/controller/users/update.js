const {readJSON,writeJSON} = require('../../data')

module.exports = (req,res) =>{

    const users = readJSON('usersData.json')
    const {username,lastname,birthday,address,province,city} = req.body
    
    const userModify = users.map((user)=>{
       
        if(user.id === req.session.userLogin.id){
            user.username = username.trim();
            user.lastname = lastname.trim();
            user.birthday =  birthday ;
            user.address = address.trim();
            user.province = province.trim();
            user.city = city.trim();
           return user
        }
        return user
       

    });

   
   
   
    writeJSON(userModify,'usersData.json')
    
    return res.redirect('/')
    
}