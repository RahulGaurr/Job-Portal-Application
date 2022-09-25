import { addApplicant } from '../service/api';

import {styled, Typography, Box, FormControl, FormGroup, InputLabel, Input, Button} from '@mui/material'
import { useState } from 'react';


const Container = styled(Box)`
    width: 100%;
    height: 600px;
`;

const Wrapper = styled(Box)`
    width:30%;
    height: 400px;
`;

const defaultValues = {
    name: '',
    email: '',
    experience:'',
    ctc: '',
    description: ''
}


const ApplyNewJob = () => {

    const [apply, setApply] = useState(defaultValues);
    
    const onValueChange = (e) => {
   
        setApply({...apply, [e.target.name]: e.target.value})
    }

    const addApplicantDetails = async () => {
      await  addApplicant(apply)
    }

  return (
   <Container>

      <Wrapper>
        <Typography style={{textAlign: 'center',fontWeight: 'bolder', background: 'red' }}>Apply for New Job</Typography>
        <FormGroup>
            <FormControl>
            <InputLabel>Name</InputLabel>
            <Input onChange={(e) =>  onValueChange(e)} name='name'  />
            </FormControl>
            <FormControl>
            <InputLabel>Email Address</InputLabel>
            <Input onChange={(e) =>  onValueChange(e)} name='email'/>
            </FormControl>
            <FormControl>
            <InputLabel>Experience (if any)</InputLabel>
            <Input onChange={(e) =>  onValueChange(e)} name='experience' />
            </FormControl>
            <FormControl>
            <InputLabel>expected CTC</InputLabel>
            <Input onChange={(e) =>  onValueChange(e)} name='ctc'/>
            </FormControl>
            <FormControl>
            <InputLabel>Description</InputLabel>
            <Input onChange={(e) =>  onValueChange(e)} name='Description'/>
          </FormControl>
          
          

         
        </FormGroup>
        <Typography style={{marginTop: 10, fontSize: '12px', fontFamily:'sans-serif' }}>Upload Your Resume</Typography>
        <Button variant="contained"
            component="label" 
>
            Upload File
            <input type="file" hidden/> 
            <br ></br>
          </Button>
          <Button variant='contained' onClick={() => addApplicantDetails()} style={{background:'red'}}>Post Job</Button>

      </Wrapper>

    
   </Container>
  )
}



export default ApplyNewJob