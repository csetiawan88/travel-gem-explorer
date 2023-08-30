const { Comment, Destination, User } = require('../../models');

exports.getAllComments = (req, res) => {
    Comment.findAll({
        include: [{model: User}],
    })
    .then(commentData => res.json(commentData))
    .catch(err => {
        res.status(500).json(err);
    });
};

exports.getCommentByDestinationId = (req, res) => {
    Comment.findOne({
      where: {
        id: req.params.id,
      },
      include: [{model: Destination}],
    })
    .then (commentData => {
      if (!commentData) {
        res.status(404).json({ message: 'No Category found with this id'});
        return;
      }
      res.json(commentData);
    })
    .catch (err => {
      res.status(500).json(err);
    });
};
