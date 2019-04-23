const Facade = require('../../lib/facade');
const productSchema = require('./product.schema');

class ProductFacade extends Facade {}

module.exports = new ProductFacade('Product', productSchema);
