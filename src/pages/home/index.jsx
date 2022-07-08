import AppHeader from '../../components/AppHeader'
import NavBar from "../../components/NavBar";
import HoverSideBar from "../../components/HoverSideBar";
import {Container} from "@mui/material";

const HomePage = () => {
   return (
      <div>
         <AppHeader/>
         <NavBar/>
         <Container disableGutters={true}>
            <HoverSideBar></HoverSideBar>
         </Container>
      </div>
   );
};

export default HomePage;