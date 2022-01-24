import React from 'react';
import { useNavigate } from 'react-router-dom';
import LoginExpected from '../Components/Auth/LoginExpected';

import Grid from '@mui/material/Grid'

const UnAuth = () => {


  return (
    <Grid container sx={{justifyContent: 'center', margin:'20px 0px 0px 0px'}}>
        <Grid item lg={5}>
            <LoginExpected/>
        </Grid>
    </Grid>
  );
};

export default UnAuth;
