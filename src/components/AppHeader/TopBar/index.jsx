import './style.scss'
import {Box, Stack} from '@mui/material';
import {BiPhoneCall} from 'react-icons/bi'
import {VscSignIn} from 'react-icons/vsc'
import {AiOutlineContacts} from 'react-icons/ai'

const TopBar = () => {
   return (
      <Box
         className={'top-bar'}
         px={2}
         bgcolor={'primary.dark'}>
         <Stack
            direction={'row'}
            justifyContent={'space-between'}
            alignItems={'center'}
            color={'white'}
            height={'100%'}
         >
            <div className={'top-bar__item'}>
               <div className={'sub-item'}>
                  <BiPhoneCall/>
                  Call us: 0898019214
               </div>
            </div>
            <div className={'top-bar__item'}>
               <div className={'sub-item pointer'}>
                  <VscSignIn/>
                  Sign in
               </div>
               <div className={'sub-item pointer'}>
                  <AiOutlineContacts/>
                  Contact us
               </div>
            </div>
         </Stack>
      </Box>
   );
};

export default TopBar;