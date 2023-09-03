const router = require('express').Router();
const { Destination, Comment, User } = require('../../models');
const withAuth = require('../../utils/auth');
const { Op, col } = require('sequelize'); // Import Op as well if you are using it

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

// TODO: CHECK IF THIS WORKS
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const destinationData = await Destination.destroy({
      where: {
        id: req.params.id,
        userId: req.session.passport.user,
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
    const destinationId = req.params.id;

    // Fetch destination data from the database based on the ID
    const destinationData = await Destination.findByPk(destinationId);
    const commentsData = await Comment.findAll({
      attributes: ['id', 'comment', [col('user.name'), 'userName'], [col('user.id'), 'userId']],
      where: {
        destination_id: destinationId,
      },
      include: { model: User, as: 'user' },
      raw: true,
      order: [['id', 'DESC']],
    });

    if (!destinationData) {
      return res.status(404).send('Destination not found');
    }

    const currentDestinationId = destinationData.id;

    const latestDestinations = await Destination.findAll({
      attributes: ['id', 'image_source', 'name'],
      where: {
        id: {
          [Op.not]: currentDestinationId,
        },
      },
      raw: true,
      limit: 3,
      order: [['id', 'DESC']],
    });

    const updateCommentData = commentsData.map((comment) => {
      comment = {
        ...comment,
        isOwnComment: (comment?.userId === req?.session?.passport?.user),// adding up own comment boolean value for the users
      };
      return comment;
    });

    console.log('latestDestinations:', latestDestinations);

    // Render the destination.handlebars template and pass in the data
    res.render('destination', {
      ...destinationData.dataValues,
      latestDestinations,
      comments: updateCommentData,
      loggedIn: req.session.logged_in,
    });
  } catch (error) {
    console.error('Error fetching destination data:', error);
    res.status(500).send('An error occurred while fetching destination data.');
  }
});

module.exports = router;
