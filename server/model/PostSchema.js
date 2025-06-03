const mongoose = require('mongoose');
const { nanoid } =require('nanoid');

const postSchema = new mongoose.Schema({
    postId: { type: String, default: () => nanoid(8), unique: true },
    title: { type: String, default: "No title given by user" },
    description: { type: String, default: "No description given by user." },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
},
    {
        timestamps: true
    }
);
const Post = mongoose.model('Post', postSchema);
module.exports = Post;