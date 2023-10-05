import { LocationOn, Search } from "@mui/icons-material";
import {
  Box,
  Button,
  Grid,
  Input,
  InputAdornment,
  InputLabel,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Spotlight from "./Spotlight";

const list = [
  {
    keyword: "Build",
    color: "blue",
    img: "//www.gstatic.com/hiring/CportalUi/hero_1_2x.png",
  },
  {
    keyword: "Create",
    color: "green",
    img: "//www.gstatic.com/hiring/CportalUi/hero_2_2x.png",
  },
  {
    keyword: "Design",
    color: "orange",
    img: "//www.gstatic.com/hiring/CportalUi/hero_3_2x.png",
  },
  {
    keyword: "Code",
    color: "red",
    img: "//www.gstatic.com/hiring/CportalUi/hero_4_2x.png",
  },
];

export default function FindYourNextJob() {
  const [imgIndex, setImgIndex] = useState(0);
  setTimeout(() => {
    setImgIndex(imgIndex);
    if (imgIndex === list.length - 1) {
      setImgIndex(0);
    } else {
      setImgIndex((prev) => prev + 1);
    }
  }, 2000);

  return (
    <Box mt={"100px"}>
      <Box
        display={"flex"}
        height={"530px"}
        mt={"50px"}
        marginX={"100px"}
        paddingBottom={"100px"}
        flexDirection={{ md: "row", xs: "column-reverse" }}
      >
        <ForEveryone list={list} imgIndex={imgIndex} />
        <ForEveryoneImage list={list} imgIndex={imgIndex} />
      </Box>
      <Box
        marginTop={"150px"}
        sx={{ background: "lightgrey" }}
        height={"300px"}
        position={"relative"}
      >
        <Spotlight />
      </Box>
    </Box>
  );
}

function StartAdornmentInput({ label, placeholder, icon }) {
  return (
    <Box marginRight={"15px"}>
      <InputLabel
        sx={{
          marginLeft: "20px",
          marginBottom: "5px",
          display: { xs: "none", md: "flex" },
        }}
      >
        {label}
      </InputLabel>
      <Input
        fullWidth
        disableUnderline={true}
        placeholder={placeholder}
        sx={{
          border: "1px solid grey",
          borderRadius: "50px",
          padding: "10px 15px 10px 15px",
        }}
        inputProps={{}}
        startAdornment={
          <InputAdornment sx={{ marginRight: "10px" }}>{icon}</InputAdornment>
        }
      />
    </Box>
  );
}

function ForEveryone({ list, imgIndex }) {
  return (
    <Box flexGrow={1} paddingTop={"50px"}>
      <Typography
        fontSize={"88px"}
        component={"h4"}
        lineHeight={"100px"}
        color={list[imgIndex].color}
      >
        {list[imgIndex].keyword}
      </Typography>

      <Typography fontSize={"88px"} component={"h4"} lineHeight={"100px"}>
        for everyone
      </Typography>
      <Typography paddingTop={"50px"} paddingBottom={"60px"} fontSize={"25px"}>
        Find your next job at Google
      </Typography>

      <Grid container rowSpacing={3}>
        <Grid item md={5} xs={12}>
          <StartAdornmentInput
            label={"Role"}
            icon={<Search />}
            placeholder={"Software engineer"}
          />
        </Grid>
        <Grid item md={5} xs={12}>
          <StartAdornmentInput
            label={"Where?"}
            icon={<LocationOn />}
            placeholder={"Log Andeles"}
          />
        </Grid>
        <Grid item md={2} xs={12}>
          <Box>
            <Button
              variant="contained"
              fullWidth
              sx={{
                // marginTop: "25px",
                borderRadius: "25px",
                padding: "10px 15px 10px 15px",
                height: "54px",
              }}
            >
              Search
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

function ForEveryoneImage({ list, imgIndex }) {
  return (
    <Box width={"500px"}>
      <img width={"100%"} src={list[imgIndex].img} alt="" />
    </Box>
  );
}
