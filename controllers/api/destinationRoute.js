const router = require('express').Router();
const { Destination, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
  try {
    const destinations = await Destination.findAll();

    res.status(200).json(destinations);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/userDestination/:userId', async (req, res) => {
  const userId = req.params.userId;

  try {
    const destinations = await Destination.findAll({
      where: {
        userId: userId,
      },
    });

    res.status(200).json(destinations);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/create-destination', withAuth, async (req, res) => {
  console.log(req.body);
  try {
    const newDestination = await Destination.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newDestination);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.put('/:id', withAuth, async (req, res) => {
  try {
    const destinationId = req.params.id;
    const destinationToUpdate = await Destination.findByPk(destinationId);

    if (!destinationToUpdate) {
      res.status(404).json({ message: 'Destination not found' });
      return;
    }

    await destinationToUpdate.update(req.body);

    res.status(200).json(destinationToUpdate);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const destinationData = await Destination.destroy({
      where: {
        id: req.params.id,
        userId: req.session.userId,
      },
    });

    if (!destinationData) {
      res.status(404).json({ message: 'No destination found with this id!' });
      return;
    }

    res.status(200).json(destinationData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    console.log('Request Params:', req.params);
    const destinationData = await Destination.findByPk(req.params.id, {
      include: [
        {
          model: Comment,
          attributes: ['comment', 'userId'],
        },
      ],
    });

    const destination = destinationData.get({ plain: true });
    res.render('destination', {
      ...destination,
      loggedIn: req.session.logged_in,
    });
  } catch (err) {
    console.log('err', err);
    res.status(500).json(err);
  }
});

module.exports = router;
