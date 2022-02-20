import React from 'react'
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';


function Footer() {
  return (
    <footer style={{width: '100vw', height: '30vh'}}>
        <Grid container direction='column' justifyContent='center' alignItems="center">
            <Grid item xs={12}>
                <img src='/Jason_logo_1.jpeg' alt='Burnies Garage Logo' width='50px' height='50px' />
            </Grid>
            <Grid item xs={12}>
                <Typography variant='h6' color='secondary'><strong>San Leandro, CA</strong></Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant='h6' color='secondary'><strong>(510) 613-3947</strong></Typography>
            </Grid>
            <Grid item xs={12} sx={{display: 'flex', alignItems: 'center'}}>
                <img src='/mail-ios.svg' alt='Email icon' width='40px' height='40px'/>
                <img src='/instagram.svg' alt='Instagram icon' width='40px' height='40px' style={{marginLeft: '5px'}}/>
                <img src='/snapchat_logo.jpg' alt='Snapchat icon' width='55px'/>
            </Grid>
        </Grid>
    </footer>
  )
}

export default Footer