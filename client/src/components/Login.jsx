import {Box, styled, Typography, FormControl, FormGroup, InputLabel, Input, Button} from '@mui/material'

const Container = styled(Box)`
    width: 100%;
    height: 600px;
    display: flex;
    justify-content: space-between;
`;
const CandidateLogin = styled(Box)`
    width: 40%;
    height: 500px;
    margin-top: 20px;
`;
const RecruiterLogin = styled(Box)`
    width: 40%;
    height: 500px;
 
    margin-top: 20px;
`;
const CandidateHeading = styled(Typography)`
    text-align: center;
`;

const RecruiterHeading = styled(Typography)`
    text-align: center;
`;

const Login = () => {
  return (
    <Container>

        <CandidateLogin>

            <CandidateHeading variant='h5'>Login Candidate</CandidateHeading>

            <FormGroup>
                <FormControl>
                    <InputLabel>Username</InputLabel>
                    <Input />
                    </FormControl>
                    <FormControl>
                    <InputLabel>Password</InputLabel>
                    <Input />
                </FormControl>
                <Button variant='contained'>Login</Button>
            </FormGroup>

        </CandidateLogin>

<hr></hr>
        <RecruiterLogin>

            <RecruiterHeading variant='h5'>Login Recruiter</RecruiterHeading>

            <FormGroup>
                <FormControl>
                    <InputLabel>Username</InputLabel>
                    <Input />
                    </FormControl>
                    <FormControl>
                    <InputLabel>Password</InputLabel>
                    <Input />
                </FormControl>
                <Button variant='contained'>Login</Button>
          </FormGroup>

        </RecruiterLogin>

    </Container>
    
  )
}

export default Login