import {
  ArrowBack,
  ArrowBackIos,
  ArrowBackIosNewSharp,
  ArrowForward,
  BackHand,
  BackHandOutlined,
  IosShare,
  IosShareRounded,
} from "@mui/icons-material";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";

import { style } from "../const/style";
import Carousel from "react-material-ui-carousel";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const cardImage = [
  "https://www.gstatic.com/careerthumbnails/DEVELOPER_RELATIONS/208_003.jpg",
];

export default function Spotlight() {
  return (
    <>
      <Box marginX={"auto"} maxWidth={style.containerMaxWidth}>
        <Typography component={"h3"} lineHeight={"60px"} color={"grey"}>
          SPOTLIGHT
        </Typography>
        {/* <CarouselResponsevice/> */}
        {/* <Box height={"100px"}>
          <Slider
          
            infinite={true}
            slidesToShow={4}
            slidesToScroll={1}
            dots={true}
            arrows={true}
            nextArrow={
              <div className="any" style={{display : 'block' , background:'red'}}></div>
            }
            prevArrow={<ArrowBackIosNewSharp />}
          >
            
              
          </Slider>
        </Box> */}

        <Box>
          <Grid container spacing={3}>
            <Grid item md={6} lg={3} sx={6}>
              <CardItem
                src={
                  "https://www.gstatic.com/careerthumbnails/DEVELOPER_RELATIONS/208_003.jpg"
                }
              />
            </Grid>
            <Grid item md={6} lg={3} sx={6}>
              <CardItem
                src={
                  "https://www.gstatic.com/careerthumbnails/SOFTWARE_ENGINEERING/208_001.jpg"
                }
              />
            </Grid>
            <Grid item md={6} lg={3} sx={6}>
              <CardItem
                src={
                  "https://www.gstatic.com/careerthumbnails/TECHNICAL_WRITING/208_002.jpg"
                }
              />
            </Grid>
            <Grid item md={6} lg={3} sx={6}>
              <CardItem
                src={
                  "https://www.gstatic.com/careerthumbnails/NETWORK_ENGINEERING/208_010.jpg"
                }
              />
            </Grid>
          </Grid>
          {/* <Fab
            color=""
            size="medium"
            sx={{
              background: "#fff",
              paddingLeft: "10px",
              paddingTop: "5px",

              bottom: "75px",
              left: "-30px",
              display: { xs: "none", lg: "block" },
            }}
          >
            <ArrowBackIos fontSize="large" htmlColor="#1A73E8" />
          </Fab> */}
        </Box>
        {/* <Fab
          color=""
          size="medium"
          sx={{
            background: "#fff",
            paddingRight: "0px",
            paddingTop: "5px",

            bottom: "75px",
            right: "-30px",
            display: { xs: "none", lg: "block" },
          }}
        >
          <ArrowForwardIos fontSize="large" htmlColor="#1A73E8" />
        </Fab> */}
      </Box>
    </>
  );
}

function CardItem({ src }) {
  return (
    <Card>
      <CardMedia image={src} sx={{ height: "140px" }} />
      <CardContent sx={{ minHeight: "150px" }}>
        <Typography>Bay Area Roles</Typography>
        <Typography>
          Find roles located throughout the Bay Area, California.
        </Typography>
      </CardContent>
    </Card>
  );
}
