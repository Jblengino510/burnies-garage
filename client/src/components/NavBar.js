import React from 'react'
import { Link } from 'react-router-dom'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

function NavBar() {
  return (
    <>
      <AppBar position='fixed' sx={{backgroundColor: 'white', width: '100%', padding: '10px'}}>
        <Toolbar>
          <Link to='/'>
            <img src='/Jason_logo_1.jpeg' alt='Burnies Garage Logo' width='100px' height='100px' />
          </Link>
          <Box>
            <Button variant='text' color='secondary' size='large' href='/' sx={{ml: '20px'}}><strong>Home</strong></Button>
            <Button variant='text' color='secondary' size='large' href='/' sx={{ml: '20px'}}><strong>My Work</strong></Button>
            <Button variant='text' color='secondary' size='large' href='/services' sx={{ml: '20px'}}><strong>Services</strong></Button>
            <Button variant='text' color='secondary' size='large' href='/schedule' sx={{ml: '20px'}}><strong>Book A Detail</strong></Button>
          </Box>
          <Box sx={{flexGrow: 1}}></Box>
          <Button variant='contained' size='large' href='/register'>Register</Button>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default NavBar