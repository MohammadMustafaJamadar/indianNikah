import React, { lazy, Suspense, useEffect, useState } from "react";
import { Col, Row, Button, Typography, Card } from "antd";
import { SearchOutlined, ReadOutlined } from "@ant-design/icons";
import "../../css/style.css";
import img20 from "../../photos/img20.jpg";
import imagesArray from "../../utils/images";
import { useNavigate } from "react-router-dom";
import Marquee from "react-fast-marquee";
import getRandomElements from "../../utils/randomDataPicker";

const CarouselForHome = lazy(() =>
  import("../Home Components/CarouselForHome")
);
const GuidelinesForHome = lazy(() =>
  import("../Home Components/GuidelinesForHome")
);
const NewProfilesOnHome = lazy(() =>
  import("../Home Components/NewProfilesOnHome")
);

const { Title, Text } = Typography;

export default function HomePage(props) {
  const { colors } = props;
  const [image, setImage] = useState(img20);

  const styles = {
    backGroundStyleForBtn: {
      backgroundColor: colors.green
        ? "#48BA78"
        : colors.blue
        ? "#4D8FF6"
        : colors.purple
        ? "#9F7AEB"
        : colors.darkMode
        ? "#df3768"
        : "#df3768",
    },
    darkBackgroundColor: {
      backgroundColor: colors.darkMode ? "#001F3D" : "white",
    },
    darkText: {
      aboutSection: {
        color: colors.darkMode ? "white" : "#4f4f4f",
      },
      allText: {
        color: colors.darkMode ? "white" : "black",
      },
      aboutDiscriptionSection: {
        color: colors.darkMode ? "white" : "#84817a",
      },
    },
  };

  useEffect(() => {
    let isCancelled = false;
    let intervalId;
    const result = getRandomElements(imagesArray, 1);

    if (!isCancelled) {
      intervalId = setInterval(() => {
        setImage(result);
      }, 10000);
    }
    return () => {
      isCancelled = true;
      clearInterval(intervalId);
    };
  }, [image]);

  const navigateUser = useNavigate();

  const navigate_Search = (event) => {
    event.preventDefault();
    navigateUser("/profiles/");
  };

  const navigate_Guideliness = (event) => {
    event.preventDefault();
    navigateUser("guidelines/r/");
  };

  return (
    <>
      <div className="homepage" style={{ backgroundImage: `url(${image})` }}>
        <div
          style={{
            color: "white",
            backgroundColor: "#263238",
            fontSize: "20px",
            height: "50px",
          }}
        >
          <Marquee direction="left" speed={50} gradient={false}>
            <div
              style={{
                fontFamily: '"Roboto", sans-serif',
                marginTop: "10px",
              }}
            >
              "Marry the single people from among you and the righteous slaves
              and slave-girls. If you are poor, Allah (SwT) will make you rich
              through His favour; and Allah (SwT) is Bountiful, All-Knowing."
              (24:32).
            </div>
          </Marquee>
        </div>

        <Row
          style={{
            backgroundColor: "rgba(0,0,0,.3)",
            height: "100%",
            width: "100%",
            alignItems: "center",
          }}
          justify="center"
        >
          <Col xs={24} sm={24} md={16} lg={16}>
            <center>
              <div>
                <div className="tracking-in-expand">
                  <Title level={3} id="heading-title">
                    Free Indian Muslim Matrimony (Non-Profit)
                    <hr style={{ width: "20%" }} />
                  </Title>
                </div>

                <div
                  style={{
                    textAlign: "center",
                    justifyContent: "center",
                    display: "flex",
                  }}
                >
                  <Button
                    onClick={navigate_Search}
                    htmlType={"submit"}
                    shape="round"
                    size="medium"
                    style={styles.backGroundStyleForBtn}
                    className="btn-1-search"
                  >
                    <SearchOutlined />
                    SEARCH PROFILE
                  </Button>{" "}
                  &nbsp;&nbsp;
                  <Button
                    shape="round"
                    size="medium"
                    className="btn-2-guidliness"
                    onClick={navigate_Guideliness}
                  >
                    <ReadOutlined style={{ marginBottom: "-2px" }} /> &nbsp;
                    MARRIAGE GUIDELINES
                  </Button>
                </div>
              </div>
            </center>
          </Col>
        </Row>
      </div>
      <Row justify="center" style={styles.darkBackgroundColor}>
        <br />
        <br /> <br />
        <Col
          xs={22}
          sm={22}
          md={24}
          lg={24}
          style={{ textAlign: "center", marginTop: "10px" }}
        >
          <div style={{ marginBottom: "40px" }}>
            <Title
              level={3}
              className="about-text-section"
              style={styles.darkText.aboutSection}
            >
              About IndiaNikah{" "}
            </Title>
          </div>
        </Col>
        <Row justify="center" className="discription-about-row">
          <Col xs={22} sm={22} md={22} lg={12} xl={8}>
            <Text
              className="about-discription-1"
              style={styles.darkText.aboutDiscriptionSection}
            >
              India Nikah is India's 100% free matrimony/shaadi/rishta/rishtey
              website for Indian Muslims covering all Indian states
              (Maharashtra, Karnataka etc) (All Maslak, biradari, education
              backgrounds (doctor engineer etc ) and madarasa pass outs
              (Alim/hafiz/mufti)). This site also offers second marraige
              proposals. Also for Indians staying abroad (NRIs). We also try to
              help regarding jobs, rental accommodation and regarding Share
              Market investment awareness. This is an effort to make your
              efforts easy. This site also offers guidelines (Go to guidelines
              section) on pre and post marriage related topics in the form of
              YouTube videos of experts from all maktab fikr(Sects). Uploading
              profile pics are not mandatory. You can directly Open WhatsApp of
              the profile you are interested in and start communication. Please
              login and stay active on our site to keep your profile on top in
              search results.
            </Text>
            <br />
            <Text className="about-discription-2">
              Note - Paid marriage bureaus/agents/brokers are not allowed to use
              this site. We do not do profile background verification We do not
              have any paid personalised or special service. No office location,
              everything is online.
            </Text>
          </Col>
          <Col xs={24} sm={24} md={1} lg={1}>
            {" "}
          </Col>
          <Col xs={22} sm={22} md={22} lg={11} xl={8}>
            <Card
              className="cards-in-animation card-iframe "
              hoverable
              bordered={true}
              size="small"
              style={{ height: 285, alignItems: "center" }}
            >
              <iframe
                width="100%"
                height="260"
                src="https://www.youtube.com/embed/a8U6yKS3ydg"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                loading="lazy"
              ></iframe>
            </Card>
            <br />
            <br />
            <div
              className="div-download-discription"
              style={{ textAlign: "center" }}
            >
              <Text
                style={{
                  fontFamily: "roboto,sans-serif",
                  fontWeight: "700",
                  fontSize: "16px",
                  lineHeight: "1.2",
                  color: styles.darkText.allText.color,
                }}
              >
                How it works | Mobile App | Features | Marriage guidelines |
                Website in Hindi Urdu | Jobs (Watch in full screen)
              </Text>
            </div>
            <br />
            <br />
          </Col>
        </Row>
      </Row>
      <Suspense>
        <GuidelinesForHome darkMode={colors.darkMode} colors={colors} />
        <NewProfilesOnHome darkMode={colors.darkMode} colors={colors} />
        <CarouselForHome darkMode={colors.darkMode} colors={colors} />
      </Suspense>
    </>
  );
}
