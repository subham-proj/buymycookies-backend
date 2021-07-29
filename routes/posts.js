const router = require("express").Router();
const User = require("../models/users");
const Post = require("../models/posts");

// create post
router.post("/", async (req, res) => {
  const newPost = new Post(req.body);
  try {
    const savePost = await newPost.save();
    res.status(200).json(savePost);
  } catch (err) {
    res.status(500).json(err);
  }
});

// update post
router.put("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (post.username === req.body.username) {
      try {
        const updatedPost = await Post.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatedPost);
      } catch (err) {
        res.status(401).json("You cannot edit this");
      }
    } else {
      res.status(401).json("You cannot edit this");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// An exclusive feature for all to update the current bid

// update post
router.put("/newBid/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    try {
      const updatedPost = await Post.findByIdAndUpdate(
        req.params.id,
        {
          $set: { current_bid: req.body.current_bid },
          $inc: { no_of_bids: 1 },
        },
        { new: true }
      );
      res.status(200).json(updatedPost);
    } catch (err) {
      res.status(401).json("You cannot edit this");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// delete post
router.delete("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (post.username === req.body.username) {
      try {
        await post.delete();
        res.status(200).json("post has been deleted");
      } catch (err) {
        res.status(401).json(err);
      }
    } else {
      res.status(401).json("You cannot delete this");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// get post
router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
});

// get all post
router.get("/", async (req, res) => {
  const username = req.query.user;
  try {
    let posts;
    if (username) {
      posts = await Post.find({ username: username });
    } else {
      posts = await Post.find();
    }

    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
