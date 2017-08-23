process.env.NODE_ENV = 'test';
const expect = require('chai').expect;
const client = require('./pg');
let input = '';
const productText = `SELECT name, section FROM products WHERE section = '${input}'`;
const ordersText = `SELECT order_id, total_cost FROM orders WHERE shopper_id = '${input}'`;
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
    return productsNameSection;
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
    return ordersIdCost;
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
    return shoppersNameCount;
    client.end();
  })
  .catch(error => console.log(error))
};


describe('realShoppers', function() {
  it('Should return an array of data from the db', function(done) {
    expect(realShoppers()).to.be.an('array')
    done()
  })
})
