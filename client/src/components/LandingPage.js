import { useState } from 'react'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


function LandingPage() {
  const [ images, setImages ] = useState([
    {
    src: '/wheeldetail1.jpeg',
    alt: 'Rim Detailing Image'
  },
  {
    src: '/burniesgarage-illustration1.png',
    alt: 'Car Detailing Image'
  },
  {
    src: '/burniesgarage-illustration2.png',
    alt: 'Car Detailing Image'
  }
])
const [ index, setIndex ] = useState(0)

  function nextImage() {
    if (index !== images.length - 1) setIndex(index + 1)
  }

  function prevImage() {
    if (index > 0) setIndex(index - 1)
  }

  return (
    <>
      <Box sx={{mt: '140px', height: '100vh'}}>
        <Grid container>
          <Grid item xs={12} sx={{backgroundImage: 'url(/burniesgarage-illustration3.png)', backgroundSize: 'cover', backgroundBlendMode: 'multiply', height: '100vh'}}>
            <Box sx={{margin: '100px 50px'}}>
              <Typography variant='h2' color='secondary'>
                <strong>Your friendly neighborhood</strong>
              </Typography>
              <Typography variant='h2' color='secondary'>
                <strong>mobile auto detailer.</strong>
              </Typography>
              <br />
              <br />
              <Typography variant='h5' color='secondary'>
                <strong>Over 3 years serving the East Bay</strong>
              </Typography>
              <Typography variant='h5' color='secondary'>
                <strong>and the greater Bay Area.</strong>
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box>
        <Grid container>
          <Grid item xs={12} sx={{mt: '100px'}}>
            <Box sx={{display: 'flex', justifyContent: 'center'}}>
              <Typography variant='h3' color='secondary'>
                <strong>Work That Speaks For Itself</strong>
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
              <Box className='carousel'>
                <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '100%'}}>
                  <IconButton className='carousel-button prev' aria-label='Arrow Backwards' color='secondary' size='large' onClick={prevImage}>
                    <ArrowBackIcon fontSize='inherit'/>
                  </IconButton>
                  <IconButton className='carousel-button next' aria-label='Arrow Forward' color='secondary' size='large' onClick={nextImage}>
                    <ArrowForwardIcon fontSize='inherit'/>
                  </IconButton>
                </Box>
                <Box className='slide' data-active>
                  {images.map(image => <img src={image.src} alt={image.alt}/>)[index]}
                </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default LandingPage