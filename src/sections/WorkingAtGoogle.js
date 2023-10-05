import { Box, Grid, Typography } from "@mui/material";
import React from "react";

export default function WorkingAtGoogle() {
  return (
    <Box
      // paddingY={"142px"}
      paddingX={{md : 0, xs : '16px'}}
      sx={{
        background: `linear-gradient(360deg, lightgrey 62%, #ffffff 38%);`,
      }}
    >
      <Typography
        textAlign={"center"}
        textTransform={"uppercase"}
        fontSize={"15px"}
        letterSpacing={"2px"}
        //   paddingBottom={'50px'}
      >
        learn
      </Typography>
      <Typography
        marginTop={"24px"}
        marginBottom={"40px"}
        textAlign={"center"}
        lineHeight={"4.75rem;"}
        fontSize={"4rem;"}
        fontFamily={'"Google Sans Display",Roboto,Arial,sans-serif;'}
      >
        Working at Google
      </Typography>
      <Box 
      maxWidth={'1200px'}
       marginX={'auto'}>
        <Grid container spacing={3}>
          <Grid item md={6} xs={12}>
            <Card
              img={"https://www.gstatic.com/hiring/CportalUi/diversity_2x.jpeg"}
              title={
                "Learn how we're building a more diverse and inclusive Google"
              }
              linkMsg={"Read about our efforts"}
            />
          </Grid>
          <Grid item  md={6} xs={12}>
            <Card
              img={
                "https://www.gstatic.com/hiring/CportalUi/disability_2x.jpeg"
              }
              title={"Our commitment to hiring people with disabilities"}
              linkMsg={"Learn more"}
            />
          </Grid>
          <Grid item  md={6} xs={12}>
            <Card
              img={
                "https://www.gstatic.com/hiring/CportalUi/how_we_hire_2x.png"
              }
              title={"Take a look inside our hiring process"}
              linkMsg={"See how we hire"}
            />
          </Grid>
          <Grid item  md={6} xs={12}>
            <Card
              img={
                "https://www.gstatic.com/hiring/CportalUi/path_to_google_2x.jpg"
              }
              title={"Visit our My Path to Google blog"}
              linkMsg={"Learn more"}
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

function Card({ img, title, linkMsg }) {
  return (
    <Box
      height={"505px"}
      //   width={"500px"}
      width={"100%"}
      sx={{
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        overflow: "hidden",
      }}
      borderRadius={"8px"}
      marginX={"auto"}
    >
      <Box
        height={"100%"}
        width={"100%"}
        position={"relative"}
        borderRadius={"8px"}
        sx={{
          backgroundImage:
            "linear-gradient(180deg,transparent 40%,rgba(32,33,36,.7));",
        }}
      >
        <Typography
          fontFamily={'"Google Sans",Roboto,Arial,sans-serif;'}
          color={"#fff"}
          fontSize={"30px"}
          position={"absolute"}
          maxWidth={"400px"}
          bottom={"30px"}
          left={"40px"}
          right={"20px"}
          marginBottom={"40px"}
        >
          {title}
        </Typography>
        <Typography
          color={"#fff"}
          fontSize={".875rem"}
          position={"absolute"}
          maxWidth={"400px"}
          bottom={"40px"}
          left={"40px"}
          right={"20px"}
        >
          {linkMsg}
        </Typography>
      </Box>
    </Box>
  );
}
