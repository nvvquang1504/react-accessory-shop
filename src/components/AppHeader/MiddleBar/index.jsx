import './style.scss'
import {Box, Stack, Grid, Badge} from '@mui/material'
import logo from '../../../assets/Marvel_Studios_2016_logo.svg.png'
/*================== ICONS ========================*/
import {FaSearchengin} from 'react-icons/fa';
import {RiHeart2Line} from 'react-icons/ri';
import {BiShuffle, BiShoppingBag} from 'react-icons/bi';


const MiddleBar = () => {
   return (
      <Box py={2} className={'middle-bar'}>
         <Grid container>
            <Grid item xs={4}>
               <div className="middle-bar__item start">
                  <img src={logo} alt={'logo'}/>
               </div>
            </Grid>
            <Grid className={'item'} item xs={4}>
               <div className="middle-bar__item">
                  <input type="text" placeholder={'Search'}/>
                  <span className={'search-icons-container'}>
                     <FaSearchengin color={'white'} size={'1.5rem'}/>
                  </span>
               </div>
            </Grid>
            <Grid className={'item'} item xs={4}>
               <div className="middle-bar__item end">
                  <Badge
                     anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                     }}
                     badgeContent={4}
                     color="primary">
                     <RiHeart2Line size={'1.5rem'}/>
                  </Badge>
                  <Badge
                     anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                     }}
                     badgeContent={4}
                     color="primary">
                     <BiShuffle size={'1.5rem'}/>
                  </Badge>
                  <Badge
                     classes={{
                        badge: 'ahihihi'
                     }}
                     anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                     }}
                     badgeContent={4}
                     color="primary">
                     <BiShoppingBag size={'1.5rem'}/>
                  </Badge>
               </div>
            </Grid>
         
         </Grid>
      </Box>
   );
};

export default MiddleBar;