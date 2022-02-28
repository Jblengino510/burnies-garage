
import '../App.css';
import { useState, useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import NavBar from './NavBar';
import LandingPage from './LandingPage';
import Footer from './Footer';
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'


const theme = createTheme({
  palette: {
    primary: {
      main: '#96272D'
    },
    secondary: {
      main: '#00405C'
    }
  }
})


function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <NavBar />
        <Routes>
          <Route path='/register' element={<RegisterForm />} />
          <Route path='/login' element={<LoginForm />} />
          <Route path='/' element={<LandingPage />} />
        </Routes>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
