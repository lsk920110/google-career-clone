import { LocationOn, Search } from "@mui/icons-material";
import {
  Box,
  ButtonBase,
  Grid,
  Input,
  InputAdornment,
  InputLabel,
  Typography,
} from "@mui/material";
import React from "react";
import { style } from "../const/style";
import Spotlight from "./Spotlight";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const list = [
  {
    keyword: "Build",
    color: "rgb(26, 115, 232)",
    img: "//www.gstatic.com/hiring/CportalUi/hero_1_2x.png",
  },
  {
    keyword: "Create",
    color: "rgb(30, 142, 62)",
    img: "//www.gstatic.com/hiring/CportalUi/hero_2_2x.png",
  },
  {
    keyword: "Design",
    color: "rgb(249, 171, 0)",
    img: "//www.gstatic.com/hiring/CportalUi/hero_3_2x.png",
  },
  {
    keyword: "Code",
    color: "rgb(217, 48, 37)",
    img: "//www.gstatic.com/hiring/CportalUi/hero_4_2x.png",
  },
];

export default function FindYourNextJobV2() {
  return (
    <>
      <Box
        marginTop={"100px"}
        paddingBottom={"100px"}
        paddingX={{ md: 0, xs: "16px" }}
        sx={{
          background: {
            md: `linear-gradient(360deg, lightgrey 20%, #ffffff 20%);`,
          },
        }}
      >
        <Box
          display={"flex"}
          marginX={"auto"}
          maxWidth={style.containerMaxWidth}
          flexDirection={{ md: "row", xs: "column-reverse" }}
        >
          <TextPart width={{ md: "60%", xs: "100%" }} />
          <ImgSection list={list} width={"40%"} />
        </Box>

        <Spotlight />
      </Box>
    </>
  );
}

function TextPart({ width }) {
  return (
    <Box width={width}>
      <Box>
        <Box
          display={"block"}
          // width={'250px'}
          height={"100px"}
        >
          <Carousel
            // width={"200px"}
            axis="vertical"
            autoPlay={true}
            transitionTime={"1000"}
            showIndicators={false}
            showStatus={false}
            interval={"5000"}
            infiniteLoop={true}
            thumbWidth={0}
          >
            {list.map((item, idx) => {
              return (
                <Typography
                  textAlign={"left"}
                  fontSize={{ md: "88px", xs: "55px" }}
                  lineHeight={"100px"}
                  color={item.color}
                  fontWeight={'bold'}
                >
                  {item.keyword}
                </Typography>
              );
            })}
          </Carousel>
        </Box>
        <Typography fontSize={{ md: "88px", xs: "55px" }} lineHeight={"80px"} fontWeight={'bold'}>
          for everyone
        </Typography>
        <Typography
          fontSize={"25px"}
          paddingTop={"50px"}
          paddingBottom={"60px"}
        >
          Find your next job at Google.
        </Typography>
      </Box>
      <Box height={{ md: "165px", xs: "200px" }}>
        <Grid container spacing={1}>
          <Grid xs={12} md={5} item>
            <InputWithLabel
              label={"Role"}
              placeholder={"Software engineer"}
              icon={<Search />}
            />
          </Grid>
          <Grid xs={12} md={5} item>
            <InputWithLabel
              label={"Where?"}
              placeholder={"Log Angeles"}
              icon={<LocationOn />}
            />
          </Grid>
          <Grid xs={12} md={2} item>
            <ButtonBase
              sx={{
                borderRadius: "50px",
                color: "white",
                minHeight: "56px",
                height: "100%",
                width: "100%",
                background: "rgb(26, 115, 232)",
                fontSize: "14px",
              }}
            >
              Search
            </ButtonBase>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

function ImgSection({ list, width }) {
  return (
    // 240 190
    <Box width={{ md: width }}>
      <Box
      // marginX={"auto"}
      // width={{ xs: "240px", md: "446px" }}
      // height={{ xs: "190px", md: "353px" }}
      >
        <img src={list[0].img} alt="asd" width={"100%"} height={"100%"} />
      </Box>
    </Box>
  );
}

function InputWithLabel({ label, placeholder, icon }) {
  return (
    <Box position={"relative"}>
      <InputLabel
        sx={{
          position: "absolute",
          bottom: "60px",
          left: "20px",
          display: { md: "block", xs: "none" },
        }}
      >
        {label}
      </InputLabel>
      <Input
        sx={{
          height: "56px",
          border: "1px solid grey",
          borderRadius: "50px",
          padding: "10px 15px",
        }}
        disableUnderline={true}
        placeholder={placeholder}
        fullWidth
        startAdornment={
          <InputAdornment sx={{ marginRight: "10px" }}>{icon}</InputAdornment>
        }
      />
    </Box>
  );
}
