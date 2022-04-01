import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { setUser } from '../Redux/Slices/userSlice'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';

function LoginForm() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ errors, setErrors ] = useState([])

  function handleLoginSubmit(e) {
    e.preventDefault()

    const userObj = {
      email: email,
      password: password
    }

    fetch('/login', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(userObj)
    })
    .then(res => {
      if (res.ok) {
        res.json().then(user => dispatch(setUser((user)))).then(() => navigate('/'))
      } else {
        res.json().then(err => setErrors(err.errors))
      }
    })

  }


  return (
    <Box sx={{mt: '100px', height: '100vh', display: 'flex', justifyContent: 'center'}}>
      <Grid container justifyContent='center' alignItems="center">
        <Grid item xs={5} sx={{display: 'flex', justifyContent: 'center'}}>
          <img src='/burniesgarage-logo.png' width='400px'/>
        </Grid>
        <Divider orientation='vertical' sx={{height: '200px'}}/>
        <Grid item xs={5} sx={{backgroundColor: ''}}>
          <form onSubmit={handleLoginSubmit} style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <Typography variant='h4' color='secondary'>Welcome Back</Typography>
            <br />
            <br />
            <TextField label='Email' variant='outlined' color='secondary' sx={{width: '50%'}} onChange={(e) => setEmail(e.target.value)}/>
            <br />
            <TextField type='password' label='Password' variant='outlined' color='secondary' sx={{width: '50%'}} onChange={(e) => setPassword(e.target.value)}/>
            <br />
            <br />
            <Button type='submit' variant='contained' size='large' sx={{borderRadius: '30px', width: '50%'}}>
              <strong>Login</strong>
            </Button>
          </form>
          <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', mt: '20px'}}>
            <Typography variant='body1' color='secondary' >
              New Customer?
            </Typography>
            <Typography variant='body1' color='secondary' onClick={() => navigate('/register')} sx={{'&:hover': {cursor: 'pointer'}}}>
              <strong>&nbsp;Register</strong>
            </Typography>
          </Box>
            {(errors.length > 0) ? 
              <Box sx={{mt: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                {errors.map(error => 
                <Typography key={error} color='error'>{error}</Typography>
                )}
              </Box> 
              : 
              null
              }
        </Grid>
      </Grid>
    </Box>
  )
}

export default LoginForm