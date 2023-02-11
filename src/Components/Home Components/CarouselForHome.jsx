import React from "react";
import { Col, Row, Typography, Card, Carousel } from "antd";
import "../../css/style.css";
import { PlayCircleOutlined, CheckCircleOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

const contentStyle = {
  height: "100%",
  width: "100%",
  lineHeight: "100%",
  textAlign: "center",
  alignItems: "center",
};
export default function CarouselForHome(props) {
  const { darkMode } = props;

  return (
    <>
      <Row
        justify="center"
        style={{ backgroundColor: darkMode ? "#16395A" : "white" }}
      >
        <Col xs={24} sm={24} md={16} lg={16}>
          <div
            style={{
              textAlign: "center",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Title
              style={{
                textAlign: "center",
                fontFamily: "Kaushan Script",
                marginTop: "25px",
                color: darkMode ? "white" : "black",
              }}
            >
             <CheckCircleOutlined /> Success Stories
              <hr style={{ width: "50%" }} />
            </Title>
            <Text
              style={{
                textAlign: "center",
                fontFamily: "Source Code Pro, monospace",
                color: darkMode ? "white" : "black",
              }}
            >
              <PlayCircleOutlined style={{ marginBottom: "-2px" }} />
              Below are few of our success stories Alhamdulillah
            </Text>
          </div>
          <br />
          <Row justify="center">
            <Col xs={24} sm={24} md={18} lg={18}>
              <Carousel
                className="cards-in-animation "
                style={{
                  boxShadow: ` 1.6px 0px 21.2px rgba(0, 0, 0, 0.038),
              3.4px 0px 43.9px rgba(0, 0, 0, 0.042),
              5.8px 0px 68.5px rgba(0, 0, 0, 0.047),
              9.4px 0px 94.9px rgba(0, 0, 0, 0.053),
              16.5px 0px 121.4px rgba(0, 0, 0, 0.061),
              41px 0px 143px rgba(0,0,0,0.07)`,
                }}
                autoplay
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
              <br /> <br />
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
}
