import {AppBar, Toolbar, styled} from '@mui/material';
import { NavLink } from 'react-router-dom';

const Header = styled(AppBar)`
    background: #111111;
`
const Logo = styled(NavLink)`
    font-size: 20px;
    margin-right: 20px;
    text-decoration: none;
    color: inherit;
    
`

const Navbar = () => {
  return (
   <Header position='static'>
    <Toolbar>
        <Logo to='apply'>Job Portal</Logo>
        <Logo to='/' style={{marginLeft: '80%'}}>Login</Logo>
    </Toolbar>
   </Header>
  )
}

export default Navbar