const express = require('express');
const movie = require('../controllers/movie.controller');


const router = express.Router();

router.route('/')
    .get(movie.showAllPost)
    .post(movie.createNewPost);
router.route('/:id')
    .get(movie.detailsPost)
    .put(movie.updatePost)
    .delete(movie.deletePost);
router.route('/signin')
    .post(movie.SignIn);
router.route('/signup')
    .post(movie.SignUp);

module.exports = router;