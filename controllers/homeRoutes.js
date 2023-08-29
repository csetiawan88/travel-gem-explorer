const router = require('express').Router();
const { Destination, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
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

router.get('/destination/:id', async (req, res) => {
  try {
    const destinationData = await Destination.findByPk(req.params.id, {
      include: [
        {
          model: Comment,
          attributes: ['comment', 'userId'],
        },
      ],
    });

    const destination = destinationData.get({ plain: true });
    res.render('destinations', {
      ...destination,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
