const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const { dbURI } = require('../config/environment');
mongoose.connect(dbURI, { useMongoClient: true });

const Spirit = require('../models/spirits');
const Cocktail = require('../models/cocktails');

Spirit.collection.drop();
Cocktail.collection.drop();

Spirit
  .create([{
    name: 'Vodka',
    image: 'http://www.monthlyclubs.com/media/catalog/product/cache/13/image/285x/9df78eab33525d08d6e5fb8d27136e95/g/o/gorgonzola-1.jpg',
    description: 'very nice'
  }])
  .then((spirits)=>{
    console.log(`${spirits.length} spirits have been created!`);
    return Cocktail.create([
      {name: 'Old-Fashion', mainSpirit: spirits[0], image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRprI--Lxv4arz5RXXWPzRg_-RCIOikdMDLgmKUnnUoZILW2nz5', description: 'good1', recipe: 'csdkjncdjkscndlsncldsjnckjsdncsdjaklcnsdjcndsc,xzmcn'}
    ]);
  })
  .then(cocktails => {
    console.log(`${cocktails.length} cocktails have been created!`);
  })

  .catch(err => console.log(err))
  .finally(() => mongoose.connection.close());
