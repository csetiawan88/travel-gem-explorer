const router = require('express').Router();
const { Destination } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/create-destination', withAuth, async (req, res) => {
  try {
    const newDestination = await Destination.create({
      ...req.body,
      userId: req.session.userId,
    });

    res.status(200).json(newDestination);
  } catch (err) {
    res.status(400).json(err);
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
      res.status(404).json({ message: 'No project found with this id!' });
      return;
    }

    res.status(200).json(destinationDataData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;