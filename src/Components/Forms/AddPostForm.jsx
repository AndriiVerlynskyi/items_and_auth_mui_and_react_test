import React from 'react';
import axios from 'axios';
import { baseUrl } from '../../routes/routes';
import { useNavigate } from 'react-router-dom'
import TwoFieldsForm from './TwoFieldsForm';

const AddPostForm = () => {

  const navigate = useNavigate()

  const onSubmit = async (postData) => {
    console.log(postData)
    await axios({
      method: 'post',
      url: `${baseUrl}/posts`,
      data: {
        title: postData.title,
        text: postData.text
      }
    })
    navigate("/posts", { replace: true })
  }

  return (
    <TwoFieldsForm 
      firstField={{
        title: 'title',
        isRequired: true,
        multiline: false
      }}
      secondField={{
        title: 'text',
        isRequired: true,
      }}
      onSubmit={onSubmit}
    />
  );
};

export default AddPostForm;





// import React from 'react';
// import axios from 'axios';
// import { baseUrl } from '../../routes/routes';
// import { useNavigate } from 'react-router-dom'
// import { useForm } from 'react-hook-form';


// import Card from '@mui/material/Card';
// import CardHeader from '@mui/material/CardHeader';
// import CardContent from '@mui/material/CardContent';
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';

// const AddPostForm = () => {

//   const navigate = useNavigate()

//   const {
//     register,
//     handleSubmit
//   } = useForm()

//   const onSubmit = async (postData) => {
//     console.log(postData)
//     await axios({
//       method: 'post',
//       url: `${baseUrl}/posts`,
//       data: {
//         title: postData.title,
//         text: postData.text
//       }
//     })
//     console.log('success')
//     navigate("/posts", { replace: true })
//   }

//   return (
//     <Card sx={{ width: {sm:'300px', md:'500px'}}}>
//         <CardHeader title='New post' sx={{color:'#1976d2'}}/>
//         <CardContent>
//           <form onSubmit={handleSubmit(onSubmit)}>
//             <TextField 
//               name='title'
//               id="standard-basic" 
//               label="Title" 
//               variant="filled" 
//               sx={{width:'100%'}}
//               {...register('title', {required: true})}
//             />
//             <TextField 
//               name='text'
//               id="standard-basic" 
//               label="Text" 
//               variant="filled" 
//               sx={{width:'100%'}} 
//               margin='normal'
//               multiline
//               rows={3}
//               {...register('text', {required: true})}
//             />
//             <Button 
//               color='success' 
//               variant='contained' 
//               size='large' 
//               type='submit' 
//             >
//               Submit
//             </Button>
//           </form>
//         </CardContent>
//     </Card>
//   );
// };

// export default AddPostForm;
