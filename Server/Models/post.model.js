const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please enter a title"],
        trim: true,
    },
    description: {
        type: String,
        required: [true, "Please enter a description"],
        trim: true,
    },
    images: {
        type: String,
        default:"",
    },
    categories: {
        type: String,
        required: [true, "Please enter a category"],
    },
},{timestamps: true});

module.exports = mongoose.model("Post_Blog", postSchema);