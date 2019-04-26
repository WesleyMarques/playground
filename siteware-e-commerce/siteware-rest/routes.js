const Router = require('express').Router;
const router = new Router();


const product = require('./api/product/product.router');
const promotion = require('./api/product/promotion/promotion.router');

router.route('/').get((req, res) => {
  res.json({ message: 'Welcome to siteware-rest API!' });
});

router.use('/product', product);
router.use('/promotion', promotion);

module.exports = router;
