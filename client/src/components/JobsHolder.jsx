import { Typography, Box, styled, Button } from '@mui/material'
import { NavLink } from 'react-router-dom';


const Container = styled(Box)`
   margin-top: 50px;
`;

const Wrapper = styled(Box)`
  width:40%;
  height: 204px;
  margin: auto;
  box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px; 
`;

const Details = styled(Box)`
    margin-left: 10px;
    padding-bottom: 5px;
   
`;


const JobsHolder = ({jobs}) => {
  

  
  return <>

    {
        jobs.map(job => <>  
        <Container>
            < Wrapper>
        <Details key={job.title} > <Typography component='span' style={{fontWeight: 'bolder'}}>Title:</Typography>  {job.title}</Details>
        <Details> <Typography component='span' style={{fontWeight: 'bolder'}}>Role:</Typography> {job.role}</Details>
        <Details> <Typography component='span' style={{fontWeight: 'bolder'}}>Company:</Typography>{job.company}</Details>
        <Details> <Typography component='span' style={{fontWeight: 'bolder'}}> Location:</Typography>  {job.location}</Details>
        <Details>  <Typography component='span' style={{fontWeight: 'bolder'}}>   Description:</Typography> {job.description}</Details>
        <NavLink to='/applyjob' style={{textDecoration:'none'}}>
        <Button variant='contained'>apply now</Button>
        </NavLink>
        </ Wrapper>
        </Container>
    
    </>)
    }
  </>
}

export default JobsHolder



// .sort((a, b) =>
//         a.title > b.title ? 1 : -1,
//       ).