import {
  WhatsAppOutlined,
  FacebookOutlined,
  YoutubeOutlined,
  GoogleOutlined,
  SendOutlined,
  EnvironmentOutlined,
  MailOutlined,
  LockOutlined,
  UserAddOutlined,
  SearchOutlined,
  ReadOutlined,
  StarOutlined,
  ShareAltOutlined,
  FileProtectOutlined
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import logo from "../../images/indiaNikhah.png";
import { Button, Col, Row } from "antd";
import React from "react";
import "../../css/style.css";
import { Typography } from "antd";

const { Title, Text } = Typography;

export default function FooterComponent() {
  return (
    <>
      <div
        style={
          {
            // backgroundColor: "#E79311",
          }
        }
      >
        <Row justify="center">
          <Col
            xs={24}
            sm={24}
            md={8}
            lg={8}
            style={{
              textAlign: "center",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Title style={{ fontFamily: "Kaushan script" }} level={4}>
              Total 309 Users found there partner yet
            </Title>
            <br />
            <div className="rateus-share-div">
              <Button type="primary" className="btn-3-rating" size="medium">
                <Text
                  style={{
                    fontFamily: "Oswald",
                    width: "auto",
                    height: "auto",
                  }}
                >
                  < StarOutlined />
                  < StarOutlined />
                  < StarOutlined />
                  < StarOutlined />
                  < StarOutlined />
                  <br />
                  RATE US ON GOOGLE
                </Text>
              </Button>
              &nbsp; &nbsp;
              <Button size="medium" type="primary" className="btn-4-share ">
                <Text style={{ fontFamily: "Oswald" }}>
                <ShareAltOutlined />
                  <br />
                  SHARE THIS WEBSITE
                </Text>
              </Button>
            </div>
          </Col>
        </Row>
        <br />
        <br />
      </div>

      <div style={{ backgroundColor: "#EACF54" }}>
        <Row justify="center">
          <Col
            xs={24}
            sm={24}
            md={8}
            lg={8}
            style={{
              textAlign: "center",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Title style={{ fontFamily: "Kaushan script" }} level={4}>
              IndiaNikah is a 100% FREE service
            </Title>
            <div
              style={{
                textAlign: "left",
              }}
              className="slide-fwd-center"
            >
              <Text
                className="slide-fwd-center"
                style={{ fontFamily: "Oswald" }}
              >
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
              <img
                src={logo}
                width="50%"
                height="auto"
                alt="logo"
              />
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
              <Text style={{ fontFamily: "Oswald" }}>
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
              <Title level={4} style={{ fontFamily: "Kaushan Script" }}>
                USEFUL LINKS{" "}
              </Title>
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
                  <Link aria-current="page" to="/profile">
                    <Text style={{ fontFamily: "Oswald" }}>
                    <UserAddOutlined /> &nbsp; My Profile{" "}
                    </Text>
                  </Link>
                </li>
                <li>
                  <Link aria-current="page" to="/searchprofile">
                    <Text style={{ fontFamily: "Oswald", color: "black" }}>
                      {" "}
                      <SearchOutlined />&nbsp;  Search Profiles{" "}
                    </Text>
                  </Link>
                </li>
                <li>
                  <Link aria-current="page" to="guidelines/r/">
                    <Text style={{ fontFamily: "Oswald" }}>
                    <ReadOutlined />
                      &nbsp; Marriage Guidelines
                    </Text>
                  </Link>
                </li>
                <li>
                  <Link aria-current="page" to="/privacypolicy">
                    <Text style={{ fontFamily: "Oswald" }}>
                    <LockOutlined />
                      &nbsp; Privacy Policy
                    </Text>
                  </Link>
                </li>
                <li>
                  <Link aria-current="page" to="/termsandconditions">
                    <Text style={{ fontFamily: "Oswald" }}>
                    <FileProtectOutlined />
                      &nbsp; Terms & Conditions{" "}
                    </Text>
                  </Link>
                </li>
              </ul>
            </div>
          </Col>
          <Col xs={24} sm={24} md={6} lg={6}>
            <div style={{ marginLeft: "40px" }}>
              <Title level={4} style={{ fontFamily: "Kaushan Script" }}>
                CONTACTS
              </Title>
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
                  <Text style={{ fontFamily: "Oswald" }}>
                  <EnvironmentOutlined />
                    &nbsp;Pune
                  </Text>
                </li>
                <li>
                  <a href="mailto:contact@indianikah.com">
                    <Text style={{ fontFamily: "Oswald" }}>
                    <MailOutlined /> Contact@indianikah.com
                    </Text>
                  </a>
                </li>
                <li
                  style={{
                    fontSize: "30px",
                  }}
                >
                  <a href="https://t.me/IndiaNikah" style={{ color: "black" }}>
                    <SendOutlined />
                  </a>
                  <a
                    href="https://wa.me/918482833177?text=Asslamu+alaikum"
                    style={{ color: "black" }}
                  >
                    <WhatsAppOutlined />
                  </a>
                  <a
                    href="https://facebook.com/IndiaNikah"
                    style={{ color: "black" }}
                  >
                    <FacebookOutlined />
                  </a>
                  <a
                    href="https://www.indianikah.com/"
                    style={{ color: "black" }}
                  >
                    <GoogleOutlined />
                  </a>
                  &nbsp;
                  <a
                    href="https://www.youtube.com/c/IndiaNikah"
                    style={{ color: "black" }}
                  >
                    <YoutubeOutlined />
                  </a>
                </li>

                <li>
                  <Text style={{ fontFamily: "Oswald" }}>
                    ( We are on above social media )
                  </Text>
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
            <Text>© 2022 Copyright : www.indianikah.com</Text>
          </Col>
        </Row>
      </div>
    </>
  );
}
