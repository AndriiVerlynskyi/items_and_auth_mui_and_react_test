import React from 'react';
import Post from './Post';

import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';

const PostList = props => {

  return (
    <Grid container 
    spacing={2} 
    sx={{
        margin: '10px 15px',
        height: 'auto'
    }}
    >
        {props.posts.map( post => {
            return (
                <Grid item key={post.title} xs={12} md={5.5} lg={3.8}>
                        <Post post={post}/>
                </Grid>
            )
        })}
    </Grid>
  )
}

export default PostList;
