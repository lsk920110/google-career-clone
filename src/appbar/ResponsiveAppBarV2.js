import { AppBar, Avatar, IconButton, Toolbar, Typography } from "@mui/material";

import { Box } from "@mui/system";
import MenuIcon from "@mui/icons-material/Menu";
import AppsIcon from "@mui/icons-material/Apps";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import React from "react";
import BasicMenu from "./BasicMenu";
const appBarMenuList = ["Teams", "Locations", "Benefits", "Jobs", "Students"];

export default function ResponsiveAppBarV2() {
  return (
    <Box width={"100%"}>
      <AppBar color="inherit" elevation={1}>
        <Toolbar>
          <MenuIcon />
          <Box flexGrow={1} display={{ md: "flex" }}>
            {/* <Typography marginX={"15px"}>Google</Typography> */}
            <img
              src="https://www.gstatic.com/images/branding/googlelogo/svg/googlelogo_clr_74x24px.svg"
              alt="google"
              style={{ marginLeft: "15px", marginRight: "15px" }}
            />
            {appBarMenuList.map((item, idx) => {
              return (
                <Typography
                  display={{ md: "block", xs: "none" }}
                  marginX={"15px"}
                >
                  {item}
                </Typography>
              );
            })}
          </Box>
          <Box display={"flex"}>
            <IconButton sx={{display : {md : 'block' , xs : 'none'}}}>
              <BasicMenu />
            </IconButton>
            <IconButton>
              <AppsIcon />
            </IconButton>
            <IconButton>
              <Avatar />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
