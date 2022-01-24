import React from 'react';
import { useNavigate } from 'react-router-dom';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';


const LoginExpected = () => {
    
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/login", { replace: true })
    }

  return (
    <>
        <Card sx={{ width: {sm:'300px', md:'500px'}}}>
            <CardHeader title='Log in, please'/>
            <CardContent>
                <Button color='primary' variant='contained' onClick={handleClick}>Log In</Button>
            </CardContent>
        </Card>
    </>
  );
};

export default LoginExpected;
