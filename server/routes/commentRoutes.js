const express = require('express');
const router = express.Router();
const User = require('../model/UserSchema');
const Post = require('../model/PostSchema');
const Comment = require("../model/CommentSchema");
const authenticate = require('../middleware/authMiddleware');

router.post("/comment", authenticate, async(req, res) => {
    const { username, postId, comment } = req.body;
    try{
        const user = await User.findOne({ username });
        if(!user) {
            return res.status(404).json({ message: `User not found with username: ${user}`});
        }
        const post = await Post.findOne({ postId });
        if(!post) {
            return res.status(404).json({ message: `Post not found with Post ID: ${post}`});
        }

        const newComment = new Comment({ post:post._id, user:user._id, comment });
        await newComment.save();
        res.status(201).json({ message: "Comment added successfully."});
    }
    catch(error) {
        res.status(500).json({ message: "Server error" });
    }
});

module.exports = router;
