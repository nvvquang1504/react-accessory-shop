import "./style.scss";
import {Box} from '@mui/material';
import TypeDistribution from "./TypeDistribution";


const SBItemContainer = (props) => {
   return (
      <Box className={'side-bar-item-container'}>
         <TypeDistribution data={props.data}/>
      </Box>
   );
};

export default SBItemContainer;
