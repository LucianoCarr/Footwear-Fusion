'use strict';

/* const categoriasArray = ['hombres', 'mujeres', 'nenes']

const categoriasDB = categoriasArray.map(categoria => {
  return {
    name : categoria,
    createdAt : new Date,
    updatedAt : new Date
  }
}) */

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

      await queryInterface.bulkInsert('Categories', [{
        name: 'Hombres',
        createdAt : new Date,
        updatedAt : new Date
      },
    {
      name: 'Mujeres',
      createdAt : new Date,
      updatedAt : new Date
    },
  {
    name: 'Nenes',
    createdAt : new Date,
    updatedAt : new Date
  }], {});

  },

  async down (queryInterface, Sequelize) {

     await queryInterface.bulkDelete('Categories', null, {});

  }
};
