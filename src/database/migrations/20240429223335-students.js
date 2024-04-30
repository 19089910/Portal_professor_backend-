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
      age:{},
      guardian_name:{        
        type: Sequelize.STRING,
        allowNull: false,},
      gurdian_phone:{
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      address:{},
      education_level:{},
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
