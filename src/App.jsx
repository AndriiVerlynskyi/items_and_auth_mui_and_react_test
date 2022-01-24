import './App.css';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import AllRoutes from './routes/AllRoutes';

import Grid from '@mui/material/Grid';


function App() {

  return (
    <Grid container>
      <BrowserRouter>
        <NavBar/>
        <AllRoutes/>
      </BrowserRouter>
    </Grid>
  );
}

export default App;
