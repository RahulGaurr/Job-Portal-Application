import job from '../schema/addJob-schema.js'
import apply from '../schema/applyJob-schema.js';



export const addJob = async (request, response) => {

    const jobs = request.body;

    const newJob = new job(jobs)

    try {
        await newJob.save()
        response.status(201).json(newJob)
    } catch (error) {
        response.status(409).json({message: error.message})
    }
   
}

export const getJobs = async (request, response) => {
    try {
        const jobs = await job.find({})   //in empty array of Users.find we can mention our conditions that what you what from the data in key value format, but in our case we need all data so left it empty.
        response.status(200).json(jobs)
    } catch (error) {
        response.status(404).json({message: error.message})
    }
}


export const applyCandidate = async (request, response) => {

    const jobs = request.body;

    const newJob = new apply(jobs)

    try {
        await newJob.save()
        response.status(201).json(newJob)
    } catch (error) {
        response.status(409).json({message: error.message})
    }
   
}

export const getCandidates = async (request, response) => {
    try {
        const jobs = await apply.find({})   //in empty array of Users.find we can mention our conditions that what you what from the data in key value format, but in our case we need all data so left it empty.
        response.status(200).json(jobs)
    } catch (error) {
        response.status(404).json({message: error.message})
    }
}
