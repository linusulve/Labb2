const express = require('express');
const router = express.Router();

const commentsRoutes = require ('./comment');
const postsRoutes = require ('./posts');


router.use(postsRoutes);
router.use(commentsRoutes);

module.exports = router;
