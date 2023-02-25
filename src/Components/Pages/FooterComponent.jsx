import {
  WhatsAppOutlined,
  FacebookOutlined,
  YoutubeOutlined,
  GoogleOutlined,
  SendOutlined,
  EnvironmentOutlined,
  MailOutlined,
  LockOutlined,
  UserOutlined,
  SearchOutlined,
  ReadOutlined,
  StarOutlined,
  ShareAltOutlined,
  FileProtectOutlined,
  CopyrightOutlined,
  ContactsOutlined,
  TeamOutlined,
  MessageOutlined,
  FileTextOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import logo from "../../images/indiaNikahLogo.png";
import { Button, Col, Row } from "antd";
import React, { useState } from "react";
import "../../css/footer.css";
import { Typography, Modal } from "antd";

const { Title, Text } = Typography;

export default function FooterComponent(props) {
  const { darkMode, colors } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    if (isModalOpen === false) {
      setIsModalOpen(true);
    }
  };

  const handleCancel = () => {
    if (isModalOpen === true) {
      setIsModalOpen(false);
    }
  };

  const styles = {
    darkModes: {
      darkBackGround: {
        backgroundColor: darkMode
          ? "#001F3D"
          : colors.green
          ? "#48BA78"
          : colors.blue
          ? "#4D8FF6"
          : colors.purple
          ? "#9F7AEB"
          : "#c5204f",
      },
      darkText: { color: darkMode ? "white" : "black" },
      darkBackGroundFirstDiv: {
        backgroundColor: darkMode ? "#001F3D" : "lightgray",
      },
    },
  };

  return (
    <>
      <div
        className="sub-footer-up-1"
        style={styles.darkModes.darkBackGroundFirstDiv}
      >
        <Row justify="center" style={{ textAlign: "center" }}>
          <Col xs={24} sm={24} md={23} lg={23} xl={23} xxl={8}>
            <Title style={styles.darkModes.darkText} level={4}>
              <TeamOutlined style={styles.darkModes.darkText} /> Total 309 Users
              found there partner yet
            </Title>
            <br />
            <div className="rateus-share-div">
              <a
                href="https://g.page/r/Cbq60nFUvcUuEB0/review"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button type="primary" className="btn-3-rating" size="medium">
                  <StarOutlined />
                  <StarOutlined />
                  <StarOutlined />
                  <StarOutlined />
                  <StarOutlined />
                  <br />
                  RATE US ON GOOGLE
                </Button>
              </a>
              &nbsp; &nbsp;
              <Button
                size="medium"
                type="primary"
                className="btn-4-share "
                onClick={showModal}
              >
                <ShareAltOutlined />
                <br />
                SHARE THIS WEBSITE
                <Modal
                  open={isModalOpen}
                  onOk={handleCancel}
                  onCancel={handleCancel}
                >
                  <Row
                    justify="center"
                    style={{
                      backgroundColor: darkMode ? "#001F3D" : "lightgray",
                    }}
                  >
                    <Col xs={24} sm={24} md={24} lg={24}>
                      <div
                        className={darkMode ? "footerLinksDark" : "footerLinks"}
                      >
                        <ul style={{ listStyleType: "none" }}>
                          <li
                            style={{
                              fontSize: "30px",
                            }}
                          >
                            <a
                              href="https://t.me/IndiaNikah"
                              style={styles.darkModes.darkText}
                            >
                              <SendOutlined />
                            </a>{" "}
                            <a
                              href="https://wa.me/918482833177?text=Asslamu+alaikum"
                              style={styles.darkModes.darkText}
                            >
                              <WhatsAppOutlined />
                            </a>{" "}
                            <a
                              href="https://facebook.com/IndiaNikah"
                              style={styles.darkModes.darkText}
                            >
                              <FacebookOutlined />
                            </a>{" "}
                            <a
                              href="https://www.indianikah.com/"
                              style={styles.darkModes.darkText}
                            >
                              <GoogleOutlined />
                            </a>
                            &nbsp;
                            <a
                              href="https://www.youtube.com/c/IndiaNikah"
                              style={styles.darkModes.darkText}
                            >
                              <YoutubeOutlined />
                            </a>{" "}
                          </li>

                          <li>
                            <Text style={styles.darkModes.darkText}>
                              ( We are on above social media )
                            </Text>
                          </li>
                        </ul>
                      </div>
                    </Col>
                  </Row>
                </Modal>
              </Button>
            </div>
          </Col>
        </Row>
        <br />
        <br />
      </div>

      <div className="sub-footer-up-2" style={styles.darkModes.darkBackGround}>
        <Row justify="center">
          <Col
            xs={24}
            sm={24}
            md={12}
            lg={12}
            style={{
              textAlign: "center",
            }}
          >
            <Title level={4}>IndiaNikah is a 100% FREE service</Title>
            <div
              style={{
                textAlign: "left",
              }}
            >
              <Text>
                Terms Of Use : By using this site, you agree to terms and
                conditions that you will not misuse the data. And you will talk
                only about marriage proposals on Call/SMS/WhatsApp and not
                anything else like friendship, just for chitchat for fun or
                anything similar for that matter. Anyone found misusing the data
                is subject to legal actions by the site admin and/or by the
                owner of the profile. For more information, click on Terms and
                Conditions
              </Text>
            </div>
            <br />
          </Col>
        </Row>
      </div>
      <div className="footer">
        <Row justify="center">
          <Col xs={24} sm={24} md={8} lg={8}>
            <center>
              <img src={logo} width="50%" height="auto" alt="logo" />
              <hr
                style={{
                  width: "16%",
                }}
              />
            </center>

            <div
              style={{
                textAlign: "left",
              }}
            >
              <br />
              <Text>
                Disclaimer : indianikah.com is a non-profit matrimony website
                and not for anything else apart from marriage match making. It
                is not directly or indirectly responsible for any sort of misuse
                of data done from the site. The data on the site is not shared
                with any entity.
              </Text>
            </div>
          </Col>
          <Col xs={24} sm={24} md={6} lg={6}>
            <div style={{ marginLeft: "40px" }}>
              <Title level={4}>USEFUL LINKS </Title>
            </div>
            <div className="footerLinks">
              <ul style={{ listStyleType: "none" }}>
                <li>
                  {" "}
                  <hr
                    style={{
                      width: "16%",
                      marginInlineStart: "0px",
                    }}
                  />
                </li>
                <li>
                  <Link aria-current="page" to="/profile/my-profile/">
                    <Text>
                      <UserOutlined /> &nbsp; My Profile{" "}
                    </Text>
                  </Link>
                </li>
                <li>
                  <Link aria-current="page" to="/searchprofile">
                    {" "}
                    <Text>
                      <SearchOutlined />
                      &nbsp; Search Profiles{" "}
                    </Text>
                  </Link>
                </li>
                <li>
                  <Link aria-current="page" to="guidelines/r/">
                    <Text>
                      <ReadOutlined />
                      &nbsp; Marriage Guidelines
                    </Text>
                  </Link>
                </li>
                <li>
                  <Link aria-current="page" to="/privacy-policy/">
                    <Text>
                      <LockOutlined />
                      &nbsp; Privacy Policy
                    </Text>
                  </Link>
                </li>
                <li>
                  <Link aria-current="page" to="/terms-and-conditions/">
                    <Text>
                      <FileProtectOutlined />
                      &nbsp; Terms & Conditions{" "}
                    </Text>
                  </Link>
                </li>
                <li>
                  <Link aria-current="page" to="/post-document-service/">
                    <Text type="primary">
                      <FileTextOutlined /> Document Service
                    </Text>
                  </Link>
                </li>
              </ul>
            </div>
          </Col>
          <Col xs={24} sm={24} md={6} lg={6}>
            <div style={{ marginLeft: "40px" }}>
              <Title level={4}>
                <ContactsOutlined /> CONTACTS
              </Title>
            </div>
            <div className={darkMode ? "footerLinksDark" : "footerLinks"}>
              <ul style={{ listStyleType: "none" }}>
                <li>
                  {" "}
                  <hr
                    style={{
                      width: "16%",
                      marginInlineStart: "0px",
                    }}
                  />
                </li>
                <li>
                  <Link aria-current="page" to="/feedbacks/post-feedback/ ">
                    <Text type="primary">
                      <MessageOutlined /> Feedbacks
                    </Text>
                  </Link>
                </li>
                <li>
                  <Link>
                    <Text>
                      <EnvironmentOutlined />
                      &nbsp;Pune
                    </Text>
                  </Link>
                </li>
                <li>
                  <a href="mailto:contact@indianikah.com">
                    <Text>
                      <MailOutlined /> Contact@indianikah.com
                    </Text>
                  </a>
                </li>
                <li
                  style={{
                    fontSize: "30px",
                  }}
                >
                  <a href="https://t.me/IndiaNikah">
                    <SendOutlined />
                  </a>{" "}
                  <a href="https://wa.me/918482833177?text=Asslamu+alaikum">
                    <WhatsAppOutlined />
                  </a>{" "}
                  <a href="https://facebook.com/IndiaNikah">
                    <FacebookOutlined />
                  </a>{" "}
                  <a href="https://www.indianikah.com/">
                    <GoogleOutlined />
                  </a>
                  &nbsp;
                  <a href="https://www.youtube.com/c/IndiaNikah">
                    <YoutubeOutlined />
                  </a>{" "}
                </li>

                <li>
                  <Text>( We are on above social media )</Text>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
        <Row justify="center">
          <Col
            xs={24}
            sm={24}
            md={4}
            lg={4}
            style={{ marginTop: "10px", textAlign: "center" }}
          >
            <Text>
              <CopyrightOutlined /> 2022 Copyright : www.indianikah.com
            </Text>
          </Col>
        </Row>
      </div>
    </>
  );
}
