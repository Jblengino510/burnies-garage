
import '../App.css';
import { useState, useEffect } from 'react'
import { Switch, Route, useHistory } from 'react-router-dom'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import NavBar from './NavBar';
import LandingPage from './LandingPage';


function App() {
  return (
    <ThemeProvider>
      <div>
        <NavBar />
        <Switch>
          <Route path='/'>
            <LandingPage />
          </Route>
        </Switch>
      </div>
    </ThemeProvider>
  );
}

export default App;
