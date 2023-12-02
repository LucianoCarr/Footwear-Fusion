'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

      await queryInterface.bulkInsert('Carts', [{
        productId : 1,
        orderId : 1,
        createdAt : new Date,
        updatedAt : new Date
      }], {});
  },

  async down (queryInterface, Sequelize) {

     await queryInterface.bulkDelete('Carts', null, {});

  }
};
