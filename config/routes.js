const router = require('express').Router();
const spirits = require('../controllers/spirit');
const cocktails = require('../controllers/cocktails');
const registrations = require('../controllers/registrations');
const sessions = require('../controllers/sessions');

//  Home page
router.get('/', (req, res) => res.render('home'));

// Cocktails routes
router.route('/cocktails')
  .get(cocktails.index)
  .post(cocktails.create);

router.route('/cocktails/new')
  .get(cocktails.new);

router.route('/cocktails/:id')
  .get(cocktails.show)
  .put(cocktails.update)
  .delete(cocktails.delete);

router.route('/cocktails/:id/edit')
  .get(cocktails.edit);

// Comments  routes
router.post('/cocktails/:id/comments', cocktails.commentsCreate);

router.route('/cocktails/:id/comments/:commentId')
  .delete(cocktails.commentsDelete);


// Spirit routes

router.route('/spirits')
  .get(spirits.index)
  .post(spirits.create);

router.route('/spirits/new')
  .get(spirits.new);

router.route('/spirits/:id')
  .get(spirits.show)
  .put(spirits.update)
  .delete(spirits.delete);

router.route('/spirits/:id/edit')
  .get(spirits.edit);


// Register

router.route('/register')
  .get(registrations.new)
  .post(registrations.create);

// Log In

router.route('/login')
  .get(sessions.new)
  .post(sessions.create);

router.get('/logout', sessions.delete);






// exporting router

module.exports = router;
