import {styled, Box} from '@mui/material'
import {getJobs} from '../service/api';
import { useEffect, useState } from 'react';
import JobsHolder from './JobsHolder';

const Container = styled(Box)`
   width: 100%;
   background: #ffffff;
`;


const ApplyView = () => {  // dashboard for candidate for view and apply job
  const [jobs, setJobs] = useState([]);
   
    useEffect(() => {
        getAllJobs()
    },[]);

    const getAllJobs = async () => {
        let response = await getJobs()
        setJobs(response.data)
    }

       
  
    return (
      <Container>
       
            <JobsHolder jobs = {jobs} />

        
      </Container>
        
    )
}
  


export default ApplyView

// sort
// const [value, setValue] = useState('');
    
// const setList = (e) => {
  
//     jobs.sort((a, b) =>
//         a.title > b.title ? 1 : -1)
 
//         setValue(e.target.value);     
// }


 
// {/* <div>
// <Typography>Sort By</Typography>
//  <select value={value} onChange={setList}>
//      <option>Select</option>
//      <option>Sort by title</option>

//  </select>
// </div>  */}