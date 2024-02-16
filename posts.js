const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

router.get('/', async (req, res) => {
    try {
      const posts = await Post.find();
      res.json(posts);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

  outer.post('/create', async (req, res) => {
    const post = new Post({
      title: req.body.title,
      body: req.body.body,
    });
  
    try {
      const newPost = await post.save();
      res.status(201).json(newPost);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });

  router.put('/id/:_id', async (req, res) => {
    try {
      const updatedPost = await Post.findByIdAndUpdate(req.params._id, req.body, { new: true });
      res.json(updatedPost);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });

  router.delete('/id/:_id', async (req, res) => {
    try {
      await Post.findByIdAndDelete(req.params._id);
      res.json({ message: 'Post deleted' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

module.exports = router;