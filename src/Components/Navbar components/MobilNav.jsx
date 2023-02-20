import React from "react";
import { Drawer, Typography, Dropdown, Button } from "antd";
import { Link, useNavigate } from "react-router-dom";
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
  LoginOutlined
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

  const navigateUser = useNavigate();

  const styles = {
    darkModes: {
      darkText: { color: darkMode ? "white" : "black" },
      darkForDrawer: {
        color: darkMode ? "white" : "black",
        border: "0px",
        backgroundColor: darkMode ? "#12264C" : "white",
      },
    },
    cssForUl: {
      listStyle: "none",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      marginLeft: "-46px",
    },
  };

  const navigateUser_Login = () => {
    navigateUser("accounts/login/")
  }


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
          style={styles.darkModes.darkForDrawer}
        >
          <Title
            style={{
              fontFamily: "Kaushan Script",
              color: styles.darkModes.darkText.color,
            }}
            level={3}
          >
            INDIA NIKAH
          </Title>

          <div onClick={handelNavClose}>
            <div className="nav-links">
              <ul style={styles.cssForUl}>
                <li>
                  <Link type="primary" aria-current="page" to="/profile/my-profile/">
                    <Text
                      style={styles.darkModes.darkText}
                      type="primary"
                      strong
                    >
                      <UserOutlined /> My Profile
                    </Text>
                  </Link>
                </li>
                <li>
                  <Link aria-current="page" to="/favourites/list/">
                    <Text
                      style={styles.darkModes.darkText}
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
                      style={styles.darkModes.darkText}
                      type="primary"
                      strong
                    >
                      <SearchOutlined /> Search Profiles
                    </Text>
                  </Link>
                </li>
                <li>
                  <Link aria-current="page" to="/guidelines/r/">
                    <Text
                      style={styles.darkModes.darkText}
                      type="primary"
                      strong
                    >
                      <ReadOutlined /> Marriage Guidelines
                    </Text>
                  </Link>
                </li>
                <li>
                  <Dropdown menu={{ items, selectable: true }}>
                    <Typography.Link strong style={styles.darkModes.darkText}>
                      <IdcardOutlined /> Supports <DownOutlined />
                    </Typography.Link>
                  </Dropdown>
                </li>
                <li>
                  <Link aria-current="page" to="/feedbacks/post-feedback/">
                    <Text
                      style={styles.darkModes.darkText}
                      type="primary"
                      strong
                    >
                      <MessageOutlined /> {" "}
                      feedbacks
                    </Text>
                  </Link>
                </li>
                <li>
                  <Link aria-current="page" to="/about-us/">
                    <Text
                      style={styles.darkModes.darkText}
                      type="primary"
                      strong
                    >
                      <InfoCircleOutlined /> About Us
                    </Text>
                  </Link>
                </li>

                <li>
                  <Link aria-current="page" to="/profiles/newly-added-profiles">
                    <Text
                      style={styles.darkModes.darkText}
                      type="primary"
                      strong
                    >
                      <PlusCircleOutlined /> {" "}
                      New Profiles
                    </Text>
                  </Link>
                </li>
                <li>
                  <Link aria-current="page" to="/profiles/profile-categories">
                    <Text
                      style={styles.darkModes.darkText}
                      type="primary"
                      strong
                    >
                      <BarsOutlined /> Categories
                    </Text>
                  </Link>
                </li>
                <li>
                  <Link aria-current="page" to="/post-document-service/">
                    <Text
                      style={styles.darkModes.darkText}
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
                    onClick={navigateUser_Login}
                  >
                    <LoginOutlined />
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
