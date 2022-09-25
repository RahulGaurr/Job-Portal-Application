import {Box, styled, Typography, FormControl, FormGroup, InputLabel, Input, Button} from '@mui/material'
import {NavLink} from 'react-router-dom'

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
    margin-left: 80px;
`;
const RecruiterLogin = styled(Box)`
    width: 40%;
    height: 500px;
    margin-right: 80px;
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
             {/* // candidate login code */}

            <CandidateHeading variant='h5' >Login Candidate</CandidateHeading>

            <FormGroup>
                <FormControl>
                    <InputLabel>Username</InputLabel>
                    <Input />
                    </FormControl>
                    <FormControl>
                    <InputLabel>Password</InputLabel>
                    <Input />
                </FormControl>
                    <NavLink to='/applyview'>
                    <Button variant='contained' style={{width: '100%'}}>Login</Button>
                    </NavLink>
            </FormGroup>

        </CandidateLogin>

<hr></hr>
 {/* // recruiter login code login code */}
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
                    <NavLink to='/add'>
                    <Button variant='contained' style={{width: '100%'}}>Login</Button>
                  
                    </NavLink>
          </FormGroup>

        </RecruiterLogin>

    </Container>
    
  )
}

export default Login