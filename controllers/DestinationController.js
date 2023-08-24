const { Destination } = require('../models');

const DestinationController = {
  getAllDestinations: async (req, res) => {
    try {
      const destinations = await Destination.findAll();
      res.render('destination-list', { destinations }); 
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  },

};

module.exports = DestinationController;
