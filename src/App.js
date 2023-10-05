import { Box, Container, Divider, Typography } from "@mui/material";
import "./App.css";
import ResponsiveAppBar from "./appbar/ResponsivceAppBar";
import FindYourNextJob from "./sections/FindYourNextJob";
import FindYourTeam from "./sections/FindYourTeam";
import OurLocations from "./sections/OurLocations";
import FindYourNextJobV2 from "./sections/FindYourNextJobV2";
import WorkingAtGoogle from "./sections/WorkingAtGoogle";
import ResponsiveAppBarV2 from "./appbar/ResponsiveAppBarV2";

function App() {
  return (
    <div className="App">
      <Box>
        {/* <ResponsiveAppBar /> */}
        <ResponsiveAppBarV2/>
        {/* <FindYourNextJob /> */}
        <FindYourNextJobV2/>
        <Divider/>
        <FindYourTeam/>
        <Divider/>
        
        <OurLocations/>
        <Divider/>
        <WorkingAtGoogle/>
      </Box>
    </div>
  );
}

export default App;


function GridSample(){
  return (
    
      <Box height={'200px'} bgcolor={'red'}>
        <Box height={'20px'} maxWidth={'xs'} bgcolor={'green'} children={'xs'}/>
        <Box height={'20px'} maxWidth={'sm'} bgcolor={'blue'} children={'sm'}/>
        <Box height={'20px'} maxWidth={'md'} bgcolor={'pink'} children={<Typography>md</Typography>}/>
        <Box height={'20px'} maxWidth={'lg'} bgcolor={'skyblue'} children={'lg'}/>
        <Box height={'20px'} maxWidth={'xl'} bgcolor={'grey'} children={'xl'}/>
        <Box height={'20px'} maxWidth={'xxl'} bgcolor={'yellow'} children={'xxl'}/>

      </Box>
   
  )

}