const Sequelize = require('sequelize');
const conn = new Sequelize(
  process.env.DATABASE_URL || 'postgres://localhost:5432/todos',
  {
    logging: false
  }
);

module.exports = conn;
