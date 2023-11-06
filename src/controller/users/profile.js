const db = require('../../database/models');
const moment = require("moment");
const fetch = require('node-fetch');

const API = 'https://apis.datos.gob.ar/georef/api/provincias?';

module.exports = async (req, res) => {
  try {
    const id = await req.session.userLogin.id;
    const user = await db.User.findByPk(id);

<<<<<<< HEAD
  const user = await db.User.findByPk(id)

    return res.render('profile',{
      ...user.dataValues,
        moment
       
        
    })
=======
    
    const response = await fetch(API);
    const data = await response.json();
    const provinces = data.provincias; 
    
    return res.render('profile', {
      ...user.dataValues,
      moment,
      provinces,
    });
>>>>>>> 4f80d8b535a916c9923b904f8ae243ab89794852
  } catch (error) {
    console.log(error);
  }
};
