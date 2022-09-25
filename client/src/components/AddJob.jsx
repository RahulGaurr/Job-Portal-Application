import {styled, Typography, Box, FormControl, FormGroup, InputLabel, Input, Button} from '@mui/material'

const Container = styled(Box)`
    width: 100%;
    height: 600px;
`;

const Wrapper = styled(Box)`
    width:20%;
    height: 400px;
    
`;


const AddJob = () => {   // dashboard for job recuiter to post jobs 
  return (
   <Container>

      <Wrapper>
        <Typography style={{textAlign: 'center',fontWeight: 'bolder', background: 'red' }}>Post Job</Typography>
        <FormGroup>
            <FormControl>
            <InputLabel>Job Title</InputLabel>
            <Input />
            </FormControl>
            <FormControl>
            <InputLabel>Role</InputLabel>
            <Input />
            </FormControl>
            <FormControl>
            <InputLabel>Company Name</InputLabel>
            <Input />
            </FormControl>
            <FormControl>
            <InputLabel>Locatione</InputLabel>
            <Input />
            </FormControl>
            <FormControl>
            <InputLabel>Description</InputLabel>
            <Input />
          </FormControl>

          <Button>Post Job</Button>
          

        </FormGroup>
      </Wrapper>

    
   </Container>
  )
}

export default AddJob