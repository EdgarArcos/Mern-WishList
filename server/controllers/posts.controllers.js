import Post from "../models/Post.js";

export const getPosts = async (req,res) => {
    const posts = await Post.find()
    res.send([posts])
}
export const createPosts = async (req,res) => {
    const {title , description} = req.body

    const newPost = new Post ({title, description})
    await newPost.save()

    return res.json(newPost)
}

export const updatingPosts = (req,res) => res.send('Updatin a post')

export const deletingPosts = (req,res) => res.send('deleting a post')

export const getPostId = (req,res) => res.send('getting a post')