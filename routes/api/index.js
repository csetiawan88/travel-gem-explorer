const router = require('express').Router();
const destinationRoutes = require('./destination');
const commentRoutes = require('./comment');
const userRoutes = require('./users');


router.use('/destination', destinationRoutes);
router.use('/comment', commentRoutes);
router.use('/user', userRoutes);

module.exports = router;
