import React from 'react';
import axios from 'axios'
import { baseUrl } from '../../routes/routes';
import { Link } from 'react-router-dom';

import { styled } from '@mui/material/styles';
import DeleteIcon from '@mui/icons-material/Delete';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button'
import Box from '@mui/material/Box';

const StyledCard = styled(Card)( ({theme}) => ({
    height:'250px',
    position: 'relative'
}));

const Post = ( {post} ) => {

  const handleDelete = () => {
    axios.delete(`${baseUrl}/posts/${post.id}`);

  }

  return (
    <StyledCard>
        <CardHeader 
            title={post.title}
            action={
                <IconButton onClick={handleDelete}>
                    <Link 
                      to='/deletePost'
                      style={{
                        color:'rgba(0, 0, 0, 0.87)',
                        textDecoration:'none'
                      }}
                    >
                      <DeleteIcon/>
                    </Link>
                </IconButton>
            }
        />
        <CardContent>{post.text}
            <Box sx={{position:'absolute', bottom:'20px', right:'20px'}}>
              <Button variant="contained" color="warning" sx={{margin:'10px 0px 0px 0px', padding:'0px'}}>
                <Link 
                  to={`/editPost/${post.id}`}
                  style={{textDecoration:'none', color:'white', padding:'8px 22px'}}
                >Edit</Link>
              </Button>
            </Box>
          </CardContent>
    </StyledCard>
  );
};

export default Post;
