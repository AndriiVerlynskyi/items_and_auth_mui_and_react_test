import React from 'react';
import LogInForm from '../Components/Forms/LogInForm';

import Grid from '@mui/material/Grid';

const LogIn = ({checkIsLoggedIn}) => {

  return (
    <Grid container sx={{justifyContent: 'center', margin:'20px 0px 0px 0px'}}>
      <Grid item lg={5}>
        <LogInForm checkIsLoggedIn={checkIsLoggedIn}/>
      </Grid>
    </Grid>
  )
};

export default LogIn;