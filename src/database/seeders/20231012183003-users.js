"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          username: "Ariel",
          lastname: "Boxler",
          email: "ariel@gmail.com",
          role: "admin",
          password:
            "$2a$10$UxwoYZVswBHz1rQEnNzdLuaEhlbmqwleh9WBRD9c5UmK/qHW3D.e.",
          birthday: null,
          address: null,
          province: null,
          city: null,
          rolesId: 1,
          adressesId: 1,
          createdAt : new Date,
          updatedAt : new Date,
          deletedAt : new Date
        },
        {
          username: "Luciano",
          lastname: "Carrizo",
          email: "luciano@gmail.com",
          role: "admin",
          password:
            "$2a$10$If/hkoZ27kwMA5WqXK0wfuON2rAsynUFPEgIqpIJTItkiOFvme6xC",
          birthday: "2023-09-13",
          address: "García Lorca 3756",
          province: "Mendoza",
          city: "San Miguel",
          rolesId: 1,
          adressesId: 1,
          createdAt : new Date,
          updatedAt : new Date,
          deletedAt : new Date
        },
        {
          username: "Lucas",
          lastname: "Arroyo",
          email: "lucas@gmail.com",
          role: "admin",
          password:
            "$2a$10$SMOg/VtsEdsW5l3PDJogqe423plIU2OgXXmVm4j6EKjlmJEXqD5oe",
          birthday: null,
          address: null,
          province: null,
          city: null,
          rolesId: 1,
          adressesId: 1,
          createdAt : new Date,
          updatedAt : new Date,
          deletedAt : new Date
        },
        {
          username: "luciano",
          lastname: "Cabral",
          email: "luciano1@gmail.com",
          role: "admin",
          password:
            "$2a$10$y.C4VV73Rp9nq/yLwy7vC.YVxHeNZj4megQfucUibjy65lbxoHeyC",
          birthday: null,
          address: null,
          province: null,
          city: null,
          rolesId: 1,
          adressesId: 1,
          createdAt : new Date,
          updatedAt : new Date,
          deletedAt : new Date
        },
        {
          username: "ISMAEL",
          lastname: "callamullo",
          email: "ismael@gmail.com",
          role: "user",
          password:
            "$2a$10$PsQEMpLUIlcKgUBr1NL2/OxPioUG8l7U/Is1NWoo.PUazIZ/Fabp2",
          birthday: "2023-09-28",
          address: "lanus 1111",
          province: "NQN",
          city: "Seleccione...",
          rolesId: 2,
          adressesId: 1,
          createdAt : new Date,
          updatedAt : new Date,
          deletedAt : new Date
        },
        {
          username: "Eric",
          lastname: "Mena",
          email: "eric@gmail.com",
          role: "user",
          password:
            "$2a$10$Be6OdHr2D1J4wEp/81/FDeX8aIyaau7c.yP72W8KEIOFl/RgFDMlS",
          birthday: null,
          address: "123",
          province: "La Rioja",
          city: "CABA",
          rolesId: 2,
          adressesId: 1,
          createdAt : new Date,
          updatedAt : new Date,
          deletedAt : new Date
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
