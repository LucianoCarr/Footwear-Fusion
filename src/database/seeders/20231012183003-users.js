"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          name: "Ariel",
          lastName: "Boxler",
          email: "ariel@gmail.com",
          password:
            "$2a$10$UxwoYZVswBHz1rQEnNzdLuaEhlbmqwleh9WBRD9c5UmK/qHW3D.e.",
          birthday: "2023-09-13",
          rolesId: 1,
          adressesId: 1,
          createdAt : new Date,
          updatedAt : new Date,
          
        },
        {
          name: "Luciano",
          lastName: "Carrizo",
          email: "luciano@gmail.com",
          password:
            "$2a$10$If/hkoZ27kwMA5WqXK0wfuON2rAsynUFPEgIqpIJTItkiOFvme6xC",
          birthday: "2023-09-13",
          rolesId: 1,
          adressesId: 1,
          createdAt : new Date,
          updatedAt : new Date,
          
        },
        {
          name: "Lucas",
          lastName: "Arroyo",
          email: "lucas@gmail.com",
          password:
            "$2a$10$SMOg/VtsEdsW5l3PDJogqe423plIU2OgXXmVm4j6EKjlmJEXqD5oe",
          birthday: "2023-09-13",
          rolesId: 1,
          adressesId: 1,
          createdAt : new Date,
          updatedAt : new Date,
          
        },
        {
          name: "luciano",
          lastName: "Cabral",
          email: "luciano1@gmail.com",
          password:
            "$2a$10$y.C4VV73Rp9nq/yLwy7vC.YVxHeNZj4megQfucUibjy65lbxoHeyC",
          birthday: "2023-09-13",
          rolesId: 1,
          adressesId: 1,
          createdAt : new Date,
          updatedAt : new Date,
          
        },
        {
          name: "ISMAEL",
          lastName: "callamullo",
          email: "ismael@gmail.com",
          password:
            "$2a$10$PsQEMpLUIlcKgUBr1NL2/OxPioUG8l7U/Is1NWoo.PUazIZ/Fabp2",
          birthday: "2023-09-28",
          rolesId: 2,
          adressesId: 1,
          createdAt : new Date,
          updatedAt : new Date,
          
        },
        {
          name: "Eric",
          lastName: "Mena",
          email: "eric@gmail.com",
          password:
            "$2a$10$Be6OdHr2D1J4wEp/81/FDeX8aIyaau7c.yP72W8KEIOFl/RgFDMlS",
          birthday: "2023-09-13",
          rolesId: 2,
          adressesId: 1,
          createdAt : new Date,
          updatedAt : new Date,
             
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
