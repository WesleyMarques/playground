const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const petSchema = new Schema({
  id: { type: String, required: true },
  nome: { type: String, required: true },
  preco: {type: Number, required: true}
});

module.exports = petSchema;
