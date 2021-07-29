const router = require("express").Router();
const User = require("../models/users");

// Update user
router.put("/:id", async (req, res) => {
  if (req.body.userId === req.params.id) {
    if (req.body.password) {
      const salt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hash(req.body.password, salt);
    }
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedUser);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(401).json("You cannot update!");
  }
});

// Delete user
router.delete("/:id", async (req, res) => {
  if (req.body.userId === req.params.id) {
    try {
      const user = await User.findById(req.params.id);
      try {
        await Post.deleteMany({ username: user.username });
        await User.findByIdAndDelete(req.params.id);

        res.status(200).json("User has been deleted");
      } catch (err) {
        res.status(500).json(err);
      }
    } catch (err) {
      res.status(400).json("user not found!");
    }
  } else {
    res.status(401).json("You cannot deleted this account!");
  }
});

// get user by id

router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
});

// get user by username

router.get("/@/:username", async (req, res) => {
  try {
    const query = { username: req.params.username };

    const user = await User.findOne(query);
    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
});

// all user for validation

router.get("/", function (req, res) {
  try {
    User.find({}, function (err, users) {
      var userMap = {};

      users.forEach(function (user) {
        userMap[user._id] = user;
      });

      res.send(userMap);
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
