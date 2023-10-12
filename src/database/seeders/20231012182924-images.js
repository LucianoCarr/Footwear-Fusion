'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

      await queryInterface.bulkInsert('Images', [{
        filename: null,
        productId: 1,
        createdAt : new Date,
      updatedAt : new Date,
      deletedAt : new Date
      }], {});

  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Images', null, {});

  }
};
