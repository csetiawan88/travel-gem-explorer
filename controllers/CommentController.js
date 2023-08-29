const { Comment } = require('../models');


exports.getAllComments = (req, res) => {
  Comment.findAll()
    .then(commentData => res.json(commentData))
    .catch(err => {
        res.status(500).json(err);
    });
};

exports.getAllCommentsByUserId = (req, res) => {
    Comment.findAll({
        where: {
            userId: req.params.userId,
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
        destinationId: req.params.destinationId,
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


exports.createComment = (req, res) => {
  Comment.create({
    comment: req.body.comment,
    userId: req.body.userId,
    destinationId: req.body.destinationId,
  })
  .then (commentData => res.json(commentData))
  .catch (err => {
    res.status(500).json(err);
  });
}

exports.updateComment = (req, res) => {
  Comment.update({
    comment: req.body.comment,
    userId: req.body.userId,
    destinationId: req.body.destinationId,
  },
  {
    where: {
      id: req.params.id,
    }
  })
  .then (commentData => {
    if (!commentData) {
      res.status(404).json({massage: 'No Category found with this id'});
      return;
    }
    res.json(commentData);
  })
  .catch (err => {
      // console.log(err);
    res.status(500).json(err);
  }); 
};

exports.deleteComment = (req, res) => {
  Comment.destroy({
    where: {
      id: req.params.commentId,
    }
  })
  .then (commentData => {
    if (!commentData){
      res.status(404).json({massage: 'No Destiny found with this id'});
      return;
    }
    res.json(commentData);
  })
  .catch (err => {
      // console.log(err);
    res.status(500).json(err);
  });
};
