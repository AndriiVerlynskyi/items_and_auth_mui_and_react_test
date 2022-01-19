import React from 'react';
import AddPostForm from '../Components/Forms/AddPostForm';

import Grid from '@mui/material/Grid';

const AddPost = () => {
  return (
    <Grid container sx={{justifyContent: 'center', margin:'20px 0px 0px 0px'}}>
      <Grid item lg={5}>
        <AddPostForm/>
      </Grid>
    </Grid>
  );
};

export default AddPost;
