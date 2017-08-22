const pg = require('pg');
const client = require('./pg');
const productText = `SELECT name, section FROM products WHERE section = '${process.argv[3]}'`;
const ordersText = `SELECT order_id, total_cost FROM orders WHERE shopper_id = '${process.argv[3]}'`;
const shoppersText = `SELECT shoppers.name, COUNT(*) FROM orders
  JOIN shoppers ON shoppers.id = orders.shopper_id`;

const productList = () => {
  client.query(productText)
  .then(result => console.log(result.rows[0]))
  .catch(error => console.log(error))
};

const shopperOrders = () => {
  client.query(ordersText)
  .then(result => console.log(result.rows[0]))
  .catch(error => console.log(error))
};

const realShoppers = () => {
  client.query(shoppersText)
  .then(result => console.log(result.rows[0]))
  .catch(error => console.log(error))
};

module.exports = {
  realShoppers: realShoppers,
  shopperOrders: shopperOrders,
  productList: productList
};
