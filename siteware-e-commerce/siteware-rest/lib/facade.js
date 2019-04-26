const mongoose = require('mongoose');

class Facade {
  constructor(name, schema, populate) {
    this.Model = mongoose.model(name, schema);
    this.populate = populate || "null";
  }

  create(body) {
    const model = new this.Model(body);
    return model.save();
  }

  find(...args) {
    return this.Model
      .find(...args)
      .populate(this.populate)
      .exec();
  }

  findOne(...args) {
    return this.Model
      .findOne(...args)
      .populate(this.populate)
      .exec();
  }

  findById(...args) {
    return this.Model
      .findById(...args)
      .populate(this.populate)
      .exec();
  }

  update(...args) {
    return this.Model
      .update(...args)
      .exec();
  }

  remove(...args) {
    return this.Model
      .remove(...args)
      .exec();
  }
}

module.exports = Facade;
