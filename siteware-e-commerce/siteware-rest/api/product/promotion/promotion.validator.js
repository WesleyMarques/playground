const Joi = require('joi');

class promotionValidator {

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


module.exports = new promotionValidator();
