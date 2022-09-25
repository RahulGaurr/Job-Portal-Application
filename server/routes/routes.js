import express, {Router} from 'express'
import {addUser} from '../controller/user-controller.js'


const router = express.Router();

router.post('/applyjob', addUser)


export default router
