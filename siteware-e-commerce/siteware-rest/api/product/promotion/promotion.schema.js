const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const promotionSchema = new Schema({
  quantidade: { type: Number, required: true },
  discount_percent: {type: Number},
  discount_fixed: {type: Number}
});

module.exports = promotionSchema;
