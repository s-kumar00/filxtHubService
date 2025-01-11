const Post = require('../Models/post.model');
const errorHandler = require('../utils/error');

exports.createPost = async (req, res, next) => {
    try {
        const {title, description, categories, image} = req.body;
        const data = await Post.findOne({ title})
        if(data){
            next(errorHandler(201, "Post already exists"));
        } else {
            const post = new Post({title ,description, categories, images:image});
            await post.save();
            res.status(201).json({ message: "Post created successfully", success: true });
        }
    } catch (error) {
        next(errorHandler(500, error.message)); 
    }
}


exports.getPosts = async (req, res, next) => {
    try {
        const posts = await Post.find();
        res.status(200).json(posts);
    } catch (error) {
        next(errorHandler(500, error.message));
    }
}