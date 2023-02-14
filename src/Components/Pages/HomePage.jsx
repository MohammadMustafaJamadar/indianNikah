import React from "react";
import { Col, Row, Button, Typography, Card } from "antd";
import { SearchOutlined, ReadOutlined } from "@ant-design/icons";
import "../../css/style.css";
import img6 from "../../photos/img6.jpg";
import { useNavigate,  } from "react-router-dom";
import CarouselForHome from "../Home Components/CarouselForHome";
import GuidelinesForHome from "../Home Components/GuidelinesForHome";
// import design from "../../images/design.png"

const { Title, Text } = Typography;

export default function HomePage(props) {
  const { darkMode } = props;

console.log(darkMode)

  const navigateUser = useNavigate();

  const navigate_Search = (event) => {
    event.preventDefault();
    navigateUser("profile/");
  };

  const navigate_Guideliness = (event) => {
    event.preventDefault();
    navigateUser("guidelines/r/");
  };

  return (
    <>
      <div className="homepage" style={{ backgroundImage: `url(${img6})` }}>
      <div className="cube"></div>
       <div className="cube"></div>
       <div className="cube"></div>
       <div className="cube"></div>
      <div className="cube"></div>
        <Row
          style={{
            backgroundColor: "rgba(0,0,0,.3)",
            height: "100%",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
          justify="center"
         >
          <Col xs={24} sm={24} md={16} lg={16}>
            <center>
              <div
                style={{
                  borderRadius: "0px 100px 0px 100px",
                  backgroundColor: "#b1b1ae33",
                  width: "50%",
                }}
              >
                <div>
                  <Title
                    level={2}
                    style={{
                      color: "black",
                      textAlign: "center",
                      fontFamily: "Kaushan Script",
                      fontWeight: "bold",
                      fontStyle: "italic",
                      backgroundColor: "transparent",
                    }}
                    className="animate__animated animate__backInDown"
                  >
                    Welcome to Indian Nikah.com
                    <hr style={{ width: "20%" }} />
                  </Title>
                </div>

                <div
                  style={{
                    textAlign: "center",
                    alignItems: "center",
                    justifyContent: "center",
                    display:"flex"
                  }}
                 >
                  <Button
                    onClick={navigate_Search}
                    type="primary"
                    htmlType={"submit"}
                    shape="round"
                    size="large"
                    className="btn-1-search"
                  >
                    <SearchOutlined />
                    SEARCH PROFILE
                  </Button>{" "}
                  &nbsp;&nbsp;
                  <Button
                    type="primary"
                    shape="round"
                    size="large"
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
      <Row justify="center" style={{ backgroundColor: darkMode ? "#001F3D" : "white" }}>
        <br />
        <br /> <br />
        <Col
          xs={24}
          sm={24}
          md={24}
          lg={24}
          style={{ textAlign: "center", marginTop: "10px" }}
        >
          <div>
            <Title
              className="about-text-section"
              style={{
                color: darkMode ? "white" : "black",
              }}
            >
              About Indian Nikah{" "}
            </Title>
          </div>
          <Row  justify="center" style={{ textAlign: "left" }}>
          
            <Col xs={24} sm={24} md={8} lg={8}>
              <Text
                className="about-discription-1"
                style={{
                  color: darkMode ? "white" : "#84817a",
                }}
              >
                India Nikah is India's 100% free matrimony/shaadi/rishta/rishtey
                website for Indian Muslims covering all Indian states
                (Maharashtra, Karnataka etc) (All Maslak, biradari, education
                backgrounds (doctor engineer etc ) and madarasa pass outs
                (Alim/hafiz/mufti)). This site also offers second marraige
                proposals. Also for Indians staying abroad (NRIs). We also try
                to help regarding jobs, rental accommodation and regarding Share
                Market investment awareness. This is an effort to make your
                efforts easy. This site also offers guidelines (Go to guidelines
                section) on pre and post marriage related topics in the form of
                YouTube videos of experts from all maktab fikr(Sects). Uploading
                profile pics are not mandatory. You can directly Open WhatsApp
                of the profile you are interested in and start communication.
                Please login and stay active on our site to keep your profile on
                top in search results.
              </Text>
              <br />
              <Text
              className="about-discription-2"
              >
                Note - Paid marriage bureaus/agents/brokers are not allowed to
                use this site. We do not do profile background verification We
                do not have any paid personalised or special service. No office
                location, everything is online.
              </Text>
            </Col>
            <Col xs={24} sm={24} md={1} lg={1}>
              {" "}
            </Col>
            <Col xs={24} sm={24} md={8} lg={8}>
              <Card
              className="cards-in-animation "
                hoverable
                style={{
                  width: "100%",
                }}
              >
                <iframe
                  width="100%"
                  height="260px"
                  src="https://www.youtube.com/embed/zw_FZ_pH-bk"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                ></iframe>
              </Card>
              <br />
              <br />
              <Text
                style={{
                  fontFamily: "roboto,sans-serif",
                  fontSize: "16px",
                  lineHeight: "1.2",
                  color: darkMode ? "white" : "#84817a",
                }}
              >
                How it works | Mobile App | Features | Marriage guidelines |
                Website in Hindi Urdu | Jobs (Watch in full screen)
              </Text>
              <br />
              <br />
            </Col>
        
          </Row>
        </Col>
        
      </Row>

      <GuidelinesForHome darkMode={darkMode}/>

      <CarouselForHome darkMode={darkMode} />
    </>
  );
}
