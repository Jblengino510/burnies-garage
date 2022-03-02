import '../App.css';
import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import NavBar from './NavBar';
import LandingPage from './LandingPage';
import Footer from './Footer';
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'
import { fetchLoggedInUser } from '../Redux/Slices/userSlice'


const theme = createTheme({
  palette: {
    primary: {
      main: '#96272D'
    },
    secondary: {
      main: '#00405C'
    }
  },
  typography: {
    fontFamily: 'Inter (Bold)'
  }
})


function App() {
  const dispatch = useDispatch()
  const user = useSelector(state => state.user.entities)
  

  useEffect(() => {
    dispatch(fetchLoggedInUser())
  }, [dispatch])


  return (
    <ThemeProvider theme={theme}>
        <NavBar />
        <Routes>
          <Route path='/register' element={<RegisterForm />} />
          <Route path='/login' element={<LoginForm />} />
          <Route path='/' element={<LandingPage />} />
        </Routes>
        <Footer />
    </ThemeProvider>
  );
}

export default App;
