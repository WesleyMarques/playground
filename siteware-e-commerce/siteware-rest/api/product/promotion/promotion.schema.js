const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const promotionSchema = new Schema({
  role: { type: String, required: true },
  discount: {type: Number, required: true}
});

module.exports = promotionSchema;
