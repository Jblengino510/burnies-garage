import React from 'react'
import { useNavigate } from "react-router-dom";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';

function RegisterForm() {
    const navigate = useNavigate()


  return (
    <Box sx={{height: '100vh', display: 'flex', justifyContent: 'center'}}>
      <Grid container justifyContent='center' alignItems="center">
        <Grid item xs={5} sx={{display: 'flex', justifyContent: 'center'}}>
          <img src='/Jason_logo_1.jpeg' width='400px'/>
        </Grid>
        <Divider orientation='vertical' sx={{height: '200px'}}/>
        <Grid item xs={5} sx={{backgroundColor: ''}}>
          <form style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <Typography variant='h4' color='secondary'>Create Account</Typography>
            <br />
            <br />
            <TextField label='Email' variant='outlined' color='secondary' sx={{width: '50%'}}/>
            <br />
            <TextField label='Password' variant='outlined' color='secondary' sx={{width: '50%'}}/>
            <br />
            <TextField label='Confirm Password' variant='outlined' color='secondary' sx={{width: '50%'}}/>
            <br />
            <br />
            <Button variant='contained' size='large' sx={{borderRadius: '20px', width: '50%'}}>Submit</Button>
          </form>
          <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', mt: '20px'}}>
            <Typography variant='body1' color='secondary'>
              Returning Customer?
            </Typography>
            <Typography variant='body1' color='secondary' onClick={() => navigate('/login')} sx={{'&:hover': {cursor: 'pointer'}}}>
              <strong>&nbsp;Login</strong>
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default RegisterForm