const express = require('express');
const router = express.Router();

let  themeController = require('../controllers/themeController');

router.get('/themes', themeController.getAllThemes);
router.get('/themes/:themeId', themeController.getTheme);
router.post('/themes', themeController.addTheme);
router.put('/themes/:themeId', themeController.modifyTheme);
router.delete('/themes/:themeId', themeController.removeTheme);
router.get('/themes/:forumId',themeController.getThemesByForumId)
router.get('/theme/:userId',themeController.getThemeByModerateur);

module.exports=router;