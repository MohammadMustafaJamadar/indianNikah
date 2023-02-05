import React, { useState } from "react";
import {
  Grid,
  Card,
  CardContent,
  Button,
  Typography,
  TextField,
  Box,
  MenuItem,
  FormGroup,
  FormControlLabel,
  Checkbox 
} from "@mui/material";
import inputChanger from "../../utils/inputChanger";
import { forSelf } from "../../utils/selectBar";

export default function ContactInfoForm() {
  const [contactSelect, setContactSelect] = useState("");

  const handelContactSelect = (event) => {
    inputChanger(event, setContactSelect);
  };

  return (
    <>
      <Grid container direction="row">
        <Grid item xs={12} sm={12} md={2} lg={2}></Grid>
        <Grid item xs={12} sm={12} md={8} lg={8}>
          <br />
          <Box>
            <Card
              variant="outlined"
              sx={{ boxShadow: " 0 0 10px #000", borderRadius: "20px" }}
            >
              <CardContent>
                <Typography
                  variant="h6"
                  style={{ textAlign: "center" }}
                  fontFamily="Roboto sans-serif"
                >
                  CONTACT INFORMATION
                </Typography>
              </CardContent>
              <Card style={{ border: "1px solid #dee2e6" }}>
                <CardContent>
                  <form>
                    {/* Contact info form */}
                    <TextField
                      fullWidth
                      variant="outlined"
                      label="Contact of *"
                      select
                      value={contactSelect}
                      onChange={handelContactSelect}
                    >
                      {forSelf.map((state) => (
                        <MenuItem key={state.value} value={state.value}>
                          {state.label}
                        </MenuItem>
                      ))}
                    </TextField>
                    <br />
                    <br />
                    <TextField
                      fullWidth
                      label="Contact number*"
                      placeholder="Enter your number"
                      type="text"
                    />
                    <br />
                    <br />
                    <Grid container direction="row" columnSpacing={2}>
                      <Grid item xs={12} sm={12} md={6} lg={6}>
                        <TextField
                          select
                          fullWidth
                          label="Country Code*"
                        ></TextField>
                           <FormGroup>
                        <FormControlLabel control={<Checkbox  />} label="Do you want to keep your contact number hidden?" />
                        </FormGroup>
                      </Grid>

                      <Grid item xs={12} sm={12} md={6} lg={6}>
                        <TextField
                          type="text"
                          placeholder="Enter your whatsapp number"
                          fullWidth
                          label="Whatsapp number*"
                        ></TextField>
                      </Grid>
                    </Grid>
                    <br />
                    <Grid container direction="row">
                      <Grid item xs={12} sm={12} md={2} lg={2}>
                      </Grid>
                      <Grid item xs={12} sm={12} md={8} lg={8}>
                        <center>
                          <Button
                            variant="contained"
                            style={{ backgroundColor: "#645c60" }}
                          >
                            Previous
                          </Button>{" "}
                          &nbsp;
                          <Button
                            variant="contained"
                            style={{ backgroundColor: "#DF3768" }}
                          >
                            Next
                          </Button>
                        </center>
                      </Grid>
                      <Grid item xs={12} sm={12} md={2} lg={2}></Grid>
                    </Grid>
                  </form>
                </CardContent>
              </Card>
            </Card>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={2} lg={2}></Grid>
      </Grid>
    </>
  );
}
