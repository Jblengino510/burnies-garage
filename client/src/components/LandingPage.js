import React from 'react'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function LandingPage() {
  return (
    <>
      <Box sx={{mt: '200px', ml: '50px', height: '100vh'}}>
        <Typography variant='h2' color='secondary'><strong>Your friendly neighborhood</strong></Typography>
        <Typography variant='h2' color='secondary'><strong>mobile auto detailer.</strong></Typography>
        <br />
        <br />
        <Typography variant='h5' color='secondary'><strong>Over 3 years serving the East Bay</strong></Typography>
        <Typography variant='h5' color='secondary'><strong>and the greater Bay Area.</strong></Typography>
      </Box>
    </>
  )
}

export default LandingPage