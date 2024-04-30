'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.createTable('students', { 
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      name:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      age:{
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      guardian_name:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      gurdian_phone:{
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      address:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      education_level:{
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  }, 

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('students');
  }
};
