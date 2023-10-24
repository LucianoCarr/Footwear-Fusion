const db = require('../../database/models');;

const updateUser = async (userEdit) => {
    try {
       
     let {name,lastName,birthday} = edit   
     const userEdit = await db.User.update(
            {   name : name.trim(),
                lastName : lastName.trim(),
                birthday
            },
            {
                where : {
                    id : req.session.userLogin.id
                }
            })
        return userEdit    
    } catch (error) {
        console.log(error);
        throw {
          status: error.status || 500,
          message: error.message || "ERROR en el servicio",

        };
    }
};

module.exports = updateUser;