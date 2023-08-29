const router = require('express').Router();
const userRoutes = require('./userRoute');
const destinationRoutes = require('./destinationRoute');

router.use('/users', userRoutes);
router.use('/destinations', destinationRoutes);

module.exports = router;
