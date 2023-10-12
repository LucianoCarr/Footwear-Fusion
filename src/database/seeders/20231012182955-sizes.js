'use strict';
const neneArray = ['23','24','25','26','27','28','29','30']
const mujeresArray = ['31','32','33','34','35','36','37','38']
const hombresArray = ['38','39','40','41','42','43','44','45','46']

const neneDB = neneArray.map(nene => {
  return {
    name : nene,
    createdAt : new Date,
    updatedAt : new Date
  }
})

const mujeresDB = mujeresArray.map(mujeres => {
  return {
    name : mujeres,
    createdAt : new Date,
    updatedAt : new Date
  }
})

const hombresDB = hombresArray.map(hombres => {
  return {
    name : hombres,
    createdAt : new Date,
    updatedAt : new Date
  }
})

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

      await queryInterface.bulkInsert('Sizes', [{
        neneDB,
        mujeresDB,
        hombresDB
      }], {});

  },

  async down (queryInterface, Sequelize) {

      await queryInterface.bulkDelete('Sizes', null, {});

  }
};
