import React from 'react';
import axios from 'axios';
import { baseUrl } from '../../routes/routes';
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const AddPostForm = () => {

  const {
    register,
    handleSubmit
  } = useForm()

  const onSubmit = postData => {
    // axios({
    //   method: 'post',
    //   url: `${baseUrl}/posts`,
    //   data: {
    //     title: postData.title,
    //     text: postData.text
    //   }
    // })
    console.log('success')
  }

  return (
    <Card sx={{ width: {sm:'300px', md:'500px'}}}>
        <CardHeader title='New post' sx={{color:'#1976d2'}}/>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField 
              id="standard-basic" 
              label="Title" 
              variant="filled" 
              sx={{width:'100%'}}
              {...register('title', {required: 'Please enter the title of the post'})}
            />
            <TextField 
              id="standard-basic" 
              label="Text" 
              variant="filled" 
              sx={{width:'100%'}} 
              margin='normal'
              multiline
              rows={3}
              {...register('text', {required: 'Please enter the text of the post'})}
            />
            <Button color='success' variant='contained' size='large' type='submit'>
              <Link to='/posts' style={{textDecoration:'none', color:'white'}}>
                Submit
              </Link>
            </Button>
          </form>
        </CardContent>
    </Card>
  );
};

export default AddPostForm;
