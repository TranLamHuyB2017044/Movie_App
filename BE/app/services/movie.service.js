const mongoose = require('mongoose');
const {Schema} =  mongoose;
var slug = require('mongoose-slug-generator');
mongoose.plugin(slug);
const postSchema = new Schema({
    name:String,
    author:String,
    description: String,
    image: String,
    videoId:String,
    slug: { type: String, slug: 'name' }

}, {
    timestamps: true,
});

const userSchema = new Schema({
    username:String,
    password:String,
})
const Post = mongoose.model('Post', postSchema);
const User = mongoose.model('User', userSchema);

module.exports = {
    Post, User
}