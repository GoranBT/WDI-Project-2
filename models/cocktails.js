const mongoose = require('mongoose');

const cocktalSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  recipe: { type: String, required: true },
  mainSpirit: {type: mongoose.Schema.ObjectId, ref: 'Spirit' },
  description: {type: String, required: true}
});


module.exports = mongoose.model('Cocktail', cocktalSchema);
