const router = require('express').Router();
const { Destination, User, Comment } = require('../models');

router.get('/', checkAuthenticated, async (req, res) => {
  try {
    const destinationData = await Destination.findAll();

    const destinations = destinationData.map((project) =>
      project.get({ plain: true })
    );

    res.render('homepage', { destinations, loggedIn: req.session.logged_in });
  } catch (err) {
    res.status(500).json(err);
  }
});

function checkAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    req.session.logged_in = true;
  }
  next();
};

module.exports = router;
