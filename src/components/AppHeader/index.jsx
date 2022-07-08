import './style.scss'
import {Box, Grid, IconButton} from '@mui/material';
import lvlLogo from '../../assets/lvllogo.png';
import {GiHamburgerMenu} from 'react-icons/gi'
import {styled} from "@mui/material/styles";

const AppHeader = () => {
   
   return (
      <Box px={3} className={'app-header'}>
         <Grid container>
            <Grid item xs={2}>
               <img src={lvlLogo} alt="logo"/>
               <IconButton className={'app-header__hamburger'} disableRipple={true} aria-label="hamburger">
                  <GiHamburgerMenu/>
               </IconButton>
            </Grid>
            <Grid item xs={5}>
               <div className={'search-bar'}>
                  <input className={'items'} type="text" placeholder={'Bạn muốn tìm sản phẩm nào'}/>
                  <button className={'items'}>Tìm kiếm</button>
               </div>
            </Grid>
            <Grid item xs={3}></Grid>
            <Grid item xs={2}></Grid>
         </Grid>
      </Box>
   );
};

export default AppHeader;