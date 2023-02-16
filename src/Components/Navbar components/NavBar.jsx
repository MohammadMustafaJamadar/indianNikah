import React, { lazy, Suspense } from "react";
import { Button, Switch } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";
import { MenuOutlined, UserOutlined } from "@ant-design/icons";
import logo from "../../images/indiaNikhah.png";
import "../../css/style.css";
import "../../css/navbar.css";
const DekstopNavbar = lazy(() => import("./DekstopNavbar"));
const MobilNav = lazy(() => import("./MobilNav"));

export default function NavBar(props) {
  const { darkMode, setDarkMode } = props;

  const [open, setOpen] = useState(false);

  const openNav = () => {
    setOpen(true);
  };

  const handelNavClose = () => {
    setOpen(false);
  };

  const handelDarMode = () => {
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
            width:"100%"
        }}
      >
        <div className="mobile-nav-bar">
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
            <MenuOutlined style={{ color: darkMode ? "white" : "black" }} />
          </Button>
        </div>

        <div  className="nav-img-div">
          <Link aria-current="page" to="/">
            <img
              src={logo}
              className="nav-logo-image"
              alt="No....!"
              loading="lazy"
            />
          </Link>
          <div></div>
        </div>
        <div className="div-for-navdeck-links" style={{ width: "70%" }}>
          <Suspense>
            <DekstopNavbar darkMode={darkMode} />
          </Suspense>
        </div>
        <div style={{marginRight:"10px"}}>
          <Button
            type="primary"
            size="medium"
            shape="round"
            className="login-logout-btn-6"
          >
            <UserOutlined />
            Login
          </Button>
        </div>
        <div>
          <Button
         
            size="medium"
            shape="round"
            className="btn-5-myprofile"
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
            />
          </Suspense>
        </div>
        <div style={{ marginLeft: "20px" }}>
          <Switch
            checkedChildren="Disable"
            unCheckedChildren="Enable"
            size="large"
            onChange={handelDarMode}
          />
        </div>
      </div>
    </>
  );
}
