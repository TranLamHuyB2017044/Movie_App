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

module.exports = mongoose.model('Post', postSchema);