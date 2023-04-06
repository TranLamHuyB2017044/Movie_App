const Post = require('../services/movie.service');
module.exports = class API{
    static async showAllPost(req, res){
        try {
            const posts = await Post.find();
            res.status(200).json(posts);
        } catch (error) {
            res.status(404).json({message: error.message});
        }
    }
    static async detailsPost(req, res){
        const slug = req.params.slug;
        try {
            const post = await Post.findOne({slug: slug})
            res.status(200).json(post);
        } catch (error) {
            res.status(404).json({message: error.message});
        }
        
    }
    static async createNewPost(req, res){
        const post = req.body;
        try {
            await Post.create(post);
            res.status(201).json({message: 'Post created successfully!'});
        } catch (error) {
            res.status(400).json({message: error.message});
        }
    }
    static async updatePost(req, res){
        const slug = req.params.slug;
        try {
            await Post.findOneAndUpdate({slug: slug}, req.body);
            res.status(200).json({message: 'Updated successfully'});
        } catch (error) {
            res.status(404).json({message: error.message});
        }
    }
    static async deletePost(req, res){
        const slug = req.params.slug;
        try {
            await Post.findOneAndDelete({slug: slug});
            res.status(200).json({message: 'Post deleted successfully'});
        } catch (error) {
            res.status(404).json({message: error.message});
        }
    }
    static async getAllFavorite(req, res){
        try {
            const posts = await Post.find({favorite: true});
            res.status(200).json(posts);
        } catch (error) {
            res.status(404).json({message: error.message});
        }
    }

}