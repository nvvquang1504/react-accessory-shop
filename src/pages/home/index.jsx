/*================ COMPONENTS ===================*/
import AppHeader from '../../components/AppHeader'
import NavBar from "../../components/NavBar";
import HoverSideBar from "../../components/HoverSideBar";
import Carousel from "../../components/Carousel";
import MiniBanner from "../../components/MiniBanner";
/*================= LIBRARY ====================*/
import {Container, Grid, Stack} from "@mui/material";
/*================== HOOKS ====================*/
import {styled} from '@mui/material/styles';
import {useState} from "react";
/*================= IMAGES ====================*/
import img1 from '../../assets/mini-banner/web-laptop_fix.png'
import img2 from '../../assets/mini-banner/WEB-T6-2022-2-01.jpg'
import img3 from '../../assets/mini-banner/WEB-T6-2022-2-04.png'
import img4 from '../../assets/mini-banner/WEB-T6-2022-2-03.jpg'
/*================== MAIN ====================*/
const CusGridItem = styled(Grid)(({theme}) => ({
   // padding: theme.spacing(0.5)
}))

const HomePage = () => {
   const [active, setActive] = useState(null)
   return (
      <div>
         <AppHeader/>
         <NavBar/>
         <Container disableGutters={true}>
            <Grid
               onMouseLeave={() => {
                  setActive(null);
               }}
               mt={1}
               container>
               <Grid xs={3} item>
                  <HoverSideBar active={active} setActive={setActive}/>
               </Grid>
               <Grid container xs={9} item>
                  <Grid item xs={8}>
                     <Carousel/>
                  </Grid>
                  <CusGridItem item xs={4}>
                     <MiniBanner background={img1}/>
                     <MiniBanner background={img1}/>
                  </CusGridItem>
                  <CusGridItem item xs={4}>
                     <MiniBanner background={img2}/>
                  </CusGridItem>
                  <CusGridItem item xs={4}>
                     <MiniBanner background={img3}/>
                  </CusGridItem>
                  <CusGridItem item xs={4}>
                     <MiniBanner background={img4}/>
                  </CusGridItem>
               </Grid>
            </Grid>
         </Container>
      </div>
   );
};

export default HomePage;