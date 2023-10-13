"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Adresses",[{
      street: "calle 123",
      province
       }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Adresses", null, {});
  },
};
