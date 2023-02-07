
import { Box, Card, CardContent, Grid, TextField, Typography } from '@mui/material';
import React from 'react'
import '../../css/style.css'
const PersonalInfomation = (props) => {
  const { activestep, setActivesetp } = props;
  return (
    <div>
      <Grid container direction="row">
        <Grid item xs={12} sm={12} md={2} lg={2}></Grid>
        <Grid item xs={12} sm={12} md={8} lg={8}>
          <Box>
            <Card
              variant="outlined"
              sx={{ boxShadow: " 0 0 10px #000", borderRadius: "5px" }}
            >
              <CardContent>
                <Typography
                  variant="h6"
                  style={{ textAlign: "center" }}
                  fontFamily="Roboto sans-serif"
                >
                  FAMILY INFORMATION
                </Typography>
                <Typography
                  variant="subtitle1"
                  style={{ textAlign: "center" }}
                  fontFamily="Roboto sans-serif"
                >
                  Your Family Information
                </Typography>
              </CardContent>
            </Card>
            <Card style={{ border: "1px solid #dee2e6" }}>
              <CardContent>
                <form>
                  <TextField
                    required
                    fullWidth
                    label="Bride/Groom's First Name & Surname"
                    placeholder="Enter Your Name"
                    type="text"
                  />
                </form>
              </CardContent>
            </Card>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={2} lg={2}></Grid>
      </Grid>
    </div>
  );
}

export default PersonalInfomation
