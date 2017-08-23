const pg = require('pg');
const client = require('./pg');
const productText = `SELECT name, section FROM products WHERE section = '${process.argv[3]}'`;
const ordersText = `SELECT order_id, total_cost FROM orders WHERE shopper_id = '${process.argv[3]}'`;
const shoppersText = `SELECT name, COUNT(*) FROM orders
  JOIN shoppers ON shoppers.id = orders.shopper_id
  GROUP BY name`;

const productList = () => {
  let productsNameSection = [];
  client.query(productText)
  .then(result => {
    result.rows.map(index => {
      productsNameSection.push(index.name);
      productsNameSection.push(index.section);
    })
    console.log(productsNameSection);
    client.end();
  })
  .catch(error => console.log(error))
};

const shopperOrders = () => {
  let ordersIdCost = [];
  client.query(ordersText)
  .then(result => {
    result.rows.map(index => {
      ordersIdCost.push(index.order_id);
      ordersIdCost.push(index.total_cost);
    })
    console.log(ordersIdCost);
    client.end();
  })
  .catch(error => console.log(error))
};

const realShoppers = () => {
  let shoppersNameCount = [];
  client.query(shoppersText)
  .then(result => {
    result.rows.map(index => {
      shoppersNameCount.push(index.name);
      shoppersNameCount.push(index.count);
    })
    console.log(shoppersNameCount);
    client.end();
  })
  .catch(error => console.log(error))
};

module.exports = {
  realShoppers: realShoppers,
  shopperOrders: shopperOrders,
  productList: productList
};
