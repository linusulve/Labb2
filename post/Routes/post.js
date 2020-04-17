const express = require('express');

const router = express.Router();
router.use(express.json());

let store = require('./data');


router.get('/posts', (req, res) => {
  res.status(200).send(store.posts);
});

router.post('/posts', (req, res) => {
  let newPost = req.body;
  let newId = store.posts.length;

  store.posts.push(newPost);

  res.status(201).send({ id: newId });
});

router.delete('/posts/:postId', (req, res) => {
    store.posts.splice(req.params.postId, 1);

    res.status(204).send();
  });

router.put('/posts/:postId', (req, res) => {
  store.posts[req.params.postId] = req.body;

  res.status(200).send(store.posts[req.params.id]);
});



module.exports = router;
