'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Carts',[{
      userId : 1,
      productId : 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }],{})
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Carts' ,null ,{})
  }
};
