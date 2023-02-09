import React from "react";
import { Col, Row, Button, Typography, Card, Carousel } from "antd";
import {
  SearchOutlined,
  LeftCircleOutlined,
  RightCircleOutlined,
} from "@ant-design/icons";
import "../../css/style.css";
// import graph from "../../photos/graph.png";
// import img2 from "../../photos/img2.jpg";
import img10 from "../../photos/img10.jpg";
import { BiBookOpen } from "react-icons/bi";

const { Title, Text } = Typography;

const contentStyle = {
  height: "100%",
  width: "100%",
  lineHeight: "100%",
  textAlign: "center",
  alignItems: "center",
};

export default function HomePage(props) {
  const {darkMode} = props;


  return (
    <>
      <div className="homepage" style={{backgroundImage:`url(${img10})`}} >
        <Row
          style={{
            backgroundColor: "rgba(0,0,0,.3)",
            height: "100%",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Col xs={24} sm={24} md={4} lg={4}>
            {" "}
          </Col>
          <Col xs={24} sm={24} md={16} lg={16} style={{}}>
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
                  }}
                >
                  <Button
                    type="primary"
                    shape="round"
                    size="large"
                    style={{
                      backgroundColor: "#EACF54",
                      color: "black",
                      fontFamily: "Oswald",
                    }}
                  >
                    <SearchOutlined />
                    SEARCH PROFILE
                  </Button>{" "}
                  &nbsp;&nbsp;
                  <Button
                    type="primary"
                    shape="round"
                    size="large"
                    style={{
                      backgroundColor: "#E79311",
                      color: "black",
                      fontFamily: "Oswald",
                    }}
                  >
                    <BiBookOpen style={{ marginBottom: "-2px" }} /> &nbsp;
                    MARRIAGE GUIDELINES
                  </Button>
                </div>
              </div>
            </center>
          </Col>
          <Col xs={24} sm={24} md={4} lg={4}>
            {" "}
          </Col>
        </Row>
      </div>
      <Row style={{backgroundColor:darkMode?"#121212" : "white",}}>
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
            <Title style={{ fontFamily: "Kaushan Script", color:darkMode?"white" : "black" }}>
              About Indian Nikah{" "}
            </Title>
          </div>
          <Row style={{ textAlign: "left" }}>
            <Col xs={24} sm={24} md={1} lg={1}></Col>
            <Col xs={24} sm={24} md={10} lg={10}>
              <Text
                style={{
                  fontFamily: "Oswald",
                  fontSize: "18px",
                  lineHeight: "1.2",
                  color:darkMode?"white":"black"
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
                style={{
                  fontFamily: "Oswald",
                  color: "red",
                  fontSize: "18px",
                  lineHeight: "1.2",
                }}
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
            <Col xs={24} sm={24} md={10} lg={10}>
              <Card hoverable style={{ width: "100%" }}>
                <iframe
                  width="100%"
                  height="260px"
                  src="https://www.youtube.com/embed/zw_FZ_pH-bk"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                ></iframe>
              </Card>
              <Text
                style={{
                  fontFamily: "Oswald",
                  color: "gray",
                  fontSize: "16px",
                  lineHeight: "1.2",
                  color:darkMode?"white":"black"
                }}
              >
                How it works | Mobile App | Features | Marriage guidelines |
                Website in Hindi Urdu | Jobs (Watch in full screen)
              </Text>
            </Col>
            <Col xs={24} sm={24} md={1} lg={1}></Col>
          </Row>
        </Col>
      </Row>
      <Row
        style={{
          background: darkMode? "#121212" :
            "linear-gradient(332deg, RGB(231, 132, 134)  21%, RGB(223, 64, 103)  83%)",
        }}
      >
        <Col xs={24} sm={24} md={4} lg={4}></Col>
        <Col xs={24} sm={24} md={16} lg={16}>
          <Title
            style={{
              textAlign: "center",
              fontFamily: "Kaushan Script",
              marginTop: "25px",
              color: darkMode ? "white" : "black"
            }}
          >
            Success Stories
          </Title>
          <br />
          <Row>
            <Col xs={24} sm={24} md={2} lg={2}></Col>
            <Col xs={24} sm={24} md={18} lg={18}>
              <Carousel
                dots={true}
                pauseOnHover={true}
                pauseOnDotsHover={true}
                effect="fade"
                draggable
              >
                <div style={contentStyle}>
                <Card hoverable={true}>
                    <Row>
                      <Col xs={24} sm={24} md={12} lg={12}>
                  
                      <iframe
                          width="100%"
                          height="245"
                          src="https://www.youtube.com/embed/do0kj_a7dvA"
                          title="YouTube video player"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        ></iframe>
                      
                      </Col>
                      <Col xs={24} sm={24} md={12} lg={12}>
                        {/* <Text>Hello Mj</Text> */}
                      </Col>
                    </Row>
                    </Card>
                 
                </div>
                <div style={contentStyle}>
                  <iframe
                    width="100%"
                    height="245"
                    src="https://www.youtube.com/embed/iXgr8zsqLMM"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  ></iframe>
                </div>
                <div style={contentStyle}>
                  <iframe
                    width="100%"
                    height="245"
                    src="https://www.youtube.com/embed/n0NoXbHf-kc"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  ></iframe>
                </div>
                <div style={contentStyle}>
                  <iframe
                    width="100%"
                    height="245"
                    src="https://www.youtube.com/embed/lfUpLHnmtFw"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  ></iframe>
                </div>
                <div style={contentStyle}>
                  <iframe
                    width="100%"
                    height="245"
                    src="https://www.youtube.com/embed/0UhyS4W_Ddk"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  ></iframe>
                </div>
              </Carousel>
            </Col>
            <Col xs={24} sm={24} md={2} lg={2}></Col>
          </Row>
        </Col>
        <Col xs={24} sm={24} md={4} lg={4}>
          {" "}
        </Col>
      </Row>
    </>
  );
}
