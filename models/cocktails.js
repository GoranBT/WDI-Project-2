const mongoose = require('mongoose');

const commentSchema = mongoose.Schema({
  comment: String,
  rating: Number,
  user: { type: mongoose.Schema.ObjectId, ref: 'User' }
});

commentSchema.methods.belongsTo = function(user) {
  if(!user) return false;
  return user.id === this.user.id;
};

const cocktailSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  recipe: { type: String, required: true },
  mainSpirit: {type: mongoose.Schema.ObjectId, ref: 'Spirit' },
  description: {type: String, required: true},
  comments: [commentSchema],
  user: { type: mongoose.Schema.ObjectId, ref: 'User'}
});


module.exports = mongoose.model('Cocktail', cocktailSchema);
