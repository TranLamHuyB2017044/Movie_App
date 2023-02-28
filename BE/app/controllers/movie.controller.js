module.exports = class API{
    static async createNewPost(req, res){
        res.send("Create a new post from api");
    }
    static async showAllPost(req, res){
        res.send("Show all post from api");
    }
    static async detailsPost(req, res){;
        res.send("Details post from api")
    }
    static async updatePost(req, res){
        res.send("update a post from api");
    }
    static async deletePost(req, res){
        res.send("Delete post from api");
    }
    static async SignIn(req, res){
        res.send("Sign in from api");
    }
    static async SignUp(req, res){
        res.send("Sign up from api");
    }
}