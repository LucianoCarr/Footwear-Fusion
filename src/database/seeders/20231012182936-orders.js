'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

      await queryInterface.bulkInsert('Orders', [{
        date: null,
    total: null,
    userId: 1,
    createdAt : new Date,
      updatedAt : new Date,
      deletedAt : new Date
      }], {});
   
  },

  async down (queryInterface, Sequelize) {

      await queryInterface.bulkDelete('Orders', null, {});

  }
};
