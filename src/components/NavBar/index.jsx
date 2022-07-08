import './style.scss'
import {Box, Container, Stack} from '@mui/material';

const NavBar = () => {
   return (
      <Box className={'nav-bar'} bgcolor='primary.main'>
         <Container disableGutters={true}>
            <nav>
               <ul className={'nav-bar__list'}>
                  <li className={'nav-bar__item start'}>
                     <a href="">
                        lap dat phong net
                     </a>
                  </li>
                  <li className={'nav-bar__item'}>
                     <a href="">
                        tra gop
                     </a>
                  </li>
                  <li className={'nav-bar__item'}>
                     <a href="">
                        bang gia
                     </a>
                  </li>
                  <li className={'nav-bar__item'}>
                     <a href="">
                        xay dung cau hinh
                     </a>
                  </li>
                  <li className={'nav-bar__item end'}>
                     <a href="">
                        kiem tra bao hanh
                     </a>
                  </li>
                  <li className={'nav-bar__item'}>
                     <a href="">
                        thiet bi gaming
                     </a>
                  </li>
                  <li className={'nav-bar__item'}>
                     <a href="">
                        dich vu tan noi
                     </a>
                  </li>
               </ul>
            </nav>
         </Container>
      </Box>
   );
};

export default NavBar;