import express from 'express'
import {addJob,getJobs, applyCandidate, getCandidates } from '../controller/job-controller.js';


const router = express.Router();

router.post('/add', addJob)
router.get('/applyview', getJobs)
router.post('/applyjob', applyCandidate)
router.get('/add',getCandidates)


export default router
