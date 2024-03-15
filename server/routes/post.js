const express = require('express');
const { postController } = require('../controllers');
const postRoute = express.Router();

//get
postRoute.get('/', postController.getPosts);
postRoute.get('/:id', postController.getPost);

//put
postRoute.put('/', postController.putPost);

//post
postRoute.post('/', postController.postPost);

//delete
postRoute.delete('/:id', postController.deletePost);

module.exports = postRoute;