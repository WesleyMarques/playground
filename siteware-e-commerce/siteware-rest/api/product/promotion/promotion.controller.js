const Controller = require('../../../lib/controller');
const productFacade = require('./promotion.facade');

class PromotionController extends Controller {}

module.exports = new PromotionController(productFacade);
