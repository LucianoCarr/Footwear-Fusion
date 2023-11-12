const db = require('../../database/models');
const moment = require("moment");
const fetch = require('node-fetch');

const API = 'https://apis.datos.gob.ar/georef/api/provincias?';
//const API2 = 'https://apis.datos.gob.ar/georef/api/localidades?'

module.exports = async (req, res) => {
  try {
    const id = await req.session.userLogin.id;
    const user = await db.User.findByPk(id);

    
    const response = await fetch(API);
    const data = await response.json();
    const provinces = data.provincias.sort((a,b) => a.nombre > b.nombre ? 1 : a.nombre < b.nombre ? -1 : 0 )

   /*  const result = await fetch(API2);
    const datos = await result.json();
    const localidad = datos.localidades.map(e => e.provincia.nombre).sort((a,b) => a.nombre > b.nombre ? 1 : a.nombre < b.nombre ? -1 : 0 )
 */
    return res.render('profile', {
      ...user.dataValues,
      moment,
      provinces,
      //localidad
    });
  } catch (error) {
    console.log(error);
  }
};
