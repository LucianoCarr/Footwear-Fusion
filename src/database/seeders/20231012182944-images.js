'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

      await queryInterface.bulkInsert('Images', [{
        filename: "naranja-01.jpg",
        others :  "naranja-02.jpg",
        others2 :  "naranja-03.jpg",
        others3 :  "naranja-04.jpg",
        others4 :  false,
        others5 :  false,
        productId: 1,
        createdAt : new Date,
      updatedAt : new Date},
      {
        filename: "azul-01.jpg",
        others :  "azul-02.jpg",
        others2 :  "azul-03.jpg",
        others3 :  "azul-04.jpg",
        others4 :  false,
        others5 :  false,
        productId: 2,
        createdAt : new Date,
      updatedAt : new Date
      
      }], {});

  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Images', null, {});

  }
};