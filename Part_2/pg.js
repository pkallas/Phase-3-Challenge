const { Client } = require('pg');
const client = new Client({
  user: 'pkallas',
  host: 'localhost',
  database: process.env.NODE_ENV === 'test' ? 'grocery_store_test' : 'grocery_store',
  port: '5432'
});
client.connect();

module.exports = client;
