const controller = require('./promotion.controller');
const Router = require('express').Router;
const validator = require('express-joi-validation')({});
const promotionValidator = require("./promotion.validator");
const router = new Router();

router.route('/')
  .get((...args) => controller.find(...args))
  .post(validator.query(promotionValidator.getValidator()), (...args) => controller.create(...args));

router.route('/:id')
  .put((...args) => controller.update(...args))
  .get((...args) => controller.findById(...args))
  .delete((...args) => controller.remove(...args));

module.exports = router;
