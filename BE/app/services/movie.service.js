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
    Time:String,
    slug: { type: String, slug: 'name' },
    favorite: {type: Boolean, default: false}

}, {
    timestamps: true,
});


const Post = mongoose.model('Post', postSchema);


module.exports = Post
