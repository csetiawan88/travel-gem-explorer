const { Comment } = require('../models');


exports.getAllCommentsByUserId = (req, res) => {
    Comment.findAll({
        where: {
            userId: req.params.id,
        },
    })
    .then(commentData => {
        if (!commentData) {
            res.status(404).json({ message: 'No Comment found with this user id'});
            return;
        }
        res.json(commentData);
    })
    .catch(err => {
        res.status(500).json(err);
    });
};

exports.getCommentByDestinationId = (req, res) => {
    Comment.findAll({
      where: {
        destinationId: req.params.id,
      },
    })
    .then (commentData => {
      if (!commentData) {
        res.status(404).json({ message: 'No Comment found with this destination id'});
        return;
      }
      res.json(commentData);
    })
    .catch (err => {
      res.status(500).json(err);
    });
};
