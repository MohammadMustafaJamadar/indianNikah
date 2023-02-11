import React from "react";
import { Col, Row, Button, Typography, Card } from "antd";
import { Link } from "react-router-dom";
import {
  TeamOutlined,
  InfoCircleOutlined,
  ReadOutlined,
  EllipsisOutlined,
} from "@ant-design/icons";

const { Title, Text } = Typography;
const { Meta } = Card;

export default function GuidelinesForHome(props) {
  const { darkMode } = props;

  return (
    <>
      <Row style={{ backgroundColor: darkMode ? "#16395A" : "white" }}>
        <Col xs={24} sm={24} md={24} lg={24}>
          {" "}
          <div
            style={{
              textAlign: "center",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Title
              level={3}
              style={{
                fontFamily: "kaushan script",
                color: darkMode ? "white" : "black",
              }}
            >
              <InfoCircleOutlined style={{ marginBottom: "-5px" }} /> Marriage
              Guidelines
              <hr style={{ width: "15%" }} />
            </Title>
          </div>
          <div
            style={{
              textAlign: "center",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontFamily: "Source Code Pro, monospace",
                color: darkMode ? "white" : "black",
              }}
            >
              <TeamOutlined style={{ marginBottom: "-2px" }} />
              Total 56289 users visited this page
            </Text>
            <br />
            <br />
          </div>
        </Col>
      </Row>
      <Row
        justify="center"
        style={{ backgroundColor: darkMode ? "#16395A" : "white" }}
      >
        <Col xs={24} sm={24} md={20} lg={20}>
          <Row
            justify="space-around"
            align="middle"
            style={{ marginTop: "20px" }}
          >
            <Col xs={24} securitym={24} md={4} lg={4}>
              <Card
                className="cards-in-animation "
                cover={
                  <iframe
                    className="iframe-card-guidline"
                    height="100%"
                    src="https://www.youtube.com/embed/4T3W0J0n0S8"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  ></iframe>
                }
                actions={[
                  <Link aria-current="page" to="/guidelines/r/">
                    View more <EllipsisOutlined className="react-dots-icons" />
                  </Link>,
                ]}
                title="Rishtey kyun nahi hore?"
                hoverable
              >
                <Meta
                  title="Rishtey bahot hai par?"
                  className="meta-discriptions-titles"
                  description=" रिश्ते बहोत है पर ?"
                ></Meta>
              </Card>
              <br />
            </Col>
            <Col xs={24} securitym={24} md={4} lg={4}>
              <Card
                className="cards-in-animation "
                cover={
                  <iframe
                    className="iframe-card-guidline"
                    height="100%"
                    src="https://www.youtube.com/embed/pLvJlJ-f37A"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  ></iframe>
                }
                actions={[
                  <Link aria-current="page" to="/guidelines/r/">
                    View more <EllipsisOutlined className="react-dots-icons" />
                  </Link>,
                ]}
                title="Shaadi ki umar, der se shaadi"
                hoverable
              >
                <Meta
                  title="Side effects of late marrige "
                  className="meta-discriptions-titles"
                  description="देर से शादी करने के नुक्सान ?"
                ></Meta>
              </Card>
              <br />
            </Col>
            <Col xs={24} securitym={24} md={4} lg={4}>
              <Card
                className="cards-in-animation "
                cover={
                  <iframe
                    className="iframe-card-guidline"
                    height="100%"
                    src="https://www.youtube.com/embed/LZvaV5UpPfM"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  ></iframe>
                }
                actions={[
                  <Link aria-current="page" to="/guidelines/r/">
                    View more <EllipsisOutlined className="react-dots-icons" />
                  </Link>,
                ]}
                title="Shaadi ki tayyari"
                hoverable
              >
                <Meta
                  title="Tohfa Dulha"
                  className="meta-discriptions-titles"
                  description="तोहफा दुल्हा"
                ></Meta>
              </Card>
              <br />
            </Col>
            <Col xs={24} securitym={24} md={4} lg={4}>
              <Card
                className="cards-in-animation "
                cover={
                  <iframe
                    className="iframe-card-guidline"
                    height="100%"
                    src="https://www.youtube.com/embed/x3X1SDo3K74"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  ></iframe>
                }
                actions={[
                  <Link aria-current="page" to="/guidelines/r/">
                    View more <EllipsisOutlined className="react-dots-icons" />
                  </Link>,
                ]}
                title="Biradri mein shaadi"
                hoverable
              >
                <Meta
                  title="One Muslim Police officer question"
                  className="meta-discriptions-titles"
                  description="एक मुस्लिम अफसर का सवाल"
                ></Meta>
              </Card>
              <br />
            </Col>
          </Row>
          <Row>
            <Col
              xs={24}
              sm={24}
              md={24}
              lg={24}
              style={{
                textAlign: "center",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "20px",
              }}
            >
              <div>
                <Button
                  type="primary"
                  shape="round"
                  size="large"
                  className="btn-2-guidliness"
                >
                  <ReadOutlined style={{ marginBottom: "-2px" }} /> &nbsp;
                  MARRIAGE GUIDELINES
                </Button>
              </div>
            </Col>
          </Row>
        </Col>
        <br />
      </Row>
    </>
  );
}
