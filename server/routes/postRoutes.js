const express = require('express');
const router = express.Router();
const Post = require("../model/PostSchema");
const User = require('../model/UserSchema');

router.post('/createpost', async (req, res) => {
    const { username, title, description } = req.body;
    try {
        const user = await User.findOne({ username });
        if(!user) {
            return res.status(404).json({ message: "User doesnot exists create account first."})
        }

        const newPost = new Post({ title, description , author: user._id });
        await newPost.save();

        res.status(401).json({ message: 'Post created successfully'});
    }
    catch(error) {
        res.status(500).json({ message: `error found: ${error.message}`});
    }
});

module.exports = router;