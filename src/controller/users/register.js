const db = require('../../database/models')
const {validationResult} = require('express-validator')

const createUser = require('../../services/userServices/register.services');

module.exports = async (req,res) => {
try {
       const errors = validationResult(req);

       if (errors.isEmpty()) {
           const { name, lastName, email, password, rolesId, adressesId, birthday } = req.body;
           const userData = {
               name,
               lastName,
               email,
               password,
               rolesId,
               adressesId,
               birthday: null,
           };

           await createUser(userData);
           console.log('usuario creado exitosamente ');
           return res.redirect('/');
       }
   } catch (error) {
       return res.status(error.status || 500).json({
           ok: false,
           status: error.status || 500,
           error: error.message || '¡Huuu, hubo un error! :c',
       });
   }
}