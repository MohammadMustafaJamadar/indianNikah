import React from "react";
import { Col, Row, Typography, Card, Carousel } from "antd";
import "../../css/style.css";
import { PlayCircleOutlined, CheckCircleOutlined } from "@ant-design/icons";
import { caruselFrames } from "../../utils/iframContent";

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
                {caruselFrames.map((ele) => (
                  <div style={contentStyle}>
                    <Card>
                      <Row>
                        <Col xs={24} sm={24} md={12} lg={12}>
                          <iframe
                            width="100%"
                            height="200px"
                            src={ele.link}
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            loading="lazy"
                          ></iframe>
                        </Col>

                        <Col xs={24} sm={24} md={12} lg={12}>
                          <Title
                            level={4}
                            style={{ marginLeft: "10px", marginTop: "0px" }}
                          >
                            {ele.title}
                          </Title>
                          <Text style={{ marginLeft: "10px" }}>
                            {ele.shortDiscription}
                          </Text>
                          <br />
                          <Text style={{ marginLeft: "10px" }}>
                            {ele.discriptions}
                          </Text>
                        </Col>
                      </Row>
                    </Card>
                  </div>
                ))}
              </Carousel>
            </Col>
          </Row>
        </Col>
      </Row>
      <br /> <br />
    </>
  );
}
