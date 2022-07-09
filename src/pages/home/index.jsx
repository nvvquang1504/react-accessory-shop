/*================ COMPONENTS ===================*/
import AppHeader from '../../components/AppHeader'
import NavBar from "../../components/NavBar";
import HoverSideBar from "../../components/HoverSideBar";
import Carousel from "../../components/Carousel";
import MiniBanner from "../../components/MiniBanner";
/*================= LIBRARY ====================*/
import {Container, Grid, Stack} from "@mui/material";
/*================== HOOKS ====================*/
import {useState} from "react";
/*================= IMAGES ====================*/
import img1 from '../../assets/mini-banner/web-laptop_fix.png'
import img2 from '../../assets/mini-banner/WEB-T6-2022-2-01.jpg'
/*================== MAIN ====================*/
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
               <Grid xs={2.5} item>
                  <HoverSideBar active={active} setActive={setActive}/>
               </Grid>
               <Grid xs={6.5} item>
                  <Carousel/>
                  <Stack p={1} direction={'row'}>
                     <Grid container spacing={1}>
                        <Grid item xs={6}>
                           <MiniBanner background={img1}/>
                        </Grid>
                        <Grid item xs={6}>
                           <MiniBanner background={img2}/>
                        </Grid>
                     </Grid>
                  </Stack>
               </Grid>
               <Grid xs={3} item>
               
               </Grid>
            </Grid>
         </Container>
      </div>
   );
};

export default HomePage;