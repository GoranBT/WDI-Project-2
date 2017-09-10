function sessionsNew(req, res) {
  res.render('session/new');
}
module.exports = {
  new: sessionsNew
};
