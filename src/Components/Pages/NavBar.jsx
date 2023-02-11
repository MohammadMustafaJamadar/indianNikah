import React from "react";
import { Drawer, Button, Typography, Switch, Dropdown } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  MenuOutlined,
  UserOutlined,
  HeartOutlined,
  SearchOutlined,
  ReadOutlined,
  IdcardOutlined,
  MessageOutlined,
  InfoCircleOutlined,
  PlusCircleOutlined,
  BarsOutlined,
  FileTextOutlined,
  DownOutlined,
} from "@ant-design/icons";
import logo from "../../images/indiaNikhah.png";
import "../../css/style.css";

const { Text, Title } = Typography;
const items = [
  {
    key: "1",
    label: (
      <Link aria-current="page" to="/jobsupport">
        Job Supprt
      </Link>
    ),
  },
  {
    key: "2",
    label: (
      <Link aria-current="page" to="/scholarship">
        Scholarship
      </Link>
    ),
  },
  {
    key: "3",
    label: (
      <Link aria-current="page" to="/accomodation">
        Accomodation
      </Link>
    ),
  },
];

export default function NavBar(props) {
  const { darkMode, setDarkMode } = props;

  const [open, setOpen] = useState(false);

  const openNav = () => {
    setOpen(true);
  };

  const handelNavClose = () => {
    setOpen(false);
  };

  const handelDarMode = (event) => {
    if (darkMode === false) {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  };

  return (
    <>
      <div
        className="nav-bar"
        style={{
          background: darkMode
            ? "#071B2F"
            : `linear-gradient(332deg,rgb(234, 207, 84) -48%, rgb(231, 147, 17) -32%)`,
        }}
      >
        <div>
          <Button
            size="large"
            style={{
              background: darkMode
                ? "#071B2F"
                : "linear-gradient(332deg, rgb(234, 207, 84) -48%, rgb(231, 147, 17) -32%)",
            }}
            type="primary"
            onClick={openNav}
          >
            <MenuOutlined style={{ color:darkMode? "white": "black" }} />
          </Button>
        </div>

        <div>
          <Link aria-current="page" to="/">
            <img src={logo} className="logo-image" alt="No....!" />
          </Link>
        </div>
        <div>
          <div>
            <Drawer
              placement="left"
              width={200}
              closable={false}
              onClose={handelNavClose}
              open={open}
              key="left"
              style={{
                color: darkMode ? "white" : "black",
                border: "0px",
                backgroundColor: darkMode ? "#12264C" : "white",
              }}
            >
              <Title
                style={{
                  fontFamily: "Kaushan Script",
                  color: darkMode ? "white" : "black",
                }}
                level={3}
              >
                INDIA NIKAH
              </Title>

              <div onClick={handelNavClose}>
                <div className="nav-links">
                  <ul
                    style={{
                      listStyle: "none",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      marginLeft: "-46px",
                    }}
                  >
                    <li>
                      <Link type="primary" aria-current="page" to="/">
                        <Text
                          className="footerLinks"
                          style={{ color: darkMode ? "white" : "black" }}
                          type="primary"
                          strong
                        >
                          <UserOutlined /> My Profile
                        </Text>
                      </Link>
                    </li>
                    <li>
                      <Link aria-current="page" to="/login">
                        <Text
                          style={{ color: darkMode ? "white" : "black" }}
                          type="primary"
                          strong
                        >
                          <HeartOutlined /> Favourites
                        </Text>
                      </Link>
                    </li>
                    <li>
                      <Link aria-current="page" to="/signup">
                        <Text
                          style={{ color: darkMode ? "white" : "black" }}
                          type="primary"
                          strong
                        >
                          <SearchOutlined /> Search Profiles
                        </Text>
                      </Link>
                    </li>
                    <li>
                      <Link aria-current="page" to="/signup">
                        <Text
                          style={{ color: darkMode ? "white" : "black" }}
                          type="primary"
                          strong
                        >
                          <ReadOutlined /> Marriage Guidelines
                        </Text>
                      </Link>
                    </li>
                    <li>
                      <Dropdown menu={{ items, selectable: true }}>
                        <Typography.Link
                          strong
                          style={{ color: darkMode ? "white" : "black" }}
                        >
                          <IdcardOutlined /> Supports <DownOutlined />
                        </Typography.Link>
                      </Dropdown>
                    </li>
                    <li>
                      <Link aria-current="page" to="/signup">
                        <Text
                          style={{ color: darkMode ? "white" : "black" }}
                          type="primary"
                          strong
                        >
                          <MessageOutlined />
                          feedbacks
                        </Text>
                      </Link>
                    </li>
                    <li>
                      <Link aria-current="page" to="/signup">
                        <Text
                          style={{ color: darkMode ? "white" : "black" }}
                          type="primary"
                          strong
                        >
                          <InfoCircleOutlined /> About Us
                        </Text>
                      </Link>
                    </li>

                    <li>
                      <Link aria-current="page" to="/signup">
                        <Text
                          style={{ color: darkMode ? "white" : "black" }}
                          type="primary"
                          strong
                        >
                          <PlusCircleOutlined />
                          New Profiles
                        </Text>
                      </Link>
                    </li>
                    <li>
                      <Link aria-current="page" to="/signup">
                        <Text
                          style={{ color: darkMode ? "white" : "black" }}
                          type="primary"
                          strong
                        >
                          <BarsOutlined /> Categories
                        </Text>
                      </Link>
                    </li>
                    <li>
                      <Link aria-current="page" to="/signup">
                        <Text
                          style={{ color: darkMode ? "white" : "black" }}
                          type="primary"
                          strong
                        >
                          <FileTextOutlined /> Document Service
                        </Text>
                      </Link>
                    </li>
                  </ul>
                </div>
                <br />
                <br />
              </div>
            </Drawer>
          </div>
        </div>
        <div style={{ marginRight: "35px" }}>
          <Button
            type="primary"
            size="medium"
            shape="round"
            className="btn-5-myprofile"
          >
            <UserOutlined />
            My Profile
          </Button>
        </div>
        <div style={{ marginRight: "20px" }}>
          Moon
          <Switch
            size="large"
            onChange={handelDarMode}
           
          />
        </div>
      </div>
    </>
  );
}
