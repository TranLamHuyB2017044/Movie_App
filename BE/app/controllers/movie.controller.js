const {Post, User} = require('../services/movie.service');

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
        const formData = req.body;
        formData.image = `https://i.ytimg.com/vi/${req.body.videoId}/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFTyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCN-p51NBQHBICMaXtlW6-2-F5h5Q`
        try {
            await Post.create(formData);
            res.status(201).json({message: 'Post created successfully!'});
        } catch (error) {
            res.status(400).json({message: error.message});
        }
    }
    static async updatePost(req, res){
        try {
            await Post.findOneAndUpdate({slug: req.params.slug}, req.body);
            res.status(200).json({message: 'Updated successfully'});
        } catch (error) {
            res.status(404).json({message: error.message});
        }
    }
    static async deletePost(req, res){
        const slug = req.params.slug;
        try {
            const post = await Post.findOneAndDelete({slug: slug});
            res.status(200).json({message: 'Post deleted successfully'});
        } catch (error) {
            res.status(404).json({message: error.message});
        }
    }
    static async SignUp(req, res){
        var username = req.body.username;
        var password = req.body.password;
        User.findOne({username: username})
        .then(data =>{
            if(data){
                res.json('Ten tai khoan da ton tai')
            }else{
                User.create({
                    username: username,
                    password: password
                })
                try {
                    res.json('tao tai khoan thanh cong')
                } catch (error) {
                    res.status(404).json({message: error.message});
                }
            }
        })
        .catch(error => {
            request.json('tao tai khoan that bai');
        })
    }
    static async SignIn(req, res){
        var username = req.body.username;
        var password = req.body.password;
        User.findOne({
            username: username, 
            password: password
        })
        .then(data =>{
            if(data){
                res.json('dang nhap thanh cong')
            }
            else{
                res.status(403).json('sai ten tai khoan hoac mat khau');
            }
        })
        .catch(error => {
            res.status(505).json('dang nhap that bai do co loi ben server');
        })
    }
}