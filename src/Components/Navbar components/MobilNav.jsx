import React from "react";
import { Drawer, Typography, Dropdown, Button } from "antd";
import { Link } from "react-router-dom";
import {
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
import "../../css/navbar.css";

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

export default function MobilNav(props) {
  const { handelNavClose, darkMode, open } = props;
  return (
    <>
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
                      style={{
                        color: darkMode ? "white" : "black",
                        textDecoration: "none !important",
                      }}
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
                <li>
                  <Button
                    type="primary"
                    size="medium"
                    shape="round"
                    className="login-logout-btn-mobnav-6"
                  >
                    <UserOutlined />
                    Login
                  </Button>
                </li>
              </ul>
            </div>
            <br />
            <br />
          </div>
        </Drawer>
      </div>
    </>
  );
}
