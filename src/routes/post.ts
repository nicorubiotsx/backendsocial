import express from 'express'
import { getPostdb,getPostId,savePostdb,updatePostdb } from '../controllers/Post'
const routerpost = express.Router() 


routerpost.get('/getPost',getPostdb)
routerpost.get('/getPostById',getPostId)
routerpost.post('/savePost',savePostdb)
routerpost.put('/updatePost',updatePostdb)
export default routerpost;