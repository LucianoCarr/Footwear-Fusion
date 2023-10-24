const db = require('../../database/models');;

const profileUser = async (userLogin) => {
    try {
        const id = userLogin
        const user = await db.User.findByPk(id,{
            include : ["adress"]
        })
   // const birthday = new Date(user.birthday).toISOString();
   // console.log(birthday.split('T')[0]);
    console.log(user);
    
    return  user
       
         

    } catch (error) {
        console.log(error);
        throw {
          status: error.status || 500,
          message: error.message || "ERROR en el servicio",

        };
    }
};

module.exports = profileUser;