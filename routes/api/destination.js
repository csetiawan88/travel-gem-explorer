const router = require('express').Router();
const {
    getAllDestination,
    getDestinationById,
    getDestinationByUserId,
    createDestination,
    updateDestination,
    deleteDestination,
} = require('../../controllers/DestinationController');


router.get('/', getAllDestination);
router.get('/:id', getDestinationById);
router.get('/userDestination/:userId', getDestinationByUserId);
router.post('/', createDestination);
router.put('/:id', updateDestination);
router.delete('/:id', deleteDestination);

module.exports = router;