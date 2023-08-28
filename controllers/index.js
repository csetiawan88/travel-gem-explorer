const router = require('express').Router();

const apiRoutes = require('./userRoute');
const homeRoutes = require('./DestinationController');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;
