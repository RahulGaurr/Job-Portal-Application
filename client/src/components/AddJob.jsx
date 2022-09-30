import {styled, Typography, Box, FormControl, FormGroup, InputLabel, Input, Button} from '@mui/material'
import {addNewJob} from '../service/api'
import { useState } from 'react';
import CandidateDetails from './CandidateDetails';
import { NavLink } from 'react-router-dom';



const Container = styled(Box)`
    
`;

const Wrapper = styled(Box)`
    width:20%;
    height: 400px;
    margin: auto;
    margin-top: 20px;
    
`;

const defaultValue = {
  title: '',
    role: '',
    company: '',
    location:'',
    description: ''
}


const AddJob = () => {   // dashboard for job recuiter to post jobs 

  const [post, setPost] = useState(defaultValue);
 
    
    const onValueChange = (e) => {
   
        setPost({...post, [e.target.name]: e.target.value})
    }

    const addJobDetails = async () => {
      await addNewJob(post)
     
    }


  return ( <>
   <Container>

      <Wrapper>
        <Typography style={{textAlign: 'center',fontWeight: 'bolder', background: 'red' }}>Post Job</Typography>
        <FormGroup>
            <FormControl>
            <InputLabel>Job Title</InputLabel>
            <Input onChange={(e) =>  onValueChange(e)} name='title' />
            </FormControl>
            <FormControl>
            <InputLabel>Role</InputLabel>
            <Input  onChange={(e) =>  onValueChange(e)} name='role'/>
            </FormControl>
            <FormControl>
            <InputLabel>Company Name</InputLabel>
            <Input onChange={(e) =>  onValueChange(e)} name='company'/>
            </FormControl>
            <FormControl>
            <InputLabel>Location</InputLabel>
            <Input onChange={(e) =>  onValueChange(e)} name='location' />
            </FormControl>
            <FormControl>
            <InputLabel>Description</InputLabel>
            <Input onChange={(e) =>  onValueChange(e)} name='description'/>
          </FormControl> <br></br>
          
          <NavLink to='/applyview' style={{textDecoration:'none'}}>
          <Button variant='contained' onClick={() => addJobDetails()}>Post Job</Button>
          
          </NavLink>
        </FormGroup>
      </Wrapper>
    

      

      <CandidateDetails />
   </Container>
   
   
   
  
    </>)
}

export default AddJob;





