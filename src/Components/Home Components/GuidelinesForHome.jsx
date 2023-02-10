import React from "react";
import { Col, Row, Button, Typography, Card, } from "antd";
import { ImInfo } from "react-icons/im";
import { BsFillPeopleFill } from "react-icons/bs";
import { TfiMoreAlt } from "react-icons/tfi";
import { BiBookOpen } from "react-icons/bi";
import { Link } from "react-router-dom";

const { Title, Text } = Typography;
const { Meta } = Card;

export default function GuidelinesForHome() {
  return (
    <>
      <Row style={{ backgroundColor: "white" }}>
        <Col xs={24} sm={24} md={24} lg={24}>
          {" "}
          <div
            style={{
              textAlign: "center",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Title level={3} style={{ fontFamily: "kaushan script" }}>
              <ImInfo style={{marginBottom:"-5px"}} /> Marriage Guidelines
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
            <Text style={{ fontFamily: "Source Code Pro, monospace" }}>
              <BsFillPeopleFill style={{marginBottom:"-2px"}}/>
              Total 56289 users visited this page
            </Text>
            <br />
            <br />
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={24} sm={24} md={2} lg={2}>
          {" "}
        </Col>
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
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/4T3W0J0n0S8"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  ></iframe>
                }
                actions={[
                  <Link aria-current="page" to="/guidelines/r/">
                    View more <TfiMoreAlt style={{ marginBottom: "-6px" }} />
                  </Link>,
                ]}
                title="Rishtey kyun nahi hore?"
                hoverable
              >
                <Meta
                  title="Rishtey bahot hai par?"
                  style={{ fontFamily: "Oswald", textAlign: "center" }}
                  description=" रिश्ते बहोत है पर ?"
                ></Meta>
              </Card>
            </Col>
            <Col xs={24} securitym={24} md={4} lg={4}>
              <Card
              className="cards-in-animation "
                cover={
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/pLvJlJ-f37A"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  ></iframe>
                }
                actions={[
                  <Link aria-current="page" to="/guidelines/r/">
                    View more <TfiMoreAlt style={{ marginBottom: "-6px" }} />
                  </Link>,
                ]}
                title="Shaadi ki umar, der se shaadi"
                hoverable
              >
                <Meta
                  title="Side effects of late marrige "
                  style={{ fontFamily: "Oswald", textAlign: "center" }}
                  description="देर से शादी करने के नुक्सान ?"
                ></Meta>
              </Card>
            </Col>
            <Col xs={24} securitym={24} md={4} lg={4}>
              <Card
              className="cards-in-animation "
                cover={
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/LZvaV5UpPfM"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  ></iframe>
                }
                actions={[
                  <Link aria-current="page" to="/guidelines/r/">
                    View more <TfiMoreAlt style={{ marginBottom: "-6px" }} />
                  </Link>,
                ]}
                title="Shaadi ki tayyari"
                hoverable
              >
                <Meta
                  title="Tohfa Dulha"
                  style={{ fontFamily: "Oswald", textAlign: "center" }}
                  description="तोहफा दुल्हा"
                ></Meta>
              </Card>
            </Col>
            <Col xs={24} securitym={24} md={4} lg={4}>
              <Card
              className="cards-in-animation "
                cover={
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/x3X1SDo3K74"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  ></iframe>
                }
                actions={[
                  <Link aria-current="page" to="/guidelines/r/">
                    View more <TfiMoreAlt style={{ marginBottom: "-6px" }} />
                  </Link>,
                ]}
                title="Biradri mein shaadi"
                hoverable
              >
                <Meta
                  title="One Muslim Police officer question"
                  style={{ fontFamily: "Oswald", textAlign: "center" }}
                  description="एक मुस्लिम अफसर का सवाल"
                ></Meta>
              </Card>
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
                  <BiBookOpen style={{ marginBottom: "-2px" }} /> &nbsp;
                  MARRIAGE GUIDELINES
                </Button>
              </div>
            </Col>
          </Row>
        </Col>
        <Col xs={24} sm={24} md={2} lg={2}></Col>
      </Row>
    </>
  );
}
