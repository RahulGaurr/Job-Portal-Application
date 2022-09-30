import {styled,  Box, FormControl, FormGroup, InputLabel, Input, Button} from '@mui/material'
import {newCandidateApply} from '../service/api'
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Container = styled(Box)`
    width: 100%;
    height: 600px;
`;

const Wrapper = styled(Box)`
    width:20%;
    height: 400px;
    margin: auto;
    margin-top: 20px;
`;


const defaultValue = {
    name: '',
    email: '',
    experience: '',
    ctc:''
}


    const ApplyNewJob = () => {
      

      const [apply, setApply] = useState(defaultValue);
 
    
    const onValueChange = (e) => {
   
        setApply({...apply, [e.target.name]: e.target.value})
    }

    const handleApply = async () => {
      await newCandidateApply(apply)
     
    } 
    


  return (
   <Container>

      <Wrapper>
        <FormGroup>
            <FormControl>
            <InputLabel>Name</InputLabel>
            <Input onChange={(e) =>  onValueChange(e)} name='name' />
            </FormControl>
            <FormControl>
            <InputLabel>Email Address</InputLabel>
            <Input  onChange={(e) =>  onValueChange(e)} name='email'/>
            </FormControl>
            <FormControl>
            <InputLabel>Experience</InputLabel>
            <Input onChange={(e) =>  onValueChange(e)} name='experience'/>
            </FormControl>
            <FormControl>
            <InputLabel>Expected CTC</InputLabel>
            <Input onChange={(e) =>  onValueChange(e)} name='ctc' />
            </FormControl>
        </FormGroup>
        <Button component="label">
            Upload Resume
            <input type="file" hidden/> 
          </Button> <br></br> <br></br>
          
          <NavLink to='/applyview' style={{textDecoration:'none'}}>
          <Button variant='contained'onClick={() => handleApply()}>Submit</Button>
          </NavLink>
      </Wrapper>

    
   </Container>
  )
}
  
export default ApplyNewJob

