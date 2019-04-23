const Facade = require('../../../lib/facade');
const promotionSchema = require('./promotion.schema');

class PromotionFacade extends Facade {}

module.exports = new PromotionFacade('Promotion', promotionSchema);
