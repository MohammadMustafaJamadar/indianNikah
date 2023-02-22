import React, { lazy, Suspense } from "react";
import { Button, Dropdown,  } from "antd";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  MenuOutlined,
  UserOutlined,
  LoginOutlined,
} from "@ant-design/icons";
import logo from "../../images/indiaNikahLogo.png";
import moon from "../../images/moon.png";
import sun from "../../images/sun.png";
import "../../css/navbar.css";
const DekstopNavbar = lazy(() => import("./DekstopNavbar"));
const MobilNav = lazy(() => import("./MobilNav"));

export default function NavBar(props) {
  const { darkMode, setDarkMode } = props;
  const [open, setOpen] = useState(false);
  const navigateUser = useNavigate();

  const handelDarMode = () => {
    if (darkMode === false) {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  };

  const openNav = () => {
    setOpen(true);
  };

  const handelNavClose = () => {
    setOpen(false);
  };

  const items = [
    {
      label: <Button shape="circle" style={{backgroundColor:"#ED65A7"}} />,
      key: 1,
    },
    {
      label: <Button shape="circle" style={{backgroundColor:"#4D8FF6"}} />,
      key: 2,
    },
    {
      label: <Button shape="circle" style={{backgroundColor:"#9F7AEB"}} />,
      key: 3,
    },
    {
      label: (
        <Button
          shape="circle"
          icon={
            darkMode ? (
              <img width="auto" height="18px" src={sun} alt="No....!" />
            ) : (
              <img
                width="auto"
                height="18px"
                style={{ marginTop: "2px" }}
                src={moon}
                alt="No....!"
              />
            )
          }
          onClick={handelDarMode}
        />
      ),
      key: 4,
    },
  ];

  const styles = {
    darkModes: {
      darkBackGround: {
        background: darkMode
          ? "#071B2F"
          : `linear-gradient(332deg,rgb(234, 207, 84) -48%, rgb(231, 147, 17) -32%)`,
      },
      darkText: { color: darkMode ? "white" : "black" },
    },
  };

  const navigateUser_myProfile = () => {
    navigateUser("/profile/my-profile/");
  };

  const navigateUser_Login = () => {
    navigateUser("accounts/login/");
  };

  return (
    <>
      <div className="nav-bar" style={styles.darkModes.darkBackGround}>
        <div className="mobile-nav-bar">
          <Button
            size="large"
            style={styles.darkModes.darkBackGround}
            type="primary"
            onClick={openNav}
          >
            <MenuOutlined style={styles.darkModes.darkText} />
          </Button>
        </div>

        <div className="nav-img-div">
          <Link aria-current="page" to="/">
            <img
              src={logo}
              className="nav-logo-image"
              alt="No....!"
              loading="lazy"
            />
          </Link>
        </div>
        <div className="div-for-navdeck-links" style={{ width: "70%" }}>
          <Suspense>
            <DekstopNavbar darkMode={darkMode} />
          </Suspense>
        </div>
        <div style={{ marginRight: "10px" }}>
          <Button
            type="primary"
            size="medium"
            shape="round"
            className="login-logout-btn-6"
            onClick={navigateUser_Login}
          >
            <LoginOutlined />
            Login
          </Button>
        </div>
        <div>
          <Button
            size="medium"
            shape="round"
            className="btn-5-myprofile"
            onClick={navigateUser_myProfile}
          >
            <UserOutlined />
            My Profile
          </Button>
        </div>
        <div>
          <Suspense>
            <MobilNav
              handelNavClose={handelNavClose}
              darkMode={darkMode}
              open={open}
              openNav={openNav}
            />
          </Suspense>
        </div>
        <div className="nav-theme-div" style={{ marginLeft: "20px" }}>
          <Dropdown menu={{ items }} trigger={["click"]}>
            <Button className="theme-btn" size="medium" shape="round">
     
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <g fillRule="evenodd">
                  <g fillRule="nonzero">
                    <path d="M7.02 3.635l12.518 12.518a1.863 1.863 0 010 2.635l-1.317 1.318a1.863 1.863 0 01-2.635 0L3.068 7.588A2.795 2.795 0 117.02 3.635zm2.09 14.428a.932.932 0 110 1.864.932.932 0 010-1.864zm-.043-9.747L7.75 9.635l9.154 9.153 1.318-1.317-9.154-9.155zM3.52 12.473c.514 0 .931.417.931.931v.932h.932a.932.932 0 110 1.864h-.932v.931a.932.932 0 01-1.863 0l-.001-.931h-.93a.932.932 0 010-1.864h.93v-.932c0-.514.418-.931.933-.931zm15.374-3.727a1.398 1.398 0 110 2.795 1.398 1.398 0 010-2.795zM4.385 4.953a.932.932 0 000 1.317l2.046 2.047L7.75 7 5.703 4.953a.932.932 0 00-1.318 0zM14.701.36a.932.932 0 01.931.932v.931h.932a.932.932 0 010 1.864h-.933l.001.932a.932.932 0 11-1.863 0l-.001-.932h-.93a.932.932 0 110-1.864h.93v-.931a.932.932 0 01.933-.932z"></path>
                  </g>
                </g>
              </svg>
            </Button>
          </Dropdown>
        </div>
      </div>
    </>
  );
}
