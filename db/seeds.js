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
    image: 'http://www.nectar.net/productimages/gre007-5130784_t@2x.jpg',
    description: 'Vodka is a distilled beverage composed primarily of water and ethanol, sometimes with traces of impurities and flavorings. Traditionally, vodka is made by the distillation of cereal grains or potatoes that have been fermented, though some modern brands use other substances, such as fruits or sugar.'
  },{
    name: 'Gin',
    image: 'https://minuman.com/shop2/image/cache/catalog/Spirits/Gin/Tanqueray%20Gin-600x600.png',
    description: 'Gin is a spirit which derives its predominant flavour from juniper berries (Juniperus communis). From its earliest origins in the Middle Ages, gin has evolved from use in herbal medicine to an object of commerce in the spirits industry.'
  },{
    name: 'Whiskey',
    image: 'http://vodka-store.com/463-731-thickbox/jack-daniels-gentleman-jack-tennessee-whiskey-40-70cl.jpg',
    description: 'Whisky or whiskey is a type of distilled alcoholic beverage made from fermented grain mash. Various grains (which may be malted) are used for different varieties, including barley, corn (maize), rye, and wheat. Whisky is typically aged in wooden casks, generally made of charred white oak.'
  },{
    name: 'Tequila',
    image: 'https://minuman.com/shop2/image/cache/catalog/Spirits/Tequila/Gran%20Patron%20Platinum-600x600.png',
    description: 'Tequila is a regionally specific distilled beverage made from the blue agave plant, primarily in the area surrounding the city of Tequila, 65 km (40 mi) northwest of Guadalajara, and in the highlands (Los Altos) of the central western Mexican state of Jalisco.'
  },{
    name: 'Rum',
    image: 'https://www.dialadrink.com.au/wp-content/uploads/2015/05/bacardi_white_rum_700ml-600x600.jpg',
    description: 'Rum is a distilled alcoholic beverage made from sugarcane byproducts, such as molasses, or directly from sugarcane juice, by a process of fermentation and distillation. The distillate, a clear liquid, is then usually aged in oak barrels.'
  }
  ])
  .then((spirits)=>{
    console.log(`${spirits.length} spirits have been created!`);  // Creating cocktails
    return Cocktail.create([
      {name: 'Sex on the beach', mainSpirit: spirits[0], image: 'https://www.karmaxpresssk.com/media/catalog/product/cache/1/image/600x600/9df78eab33525d08d6e5fb8d27136e95/s/o/sotb-1.jpg', description: 'The Sex on the Beach cocktail is a very popular mixed drink which is the epitome of easy drinking.', recipe: '25 ml Vodka / 25 ml Peach Schnapps / 40 ml Orange Juice / 20 ml Cranberry Juice / Orange Slice for Garnish'},
      {name: 'Espresso Martini', mainSpirit: spirits[0], image: 'http://cdn.liquor.com/wp-content/uploads/2010/04/08141358/espresso-martini.jpg', description: 'A silky smooth martini with that caffeinated kick to keep the night going that extra hour longer!', recipe: '37 1/2 ml Vanilla Vodka, 12 1/2 ml Kahlúa, Double Espresso, 12 1/2 ml Sugar Syrup, 3 Coffee Beans'},
      {name: 'Tom Collins', mainSpirit: spirits[1], image: 'http://www.flynnandflanagan.com/wp-content/uploads/2016/09/tom-collinis-600x600.png', description: 'Tom Collins is a highly regarded classic cocktail and deservedly so. A perfect drink to sip on a hot summers day. An unmissable cocktail.', recipe: '37 1/2 ml Gin, 25 ml Lemon Juice, 12 1/2 ml Sugar Syrup, splash Soda Water'},
      {name: 'Negroni', mainSpirit: spirits[1], image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVk_5N11gGf7n07-XoQhSwKYjMM0q8K4bzG7Rrqr_9w1vPABXsNA', description: 'Taking its name from Count Camillo Negroni, the Negroni was created at the Casoni bar in Florence as a result of the bartender being asked for an Americano with a bit more kick;', recipe: '25 ml Gin, 25 ml Sweet Red Vermouth, 25 ml Campari, Orange Peel'},
      {name: 'Old-Fashion', mainSpirit: spirits[2], image: 'http://www.drinkstuff.com/productimg/101640_large.jpg', description: 'A firm favourite at Social and Cocktail HQ, made properly, this is the taste of cocktail heaven!', recipe: '50 ml Whiskey, 2 dashes Angostura Bitters, 1 dash Orange Bitters, 1 bar spoon Sugar, Orange peel'},
      {name: 'Mint Julep', mainSpirit: spirits[2], image: 'http://thelocalpalate.com/wp-content/uploads/2013/04/WR-Derby-Mint-Julep-Cup-138-w-silverstraw-2-600x600.jpg', description: 'A fantastic sipping drink, bursting with flavour. Always insist your Mint Julep is served in a silver cup!', recipe: '50 ml Knob Creek whiskey, bar spoon Granulated Sugar, 8 Mint leaves, Mint sprigs'},
      {name: 'Tommy\'s Margarita', mainSpirit: spirits[3], image: 'https://pbs.twimg.com/media/CY6vrZRWYAAQRcp.jpg', description: 'The idea behind this cocktail is that the agave syrup enhances the agave already present in the tequila and we can report it works amazingly. Arguably the best margarita going!', recipe: '50 ml Tequila, 25 ml Lime Juice, 12 1/2 ml, Lemon Slices, Blackberry'},
      {name: 'Tequila Sunrise', mainSpirit: spirits[3], image: 'http://thebrokesmoker.com/93-thickbox_default/tequila-sunrise.jpg', description: 'The Tequila Sunrise is a popular and refreshing tequila-based cocktail which is made with tequila, orange juice and grenadine syrup.', recipe: '50 ml Tequila, 80 ml Orange Juice, dash Grenadine Syrup, Lime wedge, Orange slice'},
      {name: 'Planters Punch', mainSpirit: spirits[4], image: 'https://www.karmaxpresssk.com/media/catalog/product/cache/1/image/600x600/9df78eab33525d08d6e5fb8d27136e95/t/e/teaserbox_2848217.jpg', description: 'This classic rum drink is fun, refreshing and bursting with flavour. One of our favourite punches.', recipe: '50 ml Dark Rum, 30 ml Lime Juice, 10 ml Grenadine Syrup, 15 ml Sugar Syrup, Splash of Soda Water, 2 dashes Angostura Bitters'},
      {name: 'Mojito', mainSpirit: spirits[4], image: 'https://blog.haltegourmande.com/wp-content/uploads/2017/05/sirop-mojito-50cl-la-gosse.jpeg', description: 'Sour', recipe: '50 ml White Rum, 8 Mint leaves, 12 1/2 ml Sugar Syrup, 25 ml Lime Juice, 2 Mint sprigs'}
    ]);
  })
  .then(cocktails => {
    console.log(`${cocktails.length} cocktails have been created!`);
  })

  .catch(err => console.log(err))
  .finally(() => mongoose.connection.close());
