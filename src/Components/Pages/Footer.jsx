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


import logo from "../../images/indiaNikhah.png";
import { Button, Col, Row } from "antd";
import React from "react";
import "../../css/style.css";
import { Typography } from "antd";

const { Title, Text } = Typography;

export default function FooterComponent() {
  return (
    <>
      <div>
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
            <Title level={4}>Total 309 Users found there partner yet</Title>
            <br />
            <Button
              type="primary"
              style={{
                fontSize: "10px",
              }}
              size="large"
            >
              <AiOutlineStar />
              <AiOutlineStar />
              <AiOutlineStar />
              <AiOutlineStar />
              <AiOutlineStar />
              <br />
              RATE US ON GOOGLE
            </Button>
            &nbsp; &nbsp;
            <Button
              size="large"
              style={{
                fontSize: "10px",
              }}
            >
              <BiShareAlt />
              <br />
              SHARE THIS WEBSITE
            </Button>
          </Col>
          <Col xs={24} sm={24} md={8} lg={8}></Col>
        </Row>
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
          </Col>
          <Col xs={24} sm={24} md={8} lg={8}></Col>
        </Row>
      </div>
      <div className="footer">
        <Row>
          <Col xs={24} sm={24} md={2} lg={2}></Col>
          <Col xs={24} sm={24} md={8} lg={8}>
            <img
              src={logo}
              style={{
                width: "50%",
              }}
              alt="logo"
            />
            <div
              style={{
                textAlign: "left",
              }}
            >
              <hr
                style={{
                  width: "16%",
                  marginInlineStart: "0px",
                  alignItems: "flex-start",
                }}
              />
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
                <AiOutlineUser />
                &nbsp;My Profile
              </li>
              <li>
                <BsSearch />
                &nbsp;Search Profiles
              </li>
              <li>
                <BsBook />
                &nbsp;Marriage Guidelines
              </li>
              <li>
                <BiLockAlt />
                &nbsp;Privacy Policy
              </li>
              <li>
                <RiPencilLine />
                &nbsp;Terms & Conditions
              </li>
            </ul>
          </Col>
          <Col xs={24} sm={24} md={6} lg={6}>
            <div style={{ marginLeft: "40px" }}>
              <Title level={4}>CONTACTS</Title>
            </div>
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
                <GoLocation />
                &nbsp;Pune
              </li>
              <li>
                <AiOutlineMail /> Contact@indianikah.com
              </li>
              <li
                style={{
                  fontSize: "30px",
                }}
              >
                <TbBrandTelegram /> <BsWhatsapp /> <IoLogoFacebook />{" "}
                <SiGoogle /> <FiYoutube />
              </li>

              <li>
                <Text>( We are on above social media )</Text>
              </li>
            </ul>
          </Col>
          <Col xs={24} sm={24} md={2} lg={2}></Col>
        </Row>
        <Row>
          <Col xs={24} sm={24} md={10} lg={10}></Col>

          <Col xs={24} sm={24} md={4} lg={4} style={{ marginTop: "10px" }}>
            <Text>© 2022 Copyright : www.indianikah.com</Text>
          </Col>

          <Col xs={24} sm={24} md={10} lg={10}></Col>
        </Row>
      </div>
    </>
  );
}
