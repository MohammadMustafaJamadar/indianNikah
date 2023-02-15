import React, { useEffect, useState } from "react";
import { Col, Row, Button, Typography, Card } from "antd";
import { Link } from "react-router-dom";
import {
  TeamOutlined,
  InfoCircleOutlined,
  ReadOutlined,
  EllipsisOutlined,
} from "@ant-design/icons";
import iframContent from "../../utils/iframContent";

const { Title, Text } = Typography;
const { Meta } = Card;

export default function GuidelinesForHome(props) {
  const { darkMode } = props;
  const [iframLinks, setIframLinks] = useState([]);

  useEffect(() => {
    const getRandomElements = (array, elements) => {
      const result = [];
      for (let i = 0; i < elements; i++) {
        result.push(array[Math.floor(Math.random() * array.length)]);
      }
      return result;
    };
    const result = getRandomElements(iframContent, 4);
    setIframLinks(result);
  }, []);

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
          <Row justify="space-around" style={{ marginTop: "20px" }}>
            {iframLinks.map((ele) => (
              <Col
                xs={24}
                sm={24}
                md={9}
                lg={9}
                style={{ marginBottom: "10px" }}
              >
                 <a href={ele.link} target="_blank" rel="noopener noreferrer">
                <Card
                  className="cards-in-animation "
                  cover={
                    <center>
                     
                        <img
                          src={ele.image}
                          alt="No.....!"
                          style={{ width: "70%" }}
                          loading="lazy"
                        />
                    
                    </center>
                  }
                  actions={[
                    <Link aria-current="page" to="/guidelines/r/">
                      View more{" "}
                      <EllipsisOutlined className="react-dots-icons" />
                    </Link>,
                  ]}
                  title={ele.title}
                  hoverable
                  key={ele.id}
                >
                  <Meta
                    title={ele.metaTitle}
                    className="meta-discriptions-titles"
                    description={ele.metaDiscription}
                    key={ele.id}
                  ></Meta>
                </Card>
                  </a>
              </Col>
            ))}
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
