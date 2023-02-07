import React from "react";
import "../../css/style.css";
import { Button, Paper, Card, CardContent, Typography } from "@mui/material";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import Grid from "@mui/material/Grid";
import Carousel from "react-material-ui-carousel";

import { carouselData, carouselIframe } from "../../utils/carouselData";

const theme = createTheme();

theme.typography.subtitle1 = {
  textAlign: "center",
  fontFamily: "roboto,sans-serif",
  fontWeight: 300,
  fontSize: "1rem",
  lineHeight: 1.5,
  color: "#605E60",

  [theme.breakpoints.up("md")]: {
    textAlign: "left",
    fontFamily: "roboto,sans-serif",
  },
};

const HomePage = () => {
  return (
    <div className="home_conatiner" style={{ backgroundColor: "#F7F8F3" }}>
      <div className="homepage">
        <div
          style={{
            backgroundColor: "rgba(0,0,0,.3)",
            height: "100%",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <h1 className="details">
            <strong>
              Free Indian Muslim Matrimony (Non-Profit)
              <br />
              <hr
                style={{
                  width: "25%",
                  height: "3px",
                  boxShadow: "0 10px 10px -10px",
                  border: "0",
                  backgroundColor: "white",
                }}
              />
            </strong>
          </h1>

          <div className="button">
            <Button variant="contained" className="search_profile">
              {" "}
              <SearchRoundedIcon />
              search Profile{" "}
            </Button>
            <Button className="login" variant="contained">
              <LoginOutlinedIcon /> Login
            </Button>
          </div>
        </div>
      </div>
      <br />
      <br />
      <Grid container direction="row">
        <Grid item xs={12} sm={12} md={2} lg={2}></Grid>
        <Grid item xs={12} sm={12} md={8} lg={8}>
          <h1
            style={{
              color: "#4E4F4F",
              fontSize: "130%",
              fontWeight: 700,
              marginTop: 0,
            }}
          >
            <center>
              About IndiaNikah <hr style={{ width: "15%" }} />{" "}
            </center>
          </h1>
          <Grid container direction="row" rowSpacing={2} columnSpacing={2}>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <ThemeProvider theme={theme}>
                <Typography variant="subtitle1">
                  India Nikah is India's 100% free
                  matrimony/shaadi/rishta/rishtey website for Indian Muslims
                  covering all Indian states (Maharashtra, Karnataka etc) (All
                  Maslak, biradari, education backgrounds (doctor engineer etc )
                  and madarasa pass outs (Alim/hafiz/mufti)). This site also
                  offers second marraige proposals. Also for Indians staying
                  abroad (NRIs). We also try to help regarding jobs, rental
                  accommodation and regarding Share Market investment awareness.
                  This is an effort to make your efforts easy. This site also
                  offers guidelines (Go to guidelines section) on pre and post
                  marriage related topics in the form of YouTube videos of
                  experts from all maktab fikr(Sects). Uploading profile pics
                  are not mandatory. You can directly Open WhatsApp of the
                  profile you are interested in and start communication. Please
                  login and stay active on our site to keep your profile on top
                  in search results.
                </Typography>
              </ThemeProvider>
              <ThemeProvider theme={theme}>
                <Typography variant="subtitle1" color="#E97683">
                  Note - Paid marriage bureaus/agents/brokers are not allowed to
                  use this site. We do not do profile background verification We
                  do not have any paid personalised or special service. No
                  office location, everything is online.
                </Typography>
              </ThemeProvider>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <Card>
                <CardContent>
                  <iframe
                    title="nikah.com"
                    width="100%"
                    height="245"
                    src="https://www.youtube.com/embed/zw_FZ_pH-bk"
                    loading="lazy"
                  ></iframe>
                </CardContent>
              </Card>
              <br />

              <Typography
                variant="subtitle1"
                textAlign="center"
                fontFamily="Roboto sans-serif"
                fontWeight={700}
                color="#4F4E4F"
              >
                How it works | Mobile App | Features | Marriage guidelines
                |Website in Hindi Urdu | Jobs (Watch in full screen)
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={2} lg={2}></Grid>
      </Grid>
      <br />
      <br />
      <Grid container direction="row" style={{ backgroundColor: "#df3768" }}>
        <Grid item xs={12} sm={12} md={2} lg={2} ></Grid>
        <Grid item xs={12} sm={12} md={8} lg={8} >
          <br />
          <br />
          <div>
            <Typography
              variant="h4"
              textAlign="center"
              fontFamily="Roboto sans-serif"
              fontWeight={700}
              color="white"
            >
              Success Stories
              <hr style={{ width: "30%", backgroundColor: "#df3768" }} />
            </Typography>
          </div>
          <div>
            <Typography variant="subtitle1" color="white" textAlign="center" >
              Below are few of our success stories Alhamdulillah
            </Typography>
          </div>
                    <br /><br />
          <Grid container direction="row" > 
              <Grid item xs={12} sm={12} md={1} lg={1} ></Grid>
              <Grid xs={12} sm={12} md={10} lg={10} >
                <Carousel>
                  {carouselData.map((data, i) => {
                    return (
                      <>
                        <Grid
                          container
                          direction="row"
                          rowSpacing={2}
                          columnSpacing={2}
                          
                        >
                          <Grid item xs={12} sm={12} md={12} lg={12}  >
                            <Paper key={data.id}>
                              <Grid container direction="row">
                                <Grid item xs={12} sm={12} md={6} lg={6}>
                                  <Card style={{ width: "100%" }}>
                                    <CardContent>
                                      {carouselIframe(data.id)}
                                    </CardContent>
                                  </Card>
                                </Grid>
                                <Grid item xs={12} sm={12} md={6} lg={6}>
                                  <Grid container direction="row">
                                    <Grid
                                      item
                                      xs={12}
                                      sm={12}
                                      md={1}
                                      lg={1}
                                      
                                    ></Grid>
                                    <Grid item xs={12} sm={12} md={11} lg={11}>
                                      <div style={{ width: "100%" }}>
                                        <h1>{data.title}</h1>
                                        <pre>{data.discription}</pre>
                                      </div>
                                    </Grid>
                                  </Grid>
                                </Grid>
                              </Grid>
                            </Paper>
                          </Grid>
                        </Grid>
                      </>
                    );
                  })}
                </Carousel>
              </Grid>
              <Grid xs={12} sm={12} md={1} lg={1} ></Grid>
          </Grid>
        </Grid>
        <br />
        <Grid item xs={12} sm={12} md={2} lg={2} ></Grid>
      </Grid>
    </div>
  );
};

export default HomePage;
