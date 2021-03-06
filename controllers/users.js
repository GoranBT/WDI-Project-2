const User = require('../models/user');
//
function usersShow(req, res) {
  User
    .findById(req.params.id)
    .populate('cocktails favourites')
    .exec()
    .then(user => res.render('users/show', { user }))
    .catch(err => res.render('error', { err }));
}

function usersEdit(req, res) {
  User
    .findById(req.params.id)
    .exec()
    .then(user => res.render('users/edit', { user }))
    .catch(err => res.render('error', { err }));
}

function usersUpdate(req, res) {
  User
    .findById(req.params.id)
    .exec()
    .then(user => {
      user = Object.assign(user, req.body);
      return user.save();
    })
    .catch(err => res.render('error', { err }));
}

function usersDelete(req, res) {
  User
    .findById(req.params.id)
    .exec()
    .then(user => user.remove())
    .catch(err => res.render('error', { err }));
}

function usersCheckEmail(req, res) {
  if(!req.query.email) return res.json(true);
  User
    .findOne({ email: req.query.email })
    .exec()
    .then(user => res.json(!user));
}

function usersCheckUsername(req, res) {
  if(!req.query.username) return res.json(true);
  User
    .findOne({ username: req.query.username })
    .exec()
    .then(user => res.json(!user));
}

module.exports = {
  show: usersShow,
  edit: usersEdit,
  update: usersUpdate,
  delete: usersDelete,
  checkEmail: usersCheckEmail,
  checkUsername: usersCheckUsername
};
