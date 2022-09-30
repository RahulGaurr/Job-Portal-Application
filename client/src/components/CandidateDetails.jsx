import {styled, Box, Typography, Table, TableHead, TableBody, TableRow, TableCell} from '@mui/material'
import { getCandidates } from '../service/api';
import { useEffect, useState } from 'react';


const StyledTable = styled(Table)`
      background: #36454F;
`;

const THead = styled(TableRow)`
    background: black;
    
    & > th  {
        color: #fff;
        font-size: 20px;
    }
`;

const TBody = styled(TableRow)`
    & > td  {
        font-size: 15px;
        color: #fff; 
    }
`


const CandidateDetails = () => {
    const [details, setDetails] = useState([]);
   
   
    useEffect(() => {
        handleDetails()
    },[]);
    console.log(details)

    const handleDetails = async () => {
        let response = await getCandidates()
        setDetails(response.data)
    }
    console.log(details)
  
    return <>
     
       <Box>
       <Typography variant='h6' style={{textAlign: 'center', fontWeight: 'bolder', color: '#fff', background: 'black'}}>Applicant Details</Typography>
       <StyledTable>
            <TableHead>
                <THead>
                    <TableCell>Name</TableCell>
                    <TableCell>email</TableCell>
                    <TableCell >experience</TableCell>
                    <TableCell>CTC</TableCell>

                </THead>
            </TableHead>
           
            
            <TableBody>
        {
           
            details.map(detail => <>
            
             <TBody>
                
               
                <TableCell>{detail.name}</TableCell>
                <TableCell>{detail.email}</TableCell>
                <TableCell>{detail.experience}</TableCell>
                <TableCell>{detail.ctc}</TableCell>
                </TBody>
                
                </>)
               
        }
        </TableBody>
       
        </StyledTable>
       </Box>
      

        
        
     
        
      </>
}


export default CandidateDetails