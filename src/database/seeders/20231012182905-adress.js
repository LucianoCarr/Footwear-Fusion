"use strict";

const provinciasArray = ["Buenos Aires","Catamarca","Chaco","Chubut","Cordoba","Corrientes","Entre Rios","Formosa","Jujuy","La Pampa","La Rioja","Mendoza","Misiones","Neuquen","Rio Negro","Salta","San Juan","San Luis","Santa Cruz","Santa fe","Santiago del Estero","Tierra del Fuego","Tucuman"]
const ciudadArray = ["CABA","San Miguel","Muñiz","Wilde","Bella Vista",]

const provinciasDB = provinciasArray.map(provincia => {
  return {
    name : provincia,
    createdAt : new Date,
    updatedAt : new Date
  }
})

const ciudadDB = ciudadArray.map(ciudad => {
  return {
    name : ciudad,
    createdAt : new Date,
    updatedAt : new Date
  }
})

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Adresses",[{
      adress: null,
      provinciasDB,
      ciudadDB
       }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Adresses", null, {});
  },
};
