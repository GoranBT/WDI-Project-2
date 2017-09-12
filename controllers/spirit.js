const Spirit = require('../models/spirits');
// const Cocktail = require('../models/cocktails');

// spirits index page


function index(req, res) {
  Spirit
    .find()
    .exec()
    .then((spirits) => {
      console.log(spirits);
      res.render('spirits/index', { spirits });

    })
    .catch((err) => {
      res.status(500).render('error', { err });
    });
}

// spirits show page
function show (req, res) {
  Spirit
    .findById(req.params.id)
    .populate('cocktails user')
    .exec()
    .then(spirit => {
      // console.log(spirit);
      // return Cocktail
      //   .find({ mainSpirit: spirit.id })
      //   .populate('mainSpirit user')
      //   .then(cocktails => {
      // console.log('Cocktails:', cocktails);
      res.render('spirits/show', { spirit });
      // });
    })
    .catch(err => res.render('error', {err}));
}

// spirits show form

function showForm (req, res) {
  Spirit
    .find()
    .exec()
    .then((spirits) => {
      res.render('spirits/new', { spirits });
    })
    .catch((err) => {
      res.status(500).render('error', { err });
    });

}

// spirits create new spirit

function create(req, res) {

  req.body.user = req.currentUser;

  Spirit
    .create(req.body)
    .then(() => res.redirect('/spirits'))
    .catch(err => res.render('error', { err }));
}

// spirits edit form

function editForm(req, res) {
  Spirit
    .findById(req.params.id)
    .exec()
    .then(spirit => res.render('spirits/edit', { spirit }))
    .catch(err => res.render('error', { err }));


}

//spirits update
function update(req, res) {
  Spirit
    .findById(req.params.id)
    .exec()
    .then(spirit => {
      spirit = Object.assign(spirit, req.body);
      return spirit.save();
    })
    .then(spirit => res.redirect(`/spirits/${spirit.id}`))
    .catch(err => res.render('error', { err }));
}
// spirits delete function

function itemDelete(req, res) {
  Spirit
    .findById(req.params.id)
    .exec()
    .then(spirit => spirit.remove())
    .then(() => res.redirect('/spirits'))
    .catch(err => res.render('error', { err }));
}


//exporting functions


module.exports = {
  index: index,
  show: show,
  new: showForm,
  create: create,
  edit: editForm,
  update: update,
  delete: itemDelete

};
