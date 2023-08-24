const { Destination } = require('../../models');

exports.getDestination = (req, res) => {
    Destination.findAll()
    .then(destinyData => res.json(destinyData))
    .catch(err => {
        res.status(500).json(err);
    });
};

exports.getDestinationById = (req, res) => {
    Destination.findOne({
      where: {
        id: req.params.id,
      },
    })
    .then (destinyData => {
      if (! destinyData) {
        res.status(404).json({ message: 'No Category found with this id'});
        return;
      }
      res.json(destinyData);
    })
    .catch (err => {
      res.status(500).json(err);
    });
};
