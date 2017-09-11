const mongoose = require('mongoose');

const spiritSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  description: {type: String, required: true},
  user: { type: mongoose.Schema.ObjectId, ref: 'User'}
});

spiritSchema
  .virtual('cocktails', {
    ref: 'Cocktail',
    localField: '_id',
    foreignField: 'mainSpirit'
  });

module.exports = mongoose.model('Spirit', spiritSchema);
