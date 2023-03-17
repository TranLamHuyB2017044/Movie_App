const express = require('express');
const movie = require('../controllers/movie.controller');
const router = express.Router();

router.route('/')
    .get(movie.showAllPost)
    .post( movie.createNewPost);
router.route('/:slug')
    .get(movie.detailsPost)
    .delete(movie.deletePost);
router.route('/signin')
    .post(movie.SignIn);
router.route('/signup')
    .post(movie.SignUp);
router.route('/:id/edit')
    .put(movie.updatePost)

module.exports = router;