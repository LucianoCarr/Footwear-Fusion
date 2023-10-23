'use strict';
const category = ["hombres", "mujeres", "nenes"]

const categoriesFormatDB = category.map(categoria => {
  return {
    name : categoria,
    createdAt:new Date,
    updatedAt:new Date
  }
})
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

      await queryInterface.bulkInsert('Categories', categoriesFormatDB, {});

  },

  async down (queryInterface, Sequelize) {

     await queryInterface.bulkDelete('Categories', null, {});

  }
};
