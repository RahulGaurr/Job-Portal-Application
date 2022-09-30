import axios from 'axios';


const URL ='http://localhost:8000';

export const addNewJob = async(data) => {
    try {
        return await axios.post(`${URL}/add`,data);
        
    } catch (error) {
        console.log('Error while calling addNewJob api', error)
    }
}

export const getJobs = async () => {
    try {
    return await axios.get(`${URL}/applyview`);
    } catch (error) {
     console.log('error while calling get API', error)
    }
 } 

 export const newCandidateApply =  async(data) => {
    try {
        return await axios.post(`${URL}/applyjob`,data)
    } catch (error) {
        console.log('error while calling post API', error)
    }
 }

 export const getCandidates = async () => {
    try {
    return await axios.get(`${URL}/add`);
    } catch (error) {
     console.log('error while calling get API', error)
    }
 } 