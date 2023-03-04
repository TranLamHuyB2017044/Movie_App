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
    static async createNewPost(req, res){
        const formData = req.body;
        formData.image = `https://i.ytimg.com/vi/${req.body.videoId}/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFTyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCN-p51NBQHBICMaXtlW6-2-F5h5Q`
        try {
            const post = await Post.create(formData);
            res.status(201).json({message: 'Post created successfully!'});
        } catch (error) {
            res.status(400).json({message: error.message});
        }
    }
    static async detailsPost(req, res, next){
        const slug = req.params.slug;
        try {
            const post = await Post.findOne({slug: req.params.slug})
            res.status(200).json(post);
        } catch (error) {
            res.status(404).json({message: error.message});
        }

    }
    static async updatePost(req, res){
        try {
            const post = await Post.findOneAndUpdate({_id: req.params.id}, req.body);
            res.status(200).json({message: 'Updated successfully'});
        } catch (error) {
            res.status(404).json({message: error.message});
        }
    }
    static async deletePost(req, res){
        const slug = req.params.slug;
        try {
            const post = await Post.findOneAndDelete({slug: req.params.slug});
            res.status(200).json({message: 'Post deleted successfully'});
        } catch (error) {
            res.status(404).json({message: error.message});
        }
    }
    static async SignIn(req, res){
        res.send("Sign in from api");
    }
    static async SignUp(req, res){
        res.send("Sign up from api");
    }
}