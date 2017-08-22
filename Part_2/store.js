const realShoppers = require('./database').realShoppers;
const shopperOrders = require('./database').shopperOrders;
const productList = require('./database').productList;

switch(process.argv[2]){
  case 'realShoppers':
    realShoppers()
    break;

  case 'shopperOrders':
    shopperOrders()
    break;

  case 'productList':
    productList()
    break;

  default:
    console.log('Please enter a command after store.')
    console.log('The commands are realShoppers, shopperOrders, and productList')
}
