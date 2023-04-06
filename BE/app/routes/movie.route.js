const express = require('express');
const movie = require('../controllers/movie.controller');
const router = express.Router();

router.route('/favorite')
    .get(movie.getAllFavorite)
router.route('/')
    .get(movie.showAllPost)
    .post( movie.createNewPost);
router.route('/:slug')
    .get(movie.detailsPost)
    .delete(movie.deletePost)
router.route('/:slug/edit')
    .put(movie.updatePost)
module.exports = router;