import {Box, TextField, Stack, Paper} from '@mui/material';

const AdminPage = () => {
   return (
      <Box
         display={'flex'}
         justifyContent={'center'}
         alignItems={'center'}
         pt={2}
      >
         <Paper elevation={2}>
            <Stack spacing={2}>
               <TextField label="Name" variant="outlined"/>
               <TextField label="Type" variant="outlined"/>
            </Stack>
         </Paper>
      </Box>
   );
};

export default AdminPage;