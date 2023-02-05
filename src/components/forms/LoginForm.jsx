import React, { useState } from "react";
import {
  Grid,
  Card,
  CardContent,
  Button,
  Typography,
  TextField,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import inputChanger from "../../utils/inputChanger";

export default function LoginForm() {
  const [checked, setCheck] = useState(false);
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");

  const numberChanger = (event) =>{
    inputChanger(event, setNumber)
  }
  const emailChanger = (event) =>{
    inputChanger(event, setEmail)
  }

  const handleChange = () => {
    if (checked === false) {
      setCheck(true);
    } else {
      setCheck(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let user_Record
    if(checked === true){
      user_Record = email
    }else{
      user_Record = number
    }
    console.log(user_Record)
  }

  return (
    <>
      <Grid container direction="row">
        <Grid item xs={12} sm={12} md={2} lg={4}></Grid>

        <Grid item xs={12} sm={12} md={8} lg={4} justifyContent="center">
          <br />

          <Card
            variant="outlined"
            sx={{ boxShadow: " 0 0 10px #000", borderRadius: "5px" }}
          >
            <CardContent>
              <Typography
                variant="subtitle1"
                fontSize="20px"
                fontFamily="Roboto sans-serif"
              >
                Login to your Account!
              </Typography>
              <hr />
            </CardContent>
            <CardContent>
              <form method="post" onSubmit={handleSubmit}>
                {checked ? (
                  <TextField
                    type="email"
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                    placeholder="Enter your email"
                    value={email}
                    onChange={emailChanger}
                    fullWidth
                  />
                ) : (
                  <TextField
                    id="outlined-basic"
                    label="Phone"
                    variant="outlined"
                    placeholder="10 digits number only"
                    value={number}
                    onChange={numberChanger}
                    fullWidth
                  />
                )}
                <FormControlLabel
                  label="Are you an NRI(living outside India)?"
                  control={
                    <Checkbox checked={checked} onChange={handleChange} />
                  }
                ></FormControlLabel>{" "}
                <br />
                <br />
                <Button
                  size="small"
                  style={{ backgroundColor: "#273338" }}
                  variant="contained"
                  type="submit"
                  fullWidth
                >
                  <LoginIcon />
                  Get Otp
                </Button>
              </form>
            </CardContent>
            <hr />
            <CardContent>
              <Typography
                variant="subtitle1"
                fontSize="20px"
                fontFamily="Roboto sans-serif"
              >
                Please read our Terms & Conditions and Privacy Policy carefully
                before proceeding.
              </Typography>
            </CardContent>
            <CardContent>
              <iframe
                width="100%"
                height="300px"
                src="https://www.youtube.com/embed/wR7sJfVW7Xc"
                title="YouTube video player"
                frameBorder={0}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
              <Typography
                variant="subtitle1"
                fontSize="20px"
                color="#df3768"
                fontFamily="Roboto sans-serif"
              >
                How to create profile in IndiaNikah
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={1} lg={2}></Grid>
        <Grid item xs={12} sm={12} md={1} lg={2}></Grid>
      </Grid>
    </>
  );
}
