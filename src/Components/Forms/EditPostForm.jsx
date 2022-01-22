import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { baseUrl } from '../../routes/routes';
import { useForm, useFormState } from 'react-hook-form';
import { useParams, useNavigate } from 'react-router-dom'

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';



const EditPostForm = () => {

  const navigate = useNavigate();

  const { id: postId } = useParams();

  console.log(postId);

  const [postData, setPostData] = useState('');

  useEffect( () => {
    if(!postData){
      axios(`${baseUrl}/posts/${postId}`).then( resp => setPostData( resp.data ))
    }
  }, []);

  const {
    register,
    handleSubmit, 
    control
  } = useForm({
    defaultValues: {
      title: postData.title,
      text: postData.text
    }
  })

  const { dirtyFields } = useFormState({control});

  const dirtyFieldsHandler = (newPostData) => {
    const postToSave = {}

    dirtyFields.title ? postToSave.title = newPostData.title : postToSave.title = postData.title

    dirtyFields.text ? postToSave.text = newPostData.text : postToSave.text = postData.text

    return postToSave
  };

  const onSubmit = async (newPostData) => {
    const postToSave = dirtyFieldsHandler(newPostData);

    console.log(`${baseUrl}/posts/${postId}`);

    console.log(postToSave);

    await axios.put(`${baseUrl}/posts/${postId}`, postToSave);
    navigate("/posts", { replace: true })
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
              Edit
            </Button>
          </form>
        </CardContent>
    </Card>
  )
}

export default EditPostForm;
