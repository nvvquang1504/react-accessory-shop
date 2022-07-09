import './style.scss'
import {Box, Grid} from '@mui/material'

const TypeDistribution = (props) => {
   const {data} = props;
   return (
      <Box className={'type-distribution'}>
         <Grid container>
            
            {
               data.subMenus.map((i, index) => {
                  return (
                     <Grid key={index} item xs={3}>
                        <div className="item title">
                           {i.title.en + ' - ' + i.title.vi}
                        </div>
                        {
                           i.items.map((subI, index) => {
                              return (
                                 <div key={index} className="item">
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