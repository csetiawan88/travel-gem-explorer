const router = require('express').Router();
const { Comment } = require('../../models');


router.get('/', (req, res) => {
    Comment.findAll()
      .then(commentData => res.json(commentData))
      .catch(err => {
          res.status(500).json(err);
    });
});

router.get('/destinationComment/:destinationId', (req, res) => {
    Comment.findAll({
        where: {
            destinationId: req.params.destinationId,
        },
    })
    .then(commentData => {
        if (!commentData) {
            res.status(404).json({ message: 'No Comment found with this destination id'});
            return;
        }
        res.json(commentData);
    })
    .catch(err => {
        res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
    Comment.create({
      comment: req.body.comment,
      userId: req?.session?.passport?.user,
      destinationId: req.body.destinationId,
    })
    .then (commentData => res.json(commentData))
    .catch (err => {
      res.status(500).json(err);
    });
});

// Delete comments API
router.delete('/:id', async (req, res) => {
    try {
      const destinationData = await Comment.destroy({
        where: {
          id: req.params.id,
          userId: req.session.passport.user,
        },
      });
      console.log(destinationData);
      if (!destinationData) {
        res.status(404).json({ message: 'No destination found with this id!' });
        return;
      }
  
      res.status(200).json(destinationData);
    } catch (err) {
      res.status(500).json(err);
    }
  });  

module.exports = router;
