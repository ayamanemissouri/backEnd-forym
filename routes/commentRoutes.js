
 let commentController = require('../controllers/commentsController');

 let express = require('express');

 let router = express.Router();


 router.get('/comments/post/:postId', commentController.getCommentsByPost);//
 router.get('/comments', commentController.getAllComment);//
 router.post('/comment',commentController.addComment);//
 router.put('/comments/:commentId',commentController.modifyComment);//
 router.get('/comments/:userId',commentController.getCommentsByUser);//
 router.delete('/comments/:commentId',commentController.removeComment);
 router.get('/comment/:commentId',commentController.getComment);//


 module.exports = router;
 