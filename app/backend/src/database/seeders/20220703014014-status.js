'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Status', [
      {
       name: 'pendente',
      },
      {
        name: 'em andamento',
      },
      {
        name: 'pronto',
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Status', null, {});
  }
};
