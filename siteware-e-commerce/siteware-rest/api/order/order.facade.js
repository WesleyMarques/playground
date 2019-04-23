const Facade = require('../../lib/facade');
const orderSchema = require('./order.schema');

class OrderFacade extends Facade {}

module.exports = new OrderFacade('Order', orderSchema);
