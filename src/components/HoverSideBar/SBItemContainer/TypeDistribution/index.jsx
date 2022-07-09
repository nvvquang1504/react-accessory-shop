import './style.scss'
import {Box, Grid} from '@mui/material'

const TypeDistribution = (props) => {
   const {data} = props;

   return (
      <Box className={'type-distribution'}>
         <Grid container>
            
            {
               data.subMenus.map((i) => {
                  return (
                     <Grid item xs={3}>
                        <div className="item title">
                           {i.title.en + ' - ' + i.title.vi}
                        </div>
                        {
                           i.items.map((subI) => {
                              return (
                                 <div className="item">
                                    {subI.title}
                                 </div>
                              )
                           })
                        }
                     </Grid>
                  )
               })
            }
         
         </Grid>
      </Box>
   );
};

export default TypeDistribution;