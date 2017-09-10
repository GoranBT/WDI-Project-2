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
    image: 'http://www.31dover.com/media/catalog/product/g/o/goose-goose-main-img.jpg',
    description: 'Vodka is a distilled beverage composed primarily of water and ethanol, sometimes with traces of impurities and flavorings. Traditionally, vodka is made by the distillation of cereal grains or potatoes that have been fermented, though some modern brands use other substances, such as fruits or sugar.'
  },{
    name: 'Gin',
    image: 'https://img.thewhiskyexchange.com/540/mini_gin_hen1.jpg',
    description: 'Gin is a spirit which derives its predominant flavour from juniper berries (Juniperus communis). From its earliest origins in the Middle Ages, gin has evolved from use in herbal medicine to an object of commerce in the spirits industry.'
  },{
    name: 'Whiskey',
    image: 'https://img.thewhiskyexchange.com/540/brbon_jac1.jpg',
    description: 'Whisky or whiskey is a type of distilled alcoholic beverage made from fermented grain mash. Various grains (which may be malted) are used for different varieties, including barley, corn (maize), rye, and wheat. Whisky is typically aged in wooden casks, generally made of charred white oak.'
  },{
    name: 'Tequila',
    image: 'https://wine-searcher1.freetls.fastly.net/images/labels/82/17/patron-silver-tequila-mexico-10518217.jpg',
    description: 'Tequila is a regionally specific distilled beverage made from the blue agave plant, primarily in the area surrounding the city of Tequila, 65 km (40 mi) northwest of Guadalajara, and in the highlands (Los Altos) of the central western Mexican state of Jalisco.'
  },{
    name: 'Rum',
    image: 'http://www.cocktail-book.ru/content/upload/article_image_2337.jpeg',
    description: 'Rum is a distilled alcoholic beverage made from sugarcane byproducts, such as molasses, or directly from sugarcane juice, by a process of fermentation and distillation. The distillate, a clear liquid, is then usually aged in oak barrels.'
  }
  ])
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
