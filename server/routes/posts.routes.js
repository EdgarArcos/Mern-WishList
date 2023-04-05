import { Router } from 'express';
import { getPosts,createPosts,updatingPosts,deletingPosts,getPostId } from "../controllers/posts.controllers.js";
const router = Router()

router.get('/posts', getPosts)
router.post('/posts', createPosts )
router.put('/posts', updatingPosts)
router.delete('/posts', deletingPosts)
router.get('/posts/:id', getPostId )
export default router