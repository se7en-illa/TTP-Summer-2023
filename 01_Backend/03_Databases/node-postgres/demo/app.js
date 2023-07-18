// const Client = require("pg").Client;
// const Client = pg.Client;
const { Client } = require("pg");

(async () => {
  // const client = new Client("postgres://localhost/food");
  const client = new Client({
    host: "localhost",
    database: "food",
  });

  await client.connect();

  const resultSet = await client.query(`
    INSERT INTO meals (name) VALUES ('Mom\'s Spaghetti')
  `);

  console.log(resultSet.rows);

  await client.end();
})();
