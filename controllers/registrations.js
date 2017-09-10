// const User = require('../models/user');
//
function registrationsNew(req, res) {
  res.render('registrations/news');
}
//
// function registrationsCreate(req, res) {
//   User
//     .create(req.body)
//     .then(() => res.redirect('/'))
//     .catch(err => res.render('error', { err }));
// }
//
module.exports = {
//   create: registrationsCreate,
  new: registrationsNew
};
