const db = require('../../database/models');
const moment = require("moment");
const fetch = require('node-fetch');

const API = 'https://apis.datos.gob.ar/georef/api/provincias?';

module.exports = async (req, res) => {
  try {
    const id = await req.session.userLogin.id;
    const user = await db.User.findByPk(id);

    
    const response = await fetch(API);
    const data = await response.json();
    const provinces = data.provincias; 
    
    return res.render('profile', {
      ...user.dataValues,
      moment,
      provinces,
    });
  } catch (error) {
    console.log(error);
  }
};
