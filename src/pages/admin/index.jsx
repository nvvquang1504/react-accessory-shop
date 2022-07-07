import {Box, TextField, Stack, Paper, Input, Button   } from '@mui/material';
import './style.scss'
import {styled} from '@mui/material/styles';
import {useState} from "react";

const AdminPage = () => {
   const Input = styled('input')({
      display: 'none',
   });
   const [preview, setPreview] = useState('')
   const onSelectFile = () => {
      const objectUrl = URL.createObjectURL(event.target.files[0]);
      setPreview(objectUrl);
   }
   return (
      <Box
         display={'flex'}
         justifyContent={'center'}
         alignItems={'center'}
      
      >
         <Paper className={'admin-add-form__container'} elevation={2}>
            <Stack spacing={2}>
               <TextField size={'small'} label="Name" variant="outlined"/>
               <TextField size={'small'} label="Type" variant="outlined"/>
               <TextField size={'small'} label="Color" variant="outlined"/>
               {/*<TextField size={'small'} label="Price" variant="outlined"/>*/}
               <label htmlFor="contained-button-file">
                  <Input onChange={onSelectFile} accept="image/*" id="contained-button-file" multiple type="file"/>
                  <Button variant="contained" component="span">
                     Upload
                  </Button>
               </label>
               {
                  preview
                     ? <img width='20rem' height='20rem' src={preview} alt=""/>
                     : ''
               }
               
            </Stack>
         </Paper>
      </Box>
   );
};

export default AdminPage;