const { Destination } = require('../../models');

exports.getAllDestination = (req, res) => {
  Destination.findAll()
    .then((destinyData) => res.json(destinyData))
    .catch((err) => {
      res.status(500).json(err);
    });
};

exports.getDestinationById = (req, res) => {
  Destination.findOne({
    where: {
      id: req.params.id,
    },
  })
    .then((destinyData) => {
      if (!destinyData) {
        res.status(404).json({ message: 'No Destination found with this id' });
        return;
      }
      res.json(destinyData);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
};

exports.getDestinationByUserId = (req, res) => {
  Destination.findAll({
    where: {
      userId: req.params.userId,
    },
  })
    .then((destinyData) => {
      if (!destinyData) {
        res
          .status(404)
          .json({ message: 'No Destination found with this user id' });
        return;
      }
      res.json(destinyData);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
};

exports.createDestination = (req, res) => {
  Destination.create({
    name: req.body.name,
    location: req.body.location,
    image_source: req.body.image_url,
    description: req.body.description,
    userId: req.body.userId,
  })
    .then((destinyData) => res.json(destinyData))
    .catch((err) => {
      res.status(500).json(err);
    });
};

exports.updateDestination = (req, res) => {
  Destination.update(
    {
      name: req.body.name,
      image_source: req.body.image_url,
      description: req.body.description,
      userId: req.body.userId,
      location: req.body.location,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((destinyData) => {
      if (!destinyData) {
        res.status(404).json({ massage: 'No Category found with this id' });
        return;
      }
      res.json(destinyData);
    })
    .catch((err) => {
      // console.log(err);
      res.status(500).json(err);
    });
};

exports.deleteDestination = (req, res) => {
  Destination.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((destinyData) => {
      if (!destinyData) {
        res.status(404).json({ massage: 'No Destiny found with this id' });
        return;
      }
      res.json(destinyData);
    })
    .catch((err) => {
      // console.log(err);
      res.status(500).json(err);
    });
};
