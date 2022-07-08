import AppHeader from '../../components/AppHeader'
import NavBar from "../../components/NavBar";
import HoverSideBar from "../../components/HoverSideBar";
import {Container, Grid} from "@mui/material";

const HomePage = () => {
   return (
      <div>
         <AppHeader/>
         <NavBar/>
         <Container disableGutters={true}>
            <Grid container>
               <Grid xs={2.5} item>
                  <HoverSideBar></HoverSideBar>
               </Grid>
               <Grid xs={8.5} item></Grid>
            </Grid>
         </Container>
      </div>
   );
};

export default HomePage;