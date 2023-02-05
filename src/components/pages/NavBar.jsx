import React, { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,

} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";

export default function NavBAr() {
  const navigateUser = useNavigate();

  const navigateUser_Login = () => {
    navigateUser("account/login/")
  }
  const navigateUser_Home = () => {
    navigateUser("/")
  }
  const navigateUser_Profile = () =>{
    navigateUser("profile/my-profile/")
  }
  const navigateUser_FamilyInfo = () => {
    navigateUser("profile/create/")
  }
  const navigateUser_ContctInfo =() => {
    navigateUser("profile/create/contact")
  }

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
           
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              News
            </Typography>
            <Button color="inherit" onClick={navigateUser_Home}>Home</Button>
            <Button color="inherit" onClick={navigateUser_Login}>Login</Button>
            <Button color="inherit" onClick={navigateUser_Profile}>My profile</Button>
            <Button color="inherit" onClick={navigateUser_FamilyInfo}>Family Info</Button>
            <Button color="inherit" onClick={navigateUser_ContctInfo}>Contact Info</Button>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}
