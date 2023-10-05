import { Box, Divider, Grid, Typography } from "@mui/material";
import React from "react";

export default function FindYourTeam() {
  return (
    <>
      <Box
        
        paddingX={{md : 0, xs : "16px"}}
        paddingY={{md : "142px" , xs : "30px"}}
        // border={"1px solid black"}
        sx={
          {
            // background: `lightblue;`,
            // backgroundClip: `content-box, padding-box;`,
          }
        }
      >
        <Box maxWidth={'1200px'} marginX={'auto'}>
        <Grid container spacing={2}>
          <Grid item md={5} xs={12}>
            <Box>
              <img
              width={'100%'}
              height={'100%'}
                src="https://www.gstatic.com/hiring/CportalUi/teams_1x.jpg"
                alt=""
                style={{ "object-fie": "cover", borderRadius: "8px" }}
              />
            </Box>
          </Grid>
          <Grid item md={7} xs={12}>
            <Box>
              <Typography
                sx={{
                  fontFamily: `"Google Sans",Roboto,Arial,sans-serif`,
                  lineHeight: `1.5rem`,
                  // fontSize: `1rem;`,
                  letterSpacing: `.00625em;`,
                  fontWeight: `500;`,
                  textTransform: `uppercase;`,
                  // letterSpacing: `2px;`,
                  fontSize: `.75rem;`,
                  margin: `0;`,
                  marginTop: `-6px;`,
                  color: `rgb(95,99,104);`,
                }}
              >
                TEAMS
              </Typography>
              <Typography
                fontFamily={'"Google Sans Display",Roboto,Arial,sans-serif'}
                lineHeight={"4.75rem"}
                fontSize={{md : "4rem" , xs : "2rem"}}
                letterSpacing={0}
                fontWeight={400}
                margin={{md : "24px 0 40px -4px" , xs : "24px 0 20px -4px"}}
              >
                Find your team
              </Typography>
              <Typography
                marginY={"16px"}
                fontSize={"16px"}
                component={"p"}
                fontFamily={"Roboto,Arial,sans-serif;"}
                color={"rgb(95,99,104)"}
              >
                Together, we create access to information and build products for
                everyone. Want to be a Googler? <br></br>Find your team.
              </Typography>
              <Grid container>
                <Grid item md={12} lg={6}>
                  <TeamTypesCard
                    title={"Engineering & Tech"}
                    content={
                      "Develop the products and tools of the future for billions of users."
                    }
                  />
                </Grid>
                <Grid item md={12} lg={6}>
                  <TeamTypesCard
                    title={"Sales, Service & Support"}
                    content={
                      "Develop the products and tools of the future for billions of users."
                    }
                  />
                </Grid>
                <Grid item md={12} lg={6}>
                  <TeamTypesCard
                    title={"People"}
                    content={
                      "Find, grow, and support the people who make Google great."
                    }
                  />
                </Grid>
                <Grid item md={12} lg={6}>
                  <TeamTypesCard
                    title={"Consumer HardWare"}
                    content={"Make people's lives better through technology."}
                  />
                </Grid>
              </Grid>
            </Box>
            <Box paddingY={"50px"}>
              <Typography
                fontWeight={500}
                whiteSpace={"nowrap"}
                fontSize={"1.125rem"}
                lineHeight={"1.5rem;"}
                fontFamily={'"Google Sans",Roboto,Arial,sans-serif;'}
                color={"rgb(25,103,210);"}
              >
                View all teams
              </Typography>
            </Box>
          </Grid>
        </Grid>
        </Box>
      </Box>
    
    </>
  );
}

function TeamTypesCard({ title, content }) {
  return (
    <Box paddingY={"8px"} paddingRight={"5px"} 
    width={{md : "300px"}}
    >
      <Typography
        color={"rgb(25,103,210)"}
        lineHeight={"1.5rem;"}
        fontSize={"1.125rem;"}
        fontWeight={500}
        whiteSpace={"nowrap"}
      >
        {title}
      </Typography>
      <Typography
        marginBottom={"1rem"}
        lineHeight={"1.5rem"}
        marginY={"16px"}
        fontWeight={400}
        letterSpacing={"0.0125em"}
        fontColor={"rgb(95,99,104);"}
      >
        {content}
      </Typography>
    </Box>
  );
}
