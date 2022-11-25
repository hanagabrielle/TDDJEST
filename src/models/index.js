// 'use strict';

// const fs = require('fs');
// const path = require('path');
// const Sequelize = require('sequelize');
// const process = require('process');
// const basename = path.basename(__filename);
// const config = require('../config/database');
// const db = {};

//   const sequelize = new Sequelize(config.database, config.username, config.password, config);

// fs
//   .readdirSync(__dirname)
//   .filter(file => {
//     return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
//   })
//   .forEach(file => {
//     const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
//     db[model.name] = model;
//   });

// Object.keys(db).forEach(modelName => {
//   if (db[modelName].associate) {
//     db[modelName].associate(db);
//   }
// });

// db.sequelize = sequelize;
// db.Sequelize = Sequelize;

// module.exports = db;

import Sequelize from 'sequelize';

import database from "../config/database.js"

const sequelize = new Sequelize(database);

import User from "../models/User.js"

const models = [
  User
]

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(database);
    // console.log('Consegui conectar com o banco?',this.connection)

    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models)
      );
  }
}

export default new Database();
