import './style.scss'
import {Box} from '@mui/material';
import TopBar from './TopBar'
import MiddleBar from './MiddleBar'
import NavBar from './NavBar'

const AppHeader = () => {
   
   return (
      <Box className={'app-header'}>
         <TopBar/>
         <MiddleBar/>
         <NavBar/>
      </Box>
   );
};

export default AppHeader;