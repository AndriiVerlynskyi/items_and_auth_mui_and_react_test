import React, { useState } from 'react';
import axios from 'axios';
import { baseUrl } from '../../routes/routes';
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom'

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const EditPostForm = () => {

  const postId = useParams()

  const [postData, setPostData] = useState(axios(`${baseUrl}/:${postId}`));

  const {
    register,
    handleSubmit
  } = useForm()

  const onSubmit = newPostData => {
    if (newPostData.title !== postData.title){
      setPostData({title:newPostData.title, ...postData})
    }
    if (newPostData.text !== postData.text){
      setPostData({text:newPostData.text, ...postData})
    }
    console.log(postData)
    axios.put(`${baseUrl}/:${postId}`, {...postData})
  }

  return (
    <Card sx={{ width: {sm:'300px', md:'500px'}}}>
        <CardHeader title='Edit post' sx={{color:'#1976d2'}}/>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField 
              id="standard-basic" 
              label="Title" 
              variant="filled" 
              sx={{width:'100%'}}
              {...register('title')}
            />
            <TextField 
              id="standard-basic" 
              label="Text" 
              variant="filled" 
              sx={{width:'100%'}} 
              margin='normal'
              multiline
              rows={3}
              {...register('text')}
            />
            <Button color='warning' variant='contained' size='large' type='submit'>
              <Link to='/posts' style={{textDecoration:'none', color:'white'}}>
                Edit
              </Link>
            </Button>
          </form>
        </CardContent>
    </Card>
  )
}

export default EditPostForm;
