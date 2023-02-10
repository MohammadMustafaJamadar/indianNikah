import { AiOutlineStar, AiOutlineMail } from "react-icons/ai";
import { BiShareAlt, BiLockAlt } from "react-icons/bi";
import { GoLocation } from "react-icons/go";
import { AiOutlineUser } from "react-icons/ai";
import { TbBrandTelegram } from "react-icons/tb";
import { IoLogoFacebook } from "react-icons/io";
import { BsWhatsapp } from "react-icons/bs";
import { FiYoutube } from "react-icons/fi";
import { SiGoogle } from "react-icons/si";
import { BsSearch, BsBook } from "react-icons/bs";
import { RiPencilLine } from "react-icons/ri";
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
        style={{
          // backgroundColor: "#E79311",
        }}
      >
        <Row>
          <Col xs={24} sm={24} md={8} lg={8}></Col>
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
            <div className="bounce-top">
            <Button
              type="primary"
              className="btn-3-rating"
           
              size="medium"
            >
              <Text style={{fontFamily:"Oswald", width:"auto" , height:"auto"}}>
              <AiOutlineStar />
              <AiOutlineStar />
              <AiOutlineStar />
              <AiOutlineStar />
              <AiOutlineStar />
              <br />
              RATE US ON GOOGLE
              </Text>
            </Button>
            &nbsp; &nbsp;
            <Button
              size="medium"
              type="primary"
              className="btn-4-share "
            
            >
              <Text style={{fontFamily:"Oswald"}}>
              <BiShareAlt />
              <br />
              SHARE THIS WEBSITE
              </Text>
            </Button>
            </div>
          </Col>
          <Col xs={24} sm={24} md={8} lg={8}></Col>
        </Row>
        <br />
        <br />
      </div>

      <div style={{ backgroundColor: "#EACF54" }}>
        <Row>
          <Col xs={24} sm={24} md={8} lg={8}></Col>
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
          <Col xs={24} sm={24} md={8} lg={8}></Col>
        </Row>
      </div>
      <div className="footer">
        <Row>
          <Col xs={24} sm={24} md={2} lg={2}></Col>
          <Col xs={24} sm={24} md={8} lg={8}>
            <center>
              <img
                src={logo}
                style={{
                  width: "50%",
                }}
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
                      <AiOutlineUser /> &nbsp; My Profile{" "}
                    </Text>
                  </Link>
                </li>
                <li>
                  <Link aria-current="page" to="/searchprofile">
                    <Text style={{ fontFamily: "Oswald", color: "black" }}>
                      {" "}
                      &nbsp; <BsSearch /> Search Profiles{" "}
                    </Text>
                  </Link>
                </li>
                <li>
                  <Link aria-current="page" to="guidelines/r/">
                    <Text style={{ fontFamily: "Oswald" }}>
                      <BsBook />
                      &nbsp; Marriage Guidelines
                    </Text>
                  </Link>
                </li>
                <li>
                  <Link aria-current="page" to="/privacypolicy">
                    <Text style={{ fontFamily: "Oswald" }}>
                      <BiLockAlt />
                      &nbsp; Privacy Policy
                    </Text>
                  </Link>
                </li>
                <li>
                  <Link aria-current="page" to="/termsandconditions">
                    <Text style={{ fontFamily: "Oswald" }}>
                      <RiPencilLine />
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
                    <GoLocation />
                    &nbsp;Pune
                  </Text>
                </li>
                <li>
                  <a href="mailto:contact@indianikah.com">
                    <Text style={{ fontFamily: "Oswald" }}>
                      <AiOutlineMail /> Contact@indianikah.com
                    </Text>
                  </a>
                </li>
                <li
                  style={{
                    fontSize: "30px",
                  }}
                >
                  <a href="https://t.me/IndiaNikah" style={{ color: "black" }}>
                    <TbBrandTelegram />
                  </a>
                  <a
                    href="https://wa.me/918482833177?text=Asslamu+alaikum"
                    style={{ color: "black" }}
                  >
                    <BsWhatsapp />
                  </a>
                  <a
                    href="https://facebook.com/IndiaNikah"
                    style={{ color: "black" }}
                  >
                    <IoLogoFacebook />
                  </a>
                  <a
                    href="https://www.indianikah.com/"
                    style={{ color: "black" }}
                  >
                    <SiGoogle />
                  </a>
                  &nbsp;
                  <a
                    href="https://www.youtube.com/c/IndiaNikah"
                    style={{ color: "black" }}
                  >
                    <FiYoutube />
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
          <Col xs={24} sm={24} md={2} lg={2}></Col>
        </Row>
        <Row>
          <Col xs={24} sm={24} md={10} lg={10}></Col>

          <Col xs={24} sm={24} md={4} lg={4} style={{ marginTop: "10px", textAlign:"center", }}>
            <Text>© 2022 Copyright : www.indianikah.com</Text>
          </Col>

          <Col xs={24} sm={24} md={10} lg={10}></Col>
        </Row>
      </div>
    </>
  );
}
