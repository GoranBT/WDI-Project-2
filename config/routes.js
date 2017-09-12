const router = require('express').Router();
const secureRoute = require('../lib/secureRoute');

const spirits = require('../controllers/spirit');
const cocktails = require('../controllers/cocktails');
const registrations = require('../controllers/registrations');
const sessions = require('../controllers/sessions');
const users = require('../controllers/users');

//  Home page
router.get('/', (req, res) => res.render('home'));

// Cocktails routes
router.route('/cocktails')
  .get(cocktails.index)
  .post(secureRoute, cocktails.create);

router.route('/cocktails/new')
  .get(secureRoute, cocktails.new);

router.route('/cocktails/:id')
  .get(cocktails.show)
  .put(secureRoute, cocktails.update)
  .delete(secureRoute, cocktails.delete);

router.route('/cocktails/:id/edit')
  .get(secureRoute, cocktails.edit);

router.route('/cocktails/:id/favorite')
  .post(secureRoute, cocktails.favorite);

// Comments  routes
router.post('/cocktails/:id/comments', cocktails.commentsCreate);

router.route('/cocktails/:id/comments/:commentId')
  .delete(cocktails.commentsDelete);


// Spirit routes

router.route('/spirits')
  .get(spirits.index)
  .post(secureRoute, spirits.create);

router.route('/spirits/new')
  .get(secureRoute, spirits.new);

router.route('/spirits/:id')
  .get(spirits.show)
  .put(secureRoute, spirits.update)
  .delete(secureRoute, spirits.delete);

router.route('/spirits/:id/edit')
  .get(secureRoute, spirits.edit);



// Register

router.route('/register')
  .get(registrations.new)
  .post(registrations.create);

// Log In

router.route('/login')
  .get(sessions.new)
  .post(sessions.create);

router.get('/logout', sessions.delete);

// User

router.route('/users/:id')
  .get(users.show)
  .put(secureRoute, users.update)
  .delete(secureRoute, users.delete);

router.route('/users/:id/edit')
  .get(secureRoute, users.edit);




// exporting router

module.exports = router;
