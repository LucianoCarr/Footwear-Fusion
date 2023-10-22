"use strict";
const products = require("../../data/productsData.json");

const imagesProducts = products.map(({ id, images }) => {
  const imgsFormat = images.map((img) => {
    return {
      productId: id,
      filename: img,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
  });
  return imgsFormat
}).flat(3);

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
  
    await queryInterface.bulkInsert(
      "Images",imagesProducts,
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Images", null, {});
  },
};
