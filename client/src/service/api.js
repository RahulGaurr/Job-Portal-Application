import axios from 'axios';


const URL ="http://localhost:8000";

export const addApplicant = async(data) => {
    try {
        return await axios.post(`${URL}/applyjob`, data)
    } catch (error) {
        console.log('Error while calling addAplicant api', error)
    }
}