const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const { dbURI } = require('../config/environment');
mongoose.connect(dbURI, { useMongoClient: true });

const Spirit = require('../models/spirits');
const Cocktail = require('../models/cocktails');

Spirit.collection.drop();
Cocktail.collection.drop();

//Spirits

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
    console.log(`${spirits.length} spirits have been created!`);  // Creating cocktails
    return Cocktail.create([
      {name: 'Sex on the beach', mainSpirit: spirits[0], image: 'https://mmac-geckowebdevelopm1.netdna-ssl.com/images/cocktails/6798/300_450_sex_on_the_breach_2.jpg', description: 'The Sex on the Beach cocktail is a very popular mixed drink which is the epitome of easy drinking.', recipe: '25 ml Vodka / 25 ml Peach Schnapps / 40 ml Orange Juice / 20 ml Cranberry Juice / Orange Slice for Garnish'},
      {name: 'Espresso Martini', mainSpirit: spirits[0], image: 'https://cdn.diffordsguide.com/contrib/stock-images/2016/11/05/20160dd6bb782c07f1176350bf71134f9ede.jpg', description: 'A silky smooth martini with that caffeinated kick to keep the night going that extra hour longer!', recipe: '37 1/2 ml Vanilla Vodka, 12 1/2 ml Kahlúa, Double Espresso, 12 1/2 ml Sugar Syrup, 3 Coffee Beans'},
      {name: 'Tom Collins', mainSpirit: spirits[1], image: 'https://cdn.diffordsguide.com/contrib/stock-images/2016/1/48/201640b7a2c6da92a6a88fe29d1d6086ba08.jpg', description: 'Tom Collins is a highly regarded classic cocktail and deservedly so. A perfect drink to sip on a hot summers day. An unmissable cocktail.', recipe: '37 1/2 ml Gin, 25 ml Lemon Juice, 12 1/2 ml Sugar Syrup, splash Soda Water'},
      {name: 'Negroni', mainSpirit: spirits[1], image: 'https://s-media-cache-ak0.pinimg.com/736x/f5/90/a9/f590a9e473c1085b4791ab58b2102e45--kahlua-drinks-coffee-cocktails.jpg', description: 'Taking its name from Count Camillo Negroni, the Negroni was created at the Casoni bar in Florence as a result of the bartender being asked for an Americano with a bit more kick;', recipe: '25 ml Gin, 25 ml Sweet Red Vermouth, 25 ml Campari, Orange Peel'},
      {name: 'Old-Fashion', mainSpirit: spirits[2], image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRprI--Lxv4arz5RXXWPzRg_-RCIOikdMDLgmKUnnUoZILW2nz5', description: 'A firm favourite at Social and Cocktail HQ, made properly, this is the taste of cocktail heaven!', recipe: '50 ml Whiskey, 2 dashes Angostura Bitters, 1 dash Orange Bitters, 1 bar spoon Sugar, Orange peel'},
      {name: 'Mint Julep', mainSpirit: spirits[2], image: 'https://www.vaporfi.com/media/catalog/product/cache/9/thumbnail/600x/17f82f742ffe127f42dca9de82fb58b1/v/z/vz_mint-julep_1.jpg', description: 'A fantastic sipping drink, bursting with flavour. Always insist your Mint Julep is served in a silver cup!', recipe: '50 ml Knob Creek whiskey, bar spoon Granulated Sugar, 8 Mint leaves, Mint sprigs'},
      {name: 'Tommy\'s Margarita', mainSpirit: spirits[3], image: 'https://cdn.diffordsguide.com/contrib/stock-images/2016/1/44/20167c467e0d854b6830bfeb59629d12a7af.jpg', description: 'The idea behind this cocktail is that the agave syrup enhances the agave already present in the tequila and we can report it works amazingly. Arguably the best margarita going!', recipe: '50 ml Tequila, 25 ml Lime Juice, 12 1/2 ml, Lemon Slices, Blackberry'},
      {name: 'Tequila Sunrise', mainSpirit: spirits[3], image: 'http://media.istockphoto.com/photos/tequila-sunrise-cocktail-picture-id527760633?k=6&m=527760633&s=612x612&w=0&h=btH5U55HTu9fviHqJ7riiX0a-F1ZrxhvoJxJ_zQ4c9w=', description: 'The Tequila Sunrise is a popular and refreshing tequila-based cocktail which is made with tequila, orange juice and grenadine syrup.', recipe: '50 ml Tequila, 80 ml Orange Juice, dash Grenadine Syrup, Lime wedge, Orange slice'},
      {name: 'Planters Punch', mainSpirit: spirits[4], image: 'http://a1.www2.cocktails.de/sites/default/files/cocktail/cocktail-sexonthebeach.jpg', description: 'This classic rum drink is fun, refreshing and bursting with flavour. One of our favourite punches.', recipe: '50 ml Dark Rum, 30 ml Lime Juice, 10 ml Grenadine Syrup, 15 ml Sugar Syrup, Splash of Soda Water, 2 dashes Angostura Bitters'},
      {name: 'Mojito', mainSpirit: spirits[4], image: 'https://cdn.liquor.com/wp-content/uploads/2010/09/23130001/herradura-tequila-mojito.jpg', description: 'Sour', recipe: '50 ml White Rum, 8 Mint leaves, 12 1/2 ml Sugar Syrup, 25 ml Lime Juice, 2 Mint sprigs'}
    ]);
  })
  .then(cocktails => {
    console.log(`${cocktails.length} cocktails have been created!`);
  })

  .catch(err => console.log(err))
  .finally(() => mongoose.connection.close());
