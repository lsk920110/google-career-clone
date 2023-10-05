import { Box, Grid, Typography } from "@mui/material";
import React from "react";

export default function OurLocations() {
  return (
    <>
      <Box
        paddingX={{ md: "0", xs: "16px" }}
        marginY={{md : "140px" , xs : '70px'}}
        className={"ourlocations"}
        // marginX={'50px'}
      >
        <Box
          display={"flex"}
          flexDirection={{ md: "row", xs: "column-reverse" }}
          marginX={{ md: "auto", xs: 'auto' }}
          // maxWidth={"1200px"}
          maxWidth={'1200px'}
          height={"100%"}
        >
          <OurLocationsSection />
          <MiddlePaddingSection />
          <ImgSection
            url={"https://www.gstatic.com/hiring/CportalUi/locations_1x.jpg"}
            width={"100%"}
          />
        </Box>
      </Box>
    </>
  );
}

function LocationType({ title, count }) {
  return (
    <>
      <Grid item md={4} xs={6}>
        <Box>
          <Typography
            component={"a"}
            color={"rgb(25,103,210)"}
            lineHeight={"1.5rem"}
            fontSize={"1.125rem"}
            fontFamily={'"Google Sans",Roboto,Arial,sans-serif;'}
          >
            {title}
          </Typography>
          <Typography
            marginY={"16px"}
            color={"rgb(95,99,104)"}
            fontFamily={"Roboto,Arial,sans-serif"}
            fontWeight={400}
            lineHeight={"1.5rem"}
            letterSpacing={".0125em"}
          >
            {count} jobs
          </Typography>
        </Box>
      </Grid>
    </>
  );
}

function OurLocationsSection() {
  return (
    <Box
      marginX={"auto"}
      height={"100%"}
      display={"flex"}
      flexDirection={"column"}
      // justifyContent={"start"}
    >
      <Typography
        fontFamily={'"Google Sans",Roboto,Arial,sans-serif;'}
        lineHeight={"1.5rem"}
        fontWeight={500}
        textTransform={"uppercase"}
        letterSpacing={"2px"}
        fontSize={".75rem"}
        marginTop={{ md: "-6px", xs: "30px" }}
        color={"rgb(95,99,104)"}
      >
        Locations
      </Typography>
      <Typography
        lineHeight={"4.75rem"}
        fontSize={{ md: "4rem", xs: "2rem" }}
        letterSpacing={0}
        fontWeight={400}
        fontFamily={'"Google Sans Display",Roboto,Arial,sans-serif;'}
        marginTop={{ md: "24px", xs: "10px" }}
        marginBottom={{ md: "40px", xs: "10px" }}
      >
        Our locations
      </Typography>
      <Typography
        marginY={"16px"}
        fontFamily={"Roboto,Arial,sans-serif"}
        color={"rgb(95,99,104)"}
        lineHeight={"1.5rem"}
        fontSize={"1rem"}
        letterSpacing={".0125em"}
      >
        Large or small, each one of our offices is designed to inspire
        innovation, big ideas, and community.
      </Typography>
      <Grid container spacing={4} direction={"row"}>
        
          <LocationType title={"Mountain View"} count={201} />
        
        
          <LocationType title={"New Your"} count={182} />
        
        
          <LocationType title={"London"} count={53} />
        
        
          <LocationType title={"Dudlin"} count={57} />
        
          <LocationType title={"Singapore"} count={67} />
        
          <LocationType title={"Hyderabad"} count={44} />
        <Grid item xs={12}>
          <Typography
            paddingTop={"16px"}
            component={"a"}
            color={"rgb(25,103,210)"}
            lineHeight={"1.5rem"}
            fontSize={"1.125rem"}
            fontFamily={'"Google Sans",Roboto,Arial,sans-serif;'}
          >
            View all locations
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

function MiddlePaddingSection() {
  return <Box width={"300px"} display={""} />;
}

function ImgSection({ url, width }) {
  return (
    <Box width={width}>
      <Box
        width={{ 
          // md: "446px", 
          md : "100%",
          xs: "100%" }}
        height={"353px"}
        borderRadius={"50px"}
      >
        <img
          src={url}
          alt="asd"
          width={"100%"}
          height={"100%"}
          style={{ borderRadius: "25px" }}
        />
      </Box>
    </Box>
  );
}
