const express = require("express");
const _router = express.Router();
const Post = require("../models/Post");

_router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (error) {
    res.json({ msj: error });
  }
});

_router.post("/", async (req , res) => {

  const post = new Post({
    title: req.body.title,
    description: req.body.description
  });
  post.save().then(data=>{
    res.json(data)
  })

  // try {
  //   const savedPost = await post.save();
  //   res.status(200).json(savedPost);

  // } catch (error) {
  //   res.status(404).json({ msj: error });
  // }
});
module.exports = _router;
