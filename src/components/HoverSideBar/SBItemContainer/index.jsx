import "./style.scss";
import {Box} from '@mui/material';
import TypeDistribution from "./TypeDistribution";


const SBItemContainer = (props) => {
   const {data, setActive} = props;
   return (
      <Box
         onMouseLeave={() => {
            setActive(null);
         }}
         className={'side-bar-item-container'}>
         <TypeDistribution data={data}/>
      </Box>
   );
};

export default SBItemContainer;
