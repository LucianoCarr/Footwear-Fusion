'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

     await queryInterface.bulkInsert('Carts', [{
      subtotal: null,
      total: null,
      orderId: 1,
      createdAt : new Date,
      updatedAt : new Date,
      deletedAt : new Date
     }], {});
  },

  async down (queryInterface, Sequelize) {
    
     await queryInterface.bulkDelete('Carts', null, {});
    
  }
};
