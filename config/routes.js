const router = require('express').Router();
const spirits = require('../controllers/spirit');
const cocktails = require('../controllers/cocktails');
const registrations = require('../controllers/registrations');
const sessions = require('../controllers/sessions');

router.get('/', (req, res) => res.render('home'));

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

router.post('/cocktails/:id/comments', cocktails.commentsCreate);

router.route('/films/:id/comments/:commentId')
  .delete(cocktails.commentsDelete);

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



router.route('/register')
  .get(registrations.new);

router.route('/login')
  .get(sessions.new);








module.exports = router;
