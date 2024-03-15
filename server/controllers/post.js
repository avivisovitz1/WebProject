const { Post } = require('../models');

const getPosts = async (req, res) => {
    try {
        const posts = await Post.find();
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const getPost = async (req, res) => {
    try {
        const { id } = req.params;
        const post = await Post.findById(id);
        res.status(200).json(post);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

const postPost = async (req, res) => {
    const post = req.body;

    try {
        const createdPost = await Post.create(post);
        res.status(201).json(createdPost);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const putPost = async (req, res) => {
    const post = req.body;
    try {
        const updatedPost = await Post.findByIdAndUpdate(
            post._id,
            post,
            { new: true }
        );
        res.status(201).json(updatedPost);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const deletePost = async (req, res) => {
    try {
        const { id } = req.params;
        await Post.findByIdAndDelete(id);
        res.status(200).send('Post deleted');
    } catch (error) {
        res.status(500).send(error.message);
    }

};

module.exports = { getPosts, getPost, postPost, putPost, deletePost };