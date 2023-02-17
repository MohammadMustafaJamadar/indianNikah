import React, { useEffect, useState } from "react";
import { Col, Row, Button, Typography, Card } from "antd";
import { Link, useNavigate } from "react-router-dom";
import {
  TeamOutlined,
  InfoCircleOutlined,
  ReadOutlined,
  EllipsisOutlined,
} from "@ant-design/icons";
import { iframContent } from "../../utils/iframContent";
import getRandomElements from "../../utils/randomDataicker";

const { Title, Text } = Typography;
const { Meta } = Card;

export default function GuidelinesForHome(props) {
  const { darkMode } = props;
  const [iframLinks, setIframLinks] = useState([]);
  const navigateUser = useNavigate();

  const styles = {
    darkModes : {
      darkBackGround:{ backgroundColor: darkMode ? "#16395A" : "white" },
    }
  }

  const navigateUser_GuidlinePage = () => {
    navigateUser("/guidelines/r/")
  }

  useEffect(() => {
    let isCancelled = false;
    if (!isCancelled) {
     
      const result = getRandomElements(iframContent, 4);
      setIframLinks(result);
      console.log(result);
    }

    return () => {
      isCancelled = true;
    };
  }, []);

  return (
    <>
      <Row style={styles.darkModes.darkBackGround}>
        <Col xs={24} sm={24} md={24} lg={24}>
          {" "}
          <div
            style={{
              textAlign: "center",
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
        style={styles.darkModes.darkBackGround}
      >
        <Col xs={24} sm={24} md={20} lg={20}>
          <Row justify="center" style={{ marginTop: "20px", }}>
            {iframLinks.map((ele) => (
          
              <Col
                xs={24}
                sm={24}
                md={9}
                lg={9}
                style={{ marginBottom: "10px", marginRight:"15px" }}
              >
              
                <Card
                  className="cards-in-animation "
                  cover={
                    <center>
                      <iframe
                        width="97%%"
                        height="100%"
                        src={ele.link}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        loading="lazy"
                      ></iframe>
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
                marginTop: "20px",
              }}
            >
              <div>
                <Button shape="round" size="large" className="btn-2-guidliness" onClick={navigateUser_GuidlinePage}>
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
