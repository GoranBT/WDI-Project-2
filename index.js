const express = require('express');
const app = express();

const { port, dbURI} = require('./config/environment');
const expressLayouts  = require('express-ejs-layouts');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const morgan = require('morgan');
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

mongoose.connect(dbURI, { useMongoClient: true });

const routes = require('./config/routes');

app.set('view engine', 'ejs');
app.set('views', `${__dirname}/views`);

app.use(expressLayouts);
app.use(express.static(`${__dirname}/public`));

app.use(morgan('dev'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride(req => {
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    const method = req.body._method;
    delete req.body._method;
    return method;
  }
}));





app.use(routes);

app.listen(port, () => console.log(`Express is listening on port ${port}`));
