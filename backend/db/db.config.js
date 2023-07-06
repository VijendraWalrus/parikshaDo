const { Client } = require('pg');
const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: '12345',
  port: 5432,
});

client
  .connect()
  .then(() => console.log('database connected'))
  .catch(err => console.error('connection error', err.stack));

module.exports = client;
