import './style.scss'
import {Box} from '@mui/material';

const MiniBanner = (props) => {
   const {background} = props
   return (
      <Box className={'mini-banner'}>
         <img src={background} alt="myBg"/>
      </Box>
   );
};

export default MiniBanner;