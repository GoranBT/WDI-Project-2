const Cocktail = require('../models/cocktails');
const Spirit = require('../models/spirits');

// cocktail index page

function cocktailIndex(req, res) {
  Cocktail
    .find()
    .populate('mainSpirit')
    .exec()
    .then((cocktails) => {
      res.render('cocktails/index', { cocktails });
    })
    .catch((err) => {
      res.status(500).render('error', { err });
    });
}

// cocktail show page

function cocktailShow(req, res) {
  Cocktail
    .findById(req.params.id)
    .populate('mainSpirit user comments.user')
    .exec()
    .then(cocktail => res.render('cocktails/show', { cocktail }))
    .catch(err => res.render('error', { err }));
}

// cocktail show form

function cocktailNew (req, res) {
  Spirit
    .find()
    .exec()
    .then((spirits) => {
      res.render('cocktails/new', { spirits });
    })
    .catch((err) => {
      res.status(500).render('error', { err });
    });


}

// cocktail create cocktail

function cocktailCreate(req, res) {

  req.body.user = req.currentUser;

  Cocktail
    .create(req.body)
    .then(() => res.redirect('/cocktails'))
    .catch(err => res.render('error', { err }));
}

// Edit cocktail

function cocktailEditForm(req, res) {
  Cocktail
    .findById(req.params.id)
    .populate('mainSpirit')
    .exec()
    .then((cocktail) => {
      if(!cocktail) return res.status(404).send('Not found');
      return Spirit
        .find()
        .exec()
        .then((spirits) => {
          res.render('cocktails/edit', {cocktail, spirits});
        })
        .catch((err) => {
          res.status(500).render('error', { err });
        });
    });
  // Cocktail
  //   .findById(req.params.id)
  //   .populate('mainSpirit')
  //   .exec()
  //   .then(cocktail => res.render('cocktails/edit', { cocktail }))
  //   .catch(err => res.render('error', { err }));
}

// update

function cocktailUpdate(req, res) {
  Cocktail
    .findById(req.params.id)
    .populate('mainSpirit')
    .exec()
    .then(cocktail => {
      cocktail = Object.assign(cocktail, req.body);
      return cocktail.save();
    })
    .then(cocktail => res.redirect(`/cocktails/${cocktail.id}`))
    .catch(err => res.render('error', { err }));
}

// delete

function cocktailDelete(req, res) {
  Cocktail
    .findById(req.params.id)
    .exec()
    .then(spirit => spirit.remove())
    .then(() => res.redirect('/cocktails'))
    .catch(err => res.render('error', { err }));
}

// Cocktails comments functions

function cocktailCommentsDelete(req, res) {
  Cocktail
    .findById(req.params.id)
    .exec()
    .then(cocktail => {
      const comment = cocktail.comments.id(req.params.commentId);
      console.log(comment);
      comment.remove();
      return cocktail.save();
    })
    .then(cocktail => res.redirect(`/cocktails/${cocktail.id}`))
    .catch((err) => {
      res.status(500).render('error', { err });
    });
}

function cocktailCommentsCreate(req, res) {
  req.body.user = req.currentUser;
  Cocktail
    .findById(req.params.id)
    .exec()
    .then(cocktail => {
      cocktail.comments.push(req.body);
      return cocktail.save();
    })
    .then(cocktail => res.redirect(`/cocktails/${cocktail.id}`))
    .catch((err) => {
      res.status(500).render('error', { err });
    });
}



// exporting functions

module.exports = {
  index: cocktailIndex,
  show: cocktailShow,
  new: cocktailNew,
  create: cocktailCreate,
  edit: cocktailEditForm,
  update: cocktailUpdate,
  delete: cocktailDelete,
  commentsDelete: cocktailCommentsDelete,
  commentsCreate: cocktailCommentsCreate
};
