const express = require('express');
const router = express.Router();

let  forumController = require('../controllers/forumController');

router.get('/forums', forumController.getAllForum);
router.get('/forum/:forumId', forumController.getForum);
router.post('/forum', forumController.addForum);
router.put('/forum/:forumId', forumController.modifyForum);
router.delete('/forum/:forumId', forumController.removeForum);

module.exports=router;
