import React from "react";
// import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Drawer, Button, Layout, Typography, Switch   } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import img8 from "../../photos/img8.png";

const {Text, Title } = Typography;

export default function NavBar(props) {
  const {darkMode, setDarkMode} = props;
  
  
  const [open, setOpen] = useState(false);

  const openNav = () => {
    setOpen(true);
  };

  const handelNavClose = () => {
    setOpen(false);
  };

  const handelDarMode = (event) => {
    if(darkMode === false) {
      setDarkMode(true)
    }else{
      setDarkMode(false)
    }
  }

  return (
    <>
      <div
        style={{
          height: "100%",
          width: "100%",
          position: "fixed",
          zIndex:"990"
        
        }}
      >
        <Layout
          style={{
            background: darkMode ? "#121212" :
            "linear-gradient(332deg, RGB(231, 132, 134)  21%, RGB(223, 64, 103)  83%)",
          }}
        >
          <div>
            <Button
              size="large"
              style={{
                background: darkMode ? "#121212" :
                  "linear-gradient(332deg, RGB(231, 132, 134)  21%, RGB(223, 64, 103)  83%)",
                color: "white",
              }}
              type="primary"
              onClick={openNav}
            >
              <GiHamburgerMenu />
            </Button> 
            <Text strong style={{color:darkMode ? "white" : "black"}}>India Nikah</Text>

            <Switch onChange={handelDarMode} title="Enable DarkMode"/>

            <Drawer
              
              placement="left"
              width={200}
              closable={false}
              onClose={handelNavClose}
              open={open}
              key="left"
              style={{
                
                color:darkMode ? "white" : "black",
                border: "0px",
                display: "flex",
                backgroundColor: darkMode ? "#121212" : "white"
              }}
            >
              <Title style={{fontFamily:"Kaushan Script" , color:darkMode ? "white" : "black" }} level={3}>INDIA NIKAH</Title>
              <div onClick={handelNavClose} style={{fontFamily:"Oswald" , }}>
                <Link type="primary" aria-current="page" to="/">
                  <Text style={{color:darkMode ? "white" : "black",}} type="primary" strong> Home</Text>
                </Link>{" "}
                <br />
                <Link aria-current="page" to="/login">
                <Text style={{color:darkMode ? "white" : "black",}} type="primary" strong> Login</Text>
                </Link>{" "}
                <br />
                <Link aria-current="page" to="/signup">
                <Text style={{color:darkMode ? "white" : "black",}} type="primary" strong> SignUp</Text>
                </Link>
              </div>
            </Drawer>
          </div>
        </Layout>
      </div>
    </>
  );
}
