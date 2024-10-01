import express from 'express'
import { getAllUserdb, getByUserId, saveUserdb, updateUserdb } from '../controllers/User'
const router = express.Router() 


router.get('/getUser',getAllUserdb)
router.get('/getUserById',getByUserId)
router.post('/saveUser',saveUserdb)
router.put('/updateUser',updateUserdb)
export default router;