const router = require('express').Router();
const {
  getAllDestinations,
  getDestinationById,
  getDestinationByUserId,
  createDestination,
  updateDestination,
  deleteDestination,
} = require('../../controllers/api/destinationRoute');

router.get('/', getAllDestinations);
router.get('/:id', getDestinationById);
router.get('/userDestination/:userId', getDestinationByUserId);
router.post('/', createDestination);
router.put('/:id', updateDestination);
router.delete('/:id', deleteDestination);

module.exports = router;

