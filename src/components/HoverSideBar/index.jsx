import './style.scss'
import {Box, Stack} from '@mui/material'

const HoverSideBar = () => {
   const sideBarArr = [
      {
         title:'Linh kiện mới'
      }
   ]
   return (
      <Box
         className={'hover-side-bar'}
         position={'relative'}
         height={'10rem'}
         bgcolor={'secondary.main'}
      >
         <Stack
            border={'2px solid'}
            borderColor={'secondary.light'}
            className="hover-side-bar__item"
            borderBottom={'none'}
         >
            <span className="main-icons">
            
            </span>
            <span>dadadada</span>
            <span className="arrow-icon">
            </span>
         </Stack>
         <Stack border={'2px solid'}
                borderColor={'secondary.light'} className="hover-side-bar__item">
               <span className="main-icons">
               
               </span>
            <span>dadadada</span>
            <span className="arrow-icon">
               
               </span>
         </Stack>
      </Box>
   );
};

export default HoverSideBar;