import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';

import Logo from '../assets/images/Logo.png';

const Navbar = () => (
  <Stack 
    direction="row" 
    justifyContent="space-around" 
    sx={{ 
      gap: { sm: '123px', xs: '40px' }, 
      mt: { sm: '32px', xs: '20px' }, 
      justifyContent: 'none' 
    }} 
    px="20px"
  >
    <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
      <img src={Logo} alt="logo" style={{ width: '200px', height: '200px', margin: '0px 20px' }} />
    </Link>
    <Stack
      direction="row"
      gap="40px"
      fontFamily="Alegreya"
      fontSize="24px"
      alignItems="center"
      alignSelf="center"
    >
      <Link to="/" style={{ 
        textDecoration: 'none', 
        color: '#3A1212', 
        borderBottom: '3px solid #000080',
        paddingBottom: '5px'
      }}>
        Home
      </Link>
      <a href="#exercises" style={{ 
        textDecoration: 'none', 
        color: '#3A1212',
        paddingBottom: '5px'
      }}>
        Exercises
      </a>
    </Stack>
  </Stack>
);

export default Navbar;
