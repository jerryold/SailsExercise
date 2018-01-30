
var Sequelize = require('sequelize');
var db = new Sequelize('sqlite://data.sqlite');
var models = {};

models.db = db;
models.Post = db.define('post', {
     'name': Sequelize.STRING,
     'msg': Sequelize.TEXT,
 });

db.sync();

module.exports = models;