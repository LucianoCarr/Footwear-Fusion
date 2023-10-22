"use strict";

const products = require("../../data/productsData.json");
const categories = require("../../data/categories.json");

const structureProductsDB = products.map(
  ({ name, price, discount, description, image, stock, color, category }) => {
    return {
      name,
      price,
      discount,
      description,
      image,
      stock,
      color: JSON.stringify(color),
      categoryId: categories.find(({ name }) => name === category)?.id,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
  }
);

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Products", structureProductsDB, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Products", null, {});
  },
};
