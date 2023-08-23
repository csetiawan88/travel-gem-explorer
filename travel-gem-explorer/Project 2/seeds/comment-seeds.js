const { destinationComment } = require('../models');

const commentData = [
  {
    user_id: 1,
    map_id: 1,
    comment: "Fantastic!"
  },
  {
    user_id: 2,
    map_id: 2,
    comment: "This is great news!"
  },
  {
    user_id: 3,
    map_id: 3,
    comment: "Amazing work!"
  },
  {
    user_id: 4,
    map_id: 4,
    comment: "Keep up the good work!"
  },
]

const seedComments = () => destinationComment.bulkCreate(commentData);

module.exports = seedComments;
