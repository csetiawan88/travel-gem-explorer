const router = require('express').Router();
const { Destination, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

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
    const destinationId = req.params.id;

    // Fetch destination data from the database based on the ID
    const destinationData = await Destination.findByPk(destinationId);

    if (!destinationData) {
      return res.status(404).send('Destination not found');
    }

    const latestDestinations = await Destination.findAll({
      attributes: ['id', 'image_source', 'name'],
      limit: 3,
      order: [['id', 'DESC']], // Sort by id in descending order
    });

    console.log('latestDestinations:', latestDestinations);


    // Render the destination.handlebars template and pass in the data
    res.render('destination', {
      ...destinationData.dataValues,
      latestDestinations,
    });
  } catch (error) {
    console.error('Error fetching destination data:', error);
    res.status(500).send('An error occurred while fetching destination data.');
  }
});



module.exports = router;
