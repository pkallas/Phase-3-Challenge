process.env.NODE_ENV = 'test';
const expect = require('chai').expect;
const pg = require('pg');
const client = require('./pg');
const realShoppers = require('./database').realShoppers;
const shopperOrders = require('./database').shopperOrders;
const productList = require('./database').productList;

describe('realShoppers', function() {
  it('Should return an array of data from the db', function(done) {
    expect(realShoppers()).to.be.an('array')
    done()
  })
})
