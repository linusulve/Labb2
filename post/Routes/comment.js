const express = require('express');

const router = express.Router();
router.use(express.json());

let store = require('./data');

// Endpoints för kommentarer
router.get('/posts/:postId/comment', (req, res) => {
  res.status(200).send(store.posts[req.params.postId].comments);
});

router.post('/posts/:postId/comment', (req, res) => {
  let newComment = req.body;
  let newId = store.posts[req.params.postId].comments.length;

  store.posts[req.params.postId].comments.push(newComment);

  res.status(201).send({ id: newId });
});

router.delete('/posts/:postId/comment/:commentId', (req, res) => {
    let postId = req.params.postId;
    let commentId = req.params.commentId;

    store.posts[postId].comments.splice(commentId, 1);

    res.status(204).send();
  });

  router.post('/posts/:postId/comment', (req, res) => {
    let newComment = req.body;
    let newId = store.posts[req.params.postId].comments.length;

    store.posts[req.params.postId].comments.push(newComment);

    res.status(201).send({ id: newId });
  });

router.put('/posts/:postId/comment/:commentId', (req, res) => {
  let postId = req.params.postId;
  let commentId = req.params.commentId;

  store.posts[postId].comments[commentId] = req.body;

  res.status(200).send(store.posts[postId].comments[commentId]);
});



module.exports = router;
