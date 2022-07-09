import './style.scss'
import {Box, Grid} from '@mui/material'

const TypeDistribution = (props) => {
   const {data} = props;
   return (
      <Box className={'type-distribution'}>
         <Grid container>
            <Grid item xs={3}>
               <span className="title">{data.subMenus[0].title.vi}</span>
            </Grid>
         </Grid>
      </Box>
   );
};

export default TypeDistribution;