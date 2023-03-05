import React, { useEffect, useState } from "react";
import { Col, Row, Button, Typography, Card } from "antd";
import { useNavigate } from "react-router-dom";
import {
  TeamOutlined,
  InfoCircleOutlined,
  ReadOutlined,
} from "@ant-design/icons";
import { iframContent } from "../../utils/iframContent";
import getRandomElements from "../../utils/randomDataicker";

const { Title, Text } = Typography;

export default function GuidelinesForHome(props) {
  const { darkMode } = props;
  const [iframLinks, setIframLinks] = useState([]);
  const navigateUser = useNavigate();

  const styles = {
    darkModes: {
      darkBackGround: { backgroundColor: darkMode ? "#16395A" : "white" },
    },
  };

  const navigateUser_GuidlinePage = () => {
    navigateUser("/guidelines/r/");
  };

  useEffect(() => {
    let isCancelled = false;
    if (!isCancelled) {
      const result = getRandomElements(iframContent, 4);
      setIframLinks(result);
    }

    return () => {
      isCancelled = true;
    };
  }, []);

  return (
    <>
      <Row style={styles.darkModes.darkBackGround}>
        <Col xs={22} sm={22} md={24} lg={24}>
          {" "}
          <div
            style={{
              textAlign: "center",
            }}
          >
            <Title
              level={3}
              style={{
                fontFamily: ' "Roboto", sans-serif',
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
      <Row justify="center" style={styles.darkModes.darkBackGround}>
        <Col xs={22} sm={22} md={23} lg={23} xl={23} xxl={16}>
          <Row justify="center" style={{ marginTop: "20px" }}>
            {iframLinks.map((ele) => (
              <Col
                xs={23}
                sm={23}
                md={11}
                lg={11}
                xl={9}
                style={{ marginBottom: "10px", marginRight: "15px" }}
                key={ele.id}
              >
                <Card
                  className={
                    darkMode
                      ? "cards-in-animation card-iframe-darkTheme"
                      : "cards-in-animation card-iframe "
                  }
                  size="small"
                  style={{ height: 285 }}
                  title={ele.title}
                  hoverable
                  key={ele.id}
                >
                  <iframe
                    width="100%%"
                    height="210"
                    src={ele.link}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    loading="lazy"
                  ></iframe>
                </Card>
              </Col>
            ))}
          </Row>
          <Row>
            <Col
              xs={23}
              sm={23}
              md={24}
              lg={24}
              style={{
                textAlign: "center",
                marginTop: "20px",
              }}
            >
              <div>
                <Button
                  shape="round"
                  size="large"
                  className={
                    darkMode ? "btn-2-guidliness-darkTheme" : "btn-2-guidliness"
                  }
                  onClick={navigateUser_GuidlinePage}
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
