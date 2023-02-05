import React from "react";
import {
  Grid,
  Card,
  CardContent,
  Button,
  Typography,
  TextField,
} from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';
import { Link } from "react-router-dom";

export default function OtpVerifyForm() {
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
                
                Verify OTP
              </Typography>
              <hr />
            </CardContent>
            <CardContent>
              <Typography variant="subtitle1" fontFamily="Roboto sans-serif">
                One Time Password sent on , Please enter that otp to login.
                <Link style={{color:"#df3768"}} aria-current="page" to="../account/login">
                  change phone
                </Link>{" "}
              </Typography>
            </CardContent>
            <CardContent>
              <form method="post">
                <TextField
                  id="outlined-basic"
                  label="Otp*"
                  variant="outlined"
                  placeholder="Enter your otp"
                  fullWidth
                />
                <br />
                <br />
                <Button
                  size="small"
                  style={{ backgroundColor: "#df3768" }}
                  variant="contained"
                  type="submit"
                  fullWidth
                >
                  <CheckIcon/>
                 Verify
                </Button>
              </form>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={1} lg={2}></Grid>
        <Grid item xs={12} sm={12} md={1} lg={2}></Grid>
      </Grid>
    </>
  );
}
