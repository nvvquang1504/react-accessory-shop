import AppHeader from '../../components/AppHeader'
import NavBar from "../../components/NavBar";
import HoverSideBar from "../../components/HoverSideBar";
import {Container, Grid} from "@mui/material";
import Carousel from "../../components/Carousel";
import {useState} from "react";

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
                  {/*<HoverSideBar/>*/}
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