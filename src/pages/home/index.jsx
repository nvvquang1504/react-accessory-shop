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
import img1 from '../../assets/mini-banner/'
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
               container>
               <Grid xs={2.5} item>
                  <HoverSideBar active={active} setActive={setActive}/>
               </Grid>
               <Grid xs={7} item>
                  <Carousel/>
                  <Stack direction={'row'}>
                   <MiniBanner/>
                   <MiniBanner/>
                  </Stack>
               </Grid>
               <Grid xs={2.5} item></Grid>
            </Grid>
         </Container>
      </div>
   );
};

export default HomePage;