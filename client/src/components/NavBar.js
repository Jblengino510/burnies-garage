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
      <AppBar position='fixed' elevation={0} sx={{bgcolor: '#FFFFFF', width: '100%', padding: '20px'}}>
        <Toolbar>
          <Link to='/'>
            <img src='/burniesgarage-logo.png' alt='Burnies Garage Logo' width='100px' height='100px' />
          </Link>
          <Box>
            <Button variant='text' color='secondary' size='large' onClick={() => navigate('/')} sx={{ml: '40px', borderRadius: '0px', '&:hover': {cursor: 'pointer', borderBottom: '3px solid #96272D', background: 'none'}}}>
              <strong>Home</strong>
            </Button>
            <Button variant='text' color='secondary' size='large' onClick={() => navigate('/mywork')} sx={{ml: '20px', borderRadius: '0px', '&:hover': {cursor: 'pointer', borderBottom: '3px solid #96272D', background: 'none'}}}>
              <strong>My Work</strong>
            </Button>
            <Button variant='text' color='secondary' size='large' onClick={() => navigate('/services')} sx={{ml: '20px', borderRadius: '0px', '&:hover': {cursor: 'pointer', borderBottom: '3px solid #96272D', background: 'none'}}}>
              <strong>Services</strong>
            </Button>
            <Button variant='text' color='secondary' size='large' onClick={() => navigate('/schedule')} sx={{ml: '20px', borderRadius: '0px', '&:hover': {cursor: 'pointer', borderBottom: '3px solid #96272D', background: 'none'}}}>
              <strong>Book A Detail</strong>
            </Button>
          </Box>
          <Box sx={{flexGrow: 1}}></Box>
          { user ? 
            <Button variant='contained' size='large' onClick={handleLogoutSubmit} sx={{border: 'none', borderRadius: '40px', outline: 'none', padding: '15px', paddingLeft: '40px', paddingRight: '40px'}}>
              <strong>Logout</strong>
            </Button> 
            :
            <Button variant='contained' size='large' onClick={() => navigate('/register')} sx={{border: 'none', borderRadius: '40px', outline: 'none', padding: '15px', paddingLeft: '40px', paddingRight: '40px'}}>
              <strong>Register</strong>
            </Button> 
          }
        </Toolbar>
      </AppBar>
    </>
  )
}

export default NavBar