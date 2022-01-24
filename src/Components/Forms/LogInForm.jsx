import React, { useState, useEffect } from 'react';
import { useAuth } from '../../hooks';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


const LogInForm = ({checkIsLoggedIn}) => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();
  const auth = useAuth();

  const { 
      register,
      handleSubmit
  } = useForm();

  const onSubmit = async (loginData) => {
    const authResp = await auth(loginData);
    setIsLoggedIn(authResp)
  };

  useEffect( () => {
    if ( isLoggedIn === true ) {
      navigate("/posts", { replace: true })
    }
    checkIsLoggedIn(isLoggedIn)
  }, [isLoggedIn])

  return (
    <Card sx={{ width: {sm:'300px', md:'500px'}}}>
        <CardHeader title='Edit post' sx={{color:'#1976d2'}}/>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField 
              id="standard-basic" 
              label="Login" 
              variant="filled"
              sx={{width:'100%'}}
              value='test'
              {...register('login', { required : true })}
            />
            <TextField 
              id="standard-basic" 
              label="Password" 
              variant="filled" 
              sx={{width:'100%'}} 
              margin='normal'
              value='testPass'
              {...register('password', {required : true })}
            />
            <Button color='primary' variant='contained' size='large' type='submit'>
              Log in
            </Button>
          </form>
        </CardContent>
    </Card>
  )
};

export default LogInForm;
