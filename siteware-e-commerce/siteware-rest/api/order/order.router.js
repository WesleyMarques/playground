const controller = require('./order.controller');
const Router = require('express').Router;
const validator = require('express-joi-validation')({});
const productValidator = require("./order.validator");
const router = new Router();

router.route('/')
  .get((...args) => controller.find(...args))
  .post(validator.query(productValidator.getValidator()), (...args) => controller.create(...args));

router.route('/:id')
  .put((...args) => controller.update(...args))
  .get((...args) => controller.findById(...args))
  .delete((...args) => controller.remove(...args));

module.exports = router;
