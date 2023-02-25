import React, { useRef } from "react";
import { Col, Row, Typography, Card, Carousel, Button } from "antd";
import "../../css/style.css";
import {
  PlayCircleOutlined,
  CheckCircleOutlined,
  RightCircleOutlined,
  LeftCircleOutlined,
} from "@ant-design/icons";
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
  const ref = useRef();

  return (
    <>
      <Row
        justify="center"
        style={{ backgroundColor: darkMode ? "#16395A" : "white" }}
      >
        <Col xs={24} sm={24} md={23} lg={20} xl={16}>
          <div
            style={{
              textAlign: "center",
            }}
          >
            <Title
              style={{
                textAlign: "center",
                fontFamily: '"Roboto", sans-serif',
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
                style={{ marginBottom: "30px" }}
                className="cards-in-animation card-iframe"
                autoplay
                dots={false}
                pauseOnHover={true}
                effect="fade"
                draggable
                ref={ref}
              >
                {caruselFrames.map((ele) => (
                  <div style={contentStyle} key={ele.id}>
                    <Card>
                      <Row justify="center">
                        <Col md={1} lg={1} >
                          <Button size="small" shape="circle" icon={ <LeftCircleOutlined />} className="carousel-btn-1" onClick={()=>{ref.current.prev()}}/>

                         
                       
                        </Col>
                        <Col xs={23} sm={23} md={11} lg={11}>
                          <iframe
                            width="100%"
                            height="200px"
                            src={ele.link}
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            loading="lazy"
                          ></iframe>
                        </Col>

                        <Col xs={23} sm={23} md={11} lg={11}>
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
                        <Col  md={1} lg={1} >
                          <Button size="small"  shape="circle" className="carousel-btn-2" icon={ <RightCircleOutlined />} onClick={()=>{ref.current.next()}} />

                         
                  
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
    </>
  );
}
