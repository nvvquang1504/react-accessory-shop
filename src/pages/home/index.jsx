import AppHeader from '../../components/AppHeader'
import NavBar from "../../components/NavBar";
import HoverSideBar from "../../components/HoverSideBar";
import {Container, Grid} from "@mui/material";
import Carousel from "../../components/Carousel";

const HomePage = () => {
   return (
      <div>
         <AppHeader/>
         <NavBar/>
         <Container disableGutters={true}>
            <Grid container>
               <Grid xs={2.5} item>
                  <HoverSideBar/>
               </Grid>
               <Grid xs={7} item>
                  <Carousel/>
               </Grid>
               <Grid xs={2.5} item></Grid>
            </Grid>
         </Container>
      </div>
   );
};

export default HomePage;