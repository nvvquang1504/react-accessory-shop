import "./style.scss";
import {Box} from '@mui/material';
import TypeDistribution from "./TypeDistribution";
import {sideBarData} from "../../../utils/myData";

const SBItemContainer = () => {
   return (
      <Box className={'side-bar-item-container'}>
         <TypeDistribution data={sideBarData[0]}/>
      </Box>
   );
};

export default SBItemContainer;
