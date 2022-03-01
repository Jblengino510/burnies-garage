import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setUser } from '../Redux/Slices/userSlice'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

function NavBar() {
  const user = useSelector(state => state.user.entities)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  function handleLogoutSubmit() {
    if (window.confirm('Are you sure you want to logout?')) {
      fetch('/logout', {
        method: 'DELETE'
      })
      .then(res => {
        if (res.ok) {
          dispatch(setUser(false))
          navigate('/')
        }
      })
    }
  }


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
            <Button variant='text' color='secondary' size='large' href='/mywork' sx={{ml: '20px', borderRadius: '0px', '&:hover': {cursor: 'pointer', borderBottom: '3px solid #96272D', background: 'none'}}}>
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
          { user ? 
            <Button variant='contained' size='large' onClick={handleLogoutSubmit} sx={{borderRadius: '30px', padding: '10px', width: '120px'}}>
              Logout
            </Button> 
            :
            <Button variant='contained' size='large' href='/register' sx={{borderRadius: '30px', padding: '10px', width: '120px'}}>
              Register
            </Button> 
          }
        </Toolbar>
      </AppBar>
    </>
  )
}

export default NavBar