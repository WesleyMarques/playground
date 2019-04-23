const Joi = require('joi');

class OrderValidator {

  constructor(){
    this.querySchema = Joi.object({
      name: Joi.string().required(),
      price: Joi.number().integer().positive()
    });
  }

  getValidator() {
    return this.querySchema;
  }
}


module.exports = new OrderValidator();
