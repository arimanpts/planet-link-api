const { Schema, model, Types: { ObjectId } } = require('mongoose');

const postSchema = new Schema({
    text: {
        type: String,
        required: [true, 'Text is required'],
    },
    image: {
        type: String,
        required: [true, 'Image is required'],
        match: [/^https?:\/\/.*$/, 'Invalid image format'],
    },
    likes: {
        type: Number,
        default: 0,
    },
    likedUsers: [{
        type: ObjectId,
        ref: 'User'
    }],
    comments: [{
        type: ObjectId, 
        ref: 'Comment',
    }],
    owner: {
        type: ObjectId,
        required: true,
        ref: 'User'
    },
}, {
        timestamps: true,
    });

const Post = model('Post', postSchema);

module.exports = Post;
