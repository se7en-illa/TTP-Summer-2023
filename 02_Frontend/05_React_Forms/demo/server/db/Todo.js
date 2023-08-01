const Sequelize = require('sequelize');
const conn = require('./conn');

const Todo = conn.define('todos', {
  taskName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  assignee: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports = Todo;
