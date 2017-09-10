const Spirit = require('../models/spirits');

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
function show(req, res) {
  Spirit
    .findById(req.params.id)
    .populate('mainSpirit')
    .exec()
    .then(spirit => res.render('spirits/show', { spirit }))
    .catch(err => res.render('error', { err }));
}

function showForm (req, res) {
  res.render('spirits/new');
}


function create(req, res) {

  req.body.user = req.currentUser;

  Spirit
    .create(req.body)
    .then(() => res.redirect('/spirits'))
    .catch(err => res.render('error', { err }));
}
function editForm(req, res) {
  Spirit
    .findById(req.params.id)
    .exec()
    .then(spirit => res.render('spirits/edit', { spirit }))
    .catch(err => res.render('error', { err }));
}

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

function itemDelete(req, res) {
  Spirit
    .findById(req.params.id)
    .exec()
    .then(spirit => spirit.remove())
    .then(() => res.redirect('/spirits'))
    .catch(err => res.render('error', { err }));
}





module.exports = {
  index: index,
  show: show,
  new: showForm,
  create: create,
  edit: editForm,
  update: update,
  delete: itemDelete

};
