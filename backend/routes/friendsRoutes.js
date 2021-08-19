import express from 'express'
const router = express.Router()

import { getFriends, postFriend, deleteFriend, updateFriend } from '../controllers/friendsController.js'

router.get('/', getFriends)
router.post('/', postFriend)
router.delete('/:id', deleteFriend)
router.put('/:id', updateFriend)

export default router