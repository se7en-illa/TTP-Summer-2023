const conn = require('./conn');
const Todo = require('./Todo');

const syncAndSeed = async () => {
  await conn.sync({ force: true });

  await Todo.create({
    taskName: 'Buy dog food',
    assignee: 'Cody'
  });

  await Todo.create({
    taskName: 'Take over world',
    assignee: 'Cody'
  });

  console.log(`
    Seeding successful!
  `);
};

module.exports = {
  conn,
  syncAndSeed,
  models: {
    Todo
  }
};
