import React from 'react'
import { Link } from 'react-router-dom'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

function NavBar() {
  return (
    <>
      <AppBar position='fixed' elevation={0} sx={{background: '#FFFFFF', width: '100vw', padding: '20px'}}>
        <Toolbar>
          <Link to='/'>
            <img src='/Jason_logo_1.jpeg' alt='Burnies Garage Logo' width='100px' height='100px' />
          </Link>
          <Box>
            <Button variant='text' color='secondary' size='large' href='/' sx={{ml: '40px', borderRadius: '0px', '&:hover': {cursor: 'pointer', borderBottom: '3px solid #96272D', background: 'none'}}}>
              <strong>Home</strong>
            </Button>
            <Button variant='text' color='secondary' size='large' href='/' sx={{ml: '20px', borderRadius: '0px', '&:hover': {cursor: 'pointer', borderBottom: '3px solid #96272D', background: 'none'}}}>
              <strong>My Work</strong>
            </Button>
            <Button variant='text' color='secondary' size='large' href='/services' sx={{ml: '20px', borderRadius: '0px', '&:hover': {cursor: 'pointer', borderBottom: '3px solid #96272D', background: 'none'}}}>
              <strong>Services</strong>
            </Button>
            <Button variant='text' color='secondary' size='large' href='/schedule' sx={{ml: '20px', borderRadius: '0px', '&:hover': {cursor: 'pointer', borderBottom: '3px solid #96272D', background: 'none'}}}>
              <strong>Book A Detail</strong>
            </Button>
          </Box>
          <Box sx={{flexGrow: 1}}></Box>
          <Button variant='contained' size='large' href='/register'>Register</Button>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default NavBar