'use strict';
const category = require('../../data/categories.json')

const categoriesFormatDB = category.map(c => {
  return {
    ...c,
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
