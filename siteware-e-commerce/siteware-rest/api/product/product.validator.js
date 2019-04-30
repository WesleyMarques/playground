const { Joi } = require('celebrate');

class ProductValidator {

  constructor(){
    this.querySchema = Joi.object({
      name: Joi.string().required(),
      price: Joi.number().integer().positive(),
      promotion: Joi.string()
    });
  }

  getValidator() {
    return this.querySchema;
  }
}


module.exports = new ProductValidator();
