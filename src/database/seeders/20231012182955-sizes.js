'use strict';

const sizesArray = [23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46]


const sizesDB = sizesArray.map(talles => {
  return {
    productId : 1,
    size : talles,
    createdAt : new Date,
    updatedAt : new Date
  }
})


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

      await queryInterface.bulkInsert('Sizes', 
       
        sizesDB
      , {});

  },

  async down (queryInterface, Sequelize) {

      await queryInterface.bulkDelete('Sizes', null, {});

  }
};
