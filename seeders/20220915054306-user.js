'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
 return queryInterface.bulkInsert('Users',[{
   firstName : 'John',
   lastName : 'Doe',
   mobileNo : 4535263,
   email : 'tedr@gmail.com',
   createdAt : new Date(),
   updatedAt : new Date()
 }])
  },

  async down (queryInterface, Sequelize) {
   return queryInterface.bulkDelete('Users' ,null ,{})
  }
};
