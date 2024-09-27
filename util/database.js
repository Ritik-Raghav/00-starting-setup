const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'pass', {
    dialect: 'mysql', 
    host: 'localhost'
});

module.exports = sequelize;