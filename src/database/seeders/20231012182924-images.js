'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

      await queryInterface.bulkInsert('Images', [{
        filename: "foto",
        productId: 1,
        createdAt : new Date,
      updatedAt : new Date
      }], {});

  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Images', null, {});

  }
};
