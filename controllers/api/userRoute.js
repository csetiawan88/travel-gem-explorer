const router = require('express').Router();
const { User } = require('../../models');
const passport = require('passport');

router.post('/', checkNotAuthenticated, async (req, res) => {
  try {
    const userData = await User.create(req.body);
    console.log('Response:', userData);
    req.session.save(() => {
      req.session.userId = userData.id;
      loggedIn: req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    console.log('error', err);
    res.status(400).json(err);
  }
});

router.post(
  '/login',
  checkNotAuthenticated,
  passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/',
    failureFlash: true,
  })
);

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

function checkNotAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    req.session.logged_in = true;
    return res.redirect('/');
  }
  req.session.logged_in = false;
  next();
}

module.exports = router;
