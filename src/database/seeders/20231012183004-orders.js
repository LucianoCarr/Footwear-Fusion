'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

      await queryInterface.bulkInsert('Orders', [{
      date: new Date,
      total: 1,
      status:"pending",
      userId: 1,
      createdAt : new Date,
      updatedAt : new Date
      }], {});
   
  },

  async down (queryInterface, Sequelize) {

      await queryInterface.bulkDelete('Orders', null, {});

  }
};
