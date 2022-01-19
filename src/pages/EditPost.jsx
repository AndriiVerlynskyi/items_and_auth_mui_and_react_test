import React from 'react';
import EditPostForm from '../Components/Forms/EditPostForm';

import Grid from '@mui/material/Grid';


const EditPost = () => {

  return (
    <Grid container sx={{justifyContent: 'center', margin:'20px 0px 0px 0px'}}>
      <Grid item lg={5}>
        <EditPostForm/>
      </Grid>
    </Grid>
  )
};

export default EditPost;
