const router = require('express').Router();
const userRoutes = require('./userRoute');
const destinationRoutes = require('./destinationRoute');
const commentRoutes = require('./commentRoute');

router.use('/users', userRoutes);
router.use('/destinations', destinationRoutes);
router.use('/comments', commentRoutes);

module.exports = router;
