const router = require('express').Router();
const {
    getAllComments,
    getAllCommentsByUserId,
    getCommentByDestinationId,
    createComment,
    updateComment,
    deleteComment
} = require('../../controllers/CommentController');


router.get('/', getAllComments);
router.get('/userComment/:userId', getAllCommentsByUserId);
router.get('/destinationCommnt/:destinationId', getCommentByDestinationId);
router.post('/', createComment);
router.put('/:id', updateComment);
router.delete('/:commentId', deleteComment);

module.exports = router;