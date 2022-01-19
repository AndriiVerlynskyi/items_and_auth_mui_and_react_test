import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { baseUrl } from '../routes/routes';
import { Link } from 'react-router-dom';
import PostList from '../Components/PostList/PostList';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

// const postsForTry = [
//   {
//     id: 1,
//     title: 'First post',
//     text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi, necessitatibus.'
//   },
//   {
//     id: 2,
//     title: 'Second post',
//     text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad ab praesentium aspernatur illo esse.'
//   },
//   {
//     id:3,
//     title: 'Third post',
//     text: 'Lorem, ipsum dolor.'
//   }
// ]

const Posts = () => {
 
  const [posts, setPosts] = useState([])

  useEffect( async () => {
    console.log()
    axios(`${baseUrl}posts`).then(resp => setPosts(resp.data));
  },[])

  return (
    <Box>
        <Button sx={{margin:'10px 25px'}} variant='outlined'>
          <Link 
            to='/addPost' 
            style={{textDecoration:'none', color:'#1976d2'}}
          >
            Add new post
          </Link>
        </Button>
        <PostList posts={posts}/>
    </Box>
  )
};

export default Posts;
