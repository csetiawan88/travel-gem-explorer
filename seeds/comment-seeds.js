// Comments
const { Comment } = require('../models');

const commentData = [
  {
    userId: 1,
    destinationId: 1,
    comment: 'Fantastic!',
  },
  {
    userId: 2,
    destinationId: 2,
    comment: 'This is great news!',
  },
  {
    userId: 3,
    destinationId: 3,
    comment: 'Amazing work!',
  },
  {
    userId: 4,
    destinationId: 4,
    comment: 'Keep up the good work!',
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
