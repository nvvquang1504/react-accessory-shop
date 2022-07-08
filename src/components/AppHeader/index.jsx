import './style.scss';
import {Box, Grid, IconButton, Badge, Stack, Container} from '@mui/material';
import lvlLogo from '../../assets/lvllogo.png';
import {GiHamburgerMenu} from 'react-icons/gi';
import {BiPhoneCall} from 'react-icons/bi';
import {BsBag} from 'react-icons/bs';
import {FaRegUser} from 'react-icons/fa';
import {useState, useEffect} from 'react';
import {AiOutlineSearch} from 'react-icons/ai';

const AppHeader = () => {
   const [width, setWidth] = useState(window.innerWidth);
   useEffect(() => {
      window.addEventListener('resize', () => {
         setWidth(window.innerWidth);
      })
   }, [])
   
   return (
      <Box className={'app-header'}>
         <Container disableGutters={true}>
            {
               width < 1200
                  ?
                  <Grid className={'app-header__mobile'} container>
                     <Grid className={'mobile'} item container xs={12} spacing={2}>
                        <Grid item xs={6}>
                           <img src={lvlLogo} alt="logo"/>
                        </Grid>
                        <Grid item xs={6} height={'100%'} justifyContent={"space-between"}>
                           <Stack spacing={2}>
                              <div>
                                 <BiPhoneCall/>
                                 <div className="contact">
                                    <p>Hot line</p>
                                    <b>1900 0243 (8:30 - 21:00)</b>
                                 </div>
                              </div>
                              <Stack direction={'row'} spacing={8}>
                                 <div>
                                    <Badge
                                       color="primary.main" badgeContent={9}
                                       anchorOrigin={{
                                          vertical: 'bottom',
                                          horizontal: 'right',
                                       }}
                                    >
                                       <BsBag className={'bs-bag'}/>
                                    </Badge>
                                 </div>
                                 <div style={{cursor: 'pointer'}}>
                                    <FaRegUser/>
                                    <div className={'login-logout'}>
                                       <b>Dang nhap</b>
                                       <b>Dang ky</b>
                                    </div>
                                 </div>
                              </Stack>
                           
                           </Stack>
                        
                        </Grid>
                     </Grid>
                     <Grid item xs={12}>
                        <IconButton className={'app-header__hamburger'} disableRipple={true} aria-label="hamburger">
                           <GiHamburgerMenu/>
                        </IconButton>
                        <div className={'search-bar'}>
                           <input className={'items'} type="text" placeholder={'Bạn muốn tìm sản phẩm nào'}/>
                           <button className={'items'}>
                              <AiOutlineSearch/>
                           </button>
                        </div>
                     </Grid>
                  </Grid>
                  
                  : <Grid className={'app-header__pc'} container>
                     <Grid item xs={2}>
                        <img src={lvlLogo} alt="logo"/>
                        <IconButton className={'app-header__hamburger'} disableRipple={true} aria-label="hamburger">
                           <GiHamburgerMenu/>
                        </IconButton>
                     </Grid>
                     <Grid item xs={4}>
                        <div className={'search-bar'}>
                           <input className={'items'} type="text" placeholder={'Bạn muốn tìm sản phẩm nào'}/>
                           <button className={'items'}>Tìm kiếm</button>
                        </div>
                     </Grid>
                     <Grid item xs={3} className={'end'}>
                        <div>
                           <BiPhoneCall/>
                           <div className="contact">
                              <p>Hot line</p>
                              <b>1900 0243 (8:30 - 21:00)</b>
                           </div>
                        </div>
                     </Grid>
                     <Grid item xs={1} className={'end'}>
                        <div>
                           <Badge
                              
                              color="primary" badgeContent={9}
                              anchorOrigin={{
                                 vertical: 'bottom',
                                 horizontal: 'right',
                              }}
                           >
                              <BsBag className={'bs-bag'}/>
                           </Badge>
                        </div>
                     </Grid>
                     <Grid item xs={2} className={'end'}>
                        <div style={{cursor: 'pointer'}}>
                           <FaRegUser/>
                           <div className={'login-logout'}>
                              <b>Dang nhap</b>
                              <b>Dang ky</b>
                           </div>
                        </div>
                     </Grid>
                  </Grid>
            }
         </Container>
      </Box>
   );
};

export default AppHeader;