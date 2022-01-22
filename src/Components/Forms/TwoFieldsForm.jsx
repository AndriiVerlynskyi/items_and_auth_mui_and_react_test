import React from 'react';
import { useForm } from 'react-hook-form';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const TwoFieldsForm = props => {

    const {
        register,
        handleSubmit
    } = useForm()

  return (
    <Card sx={{ width: {sm:'300px', md:'500px'}}}>
        <CardHeader title='New post' sx={{color:'#1976d2'}}/>
        <CardContent>
          <form onSubmit={handleSubmit(props.onSubmit)}>
            <TextField 
              name='title'
              id="standard-basic" 
              label="Title" 
              variant="filled" 
              sx={{width:'100%'}}
              {...register( props.firstField.title , {required: props.firstField.isRequired})}
            />
            <TextField 
              name='text'
              id="standard-basic" 
              label="Text" 
              variant="filled" 
              sx={{width:'100%'}} 
              margin='normal'
              multiline
              rows={3}
              {...register( props.secondField.title , {required: props.secondField.isRequired})}
            />
            <Button 
              color='success' 
              variant='contained' 
              size='large' 
              type='submit' 
            >
              Submit
            </Button>
          </form>
        </CardContent>
    </Card>
  );
};

export default TwoFieldsForm;
