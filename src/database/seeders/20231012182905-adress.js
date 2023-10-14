"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Adresses",[{
      street: "calle 123",
      province : "Buenos Aires",
      createdAt : new Date,
      updatedAt : new Date
       },
      ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Adresses", null, {});
  },
};
