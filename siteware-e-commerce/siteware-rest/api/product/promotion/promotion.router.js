const controller = require('./promotion.controller');
const Router = require('express').Router;
const validator = require('express-joi-validation')({});
const promotionValidator = require("./promotion.validator");
const router = new Router();

router.route('/')
  .get((...args) => controller.find(...args));

module.exports = router;
