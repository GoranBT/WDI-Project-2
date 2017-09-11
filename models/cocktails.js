const mongoose = require('mongoose');

const commentsSchema = mongoose.Schema({
  comment: String,
  rating: Number,
  user: { type: mongoose.Schema.ObjectId, ref: 'User' }
});

const cocktalSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  recipe: { type: String, required: true },
  mainSpirit: {type: mongoose.Schema.ObjectId, ref: 'Spirit' },
  description: {type: String, required: true},
  comments: [commentsSchema],
  user: { type: mongoose.Schema.ObjectId, ref: 'User'}
});


module.exports = mongoose.model('Cocktail', cocktalSchema);
