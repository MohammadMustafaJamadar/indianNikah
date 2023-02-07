import React from "react";
import "../../css/style.css";
import { Button, Paper } from "@mui/material";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";

import Grid from "@mui/material/Grid";
import Carousel from "react-material-ui-carousel";

import { carouselData, carouselIframe } from "../../utils/carouselData";

const HomePage = () => {
  console.log(carouselData);
  return (
    <div className="home_conatiner">
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
          <strong>
            <h2 className="details">
              Free Indian Muslim Matrimony (Non-Profit)
            </h2>
          </strong>
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
      <div className="conatinter_2">
        <h1>
          <center>About IndiaNikah</center>
        </h1>
        <div className="contain_2">
          <Grid container direction="row" columnSpacing={2} rowSpacing={2}>
            <Grid item xs={12} md={6} lg={6} sm={12}>
              {" "}
              <div className="left">
                <p>
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
                </p>
                <p
                  style={{
                    color: "red",
                  }}
                >
                  Note - Paid marriage bureaus/agents/brokers are not allowed to
                  use this site. We do not do profile background verification We
                  do not have any paid personalised or special service. No
                  office location, everything is online.
                </p>
              </div>
            </Grid>
            <Grid item xs={12} md={6} lg={6} sm={12}>
              <div className="right">
                <iframe
                  title="nikah.com"
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/embed/zw_FZ_pH-bk"
                  loading="lazy"
                  allowfullscreen
                ></iframe>
                <div className="iframe_text">
                  <p>
                    How it works | Mobile App | Features | Marriage guidelines |
                  </p>
                  <p>Website in Hindi Urdu | Jobs (Watch in full screen)</p>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>

        <div className="container_3">
          <h1 className="conatiner_3heading">
            <center>Success Stories</center>
          </h1>
          <Grid container direction="row">
            <Grid item xs={12} sm={12} md={2} lg={2}></Grid>
            <Grid item xs={12} sm={12} md={8} lg={8}>
              <Carousel>
                {carouselData.map((data, i) => {
                  return (
                    <>
                      <Paper className="carousel_items">
                        <div className="iframes">{carouselIframe(data.id)}</div>
                        <div className="data">
                          <h1>{data.title}</h1>
                          <pre>{data.discription}</pre>
                        </div>
                      </Paper>
                    </>
                  );
                })}
              </Carousel>
            </Grid>
            <Grid item xs={12} sm={12} md={2} lg={2}></Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
