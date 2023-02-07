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
} from "@mui/material";
import {
  countDown,
  biradariSlectBar,
  maslakSlectBar,
} from "../../utils/selectBar.js";
import inputChanger from "../../utils/inputChanger";

export default function FamilyInfoForm() {
  const [selectBrothers, setSelectBrothers] = useState("");
  const [marriedBrothers, setMarriedBrothers] = useState("");
  const [selectSisters, setSelectSisters] = useState("");
  const [marriedSisters, setMarriedSisters] = useState("");
  const [biradari, setBiradari] = useState("");
  const [maslak, setMaslak] = useState("");

  const handelSlectBrothers = (event) => {
    inputChanger(event, setSelectBrothers);
  };
  const handelMarriedBrothers = (event) => {
    inputChanger(event, setMarriedBrothers);
  };
  const handelSlectSisters = (event) => {
    inputChanger(event, setSelectSisters);
  };

  const handelMarriedSisters = (event) => {
    inputChanger(event, setMarriedSisters);
  };
  const handelBiradariSelect = (event) => {
    inputChanger(event, setBiradari);
  };
  const handelMaslakSelect = (event) => {
    inputChanger(event, setMaslak);
  };

  return (
    <>
      <Grid container direction="row">
        <Grid item xs={12} sm={12} md={2} lg={2}></Grid>

        <Grid item xs={12} sm={12} md={8} lg={8} justifyContent="center">
          <br />
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
              <Card style={{ border: "1px solid #dee2e6" }}>
                <CardContent>
                  <form>
                    {/* Family info form */}
                    <TextField
                      required
                      fullWidth
                      label="Father's name"
                      placeholder="Enter Your Father's Name"
                      type="text"
                    />
                    <br />
                    <br />
                    <TextField
                      required
                      fullWidth
                      label="Father's occupation"
                      placeholder="Enter Your Father's Occupation"
                      type="text"
                    />
                    <br />
                    <br />
                    <TextField
                      required
                      fullWidth
                      label="Mother's name"
                      placeholder="Enter Your Mother's Name"
                      type="text"
                    />
                    <br />
                    <br />
                    <TextField
                      fullWidth
                      required
                      label="Mother's occupation"
                      placeholder="Enter Your Mother's Occupation"
                      type="text"
                    />
                    <br />
                    <br />
                    {/* Selection of brothers. */}
                    <Grid
                      container
                      direction="row"
                      columnSpacing={2}
                      rowSpacing={2}
                    >
                      <Grid item xs={12} sm={12} md={6} lg={6}>
                        <TextField
                          variant="outlined"
                          required
                          value={selectBrothers}
                          select
                          label="How many brothers - कितने भाई हैं?"
                          fullWidth
                          onChange={handelSlectBrothers}
                        >
                          {countDown.map((state) => (
                            <MenuItem key={state.label} value={state.value}>
                              {state.label}
                            </MenuItem>
                          ))}
                        </TextField>
                      </Grid>
                      <Grid item xs={12} sm={12} md={6} lg={6}>
                        <TextField
                          required
                          variant="outlined"
                          value={marriedBrothers}
                          select
                          label="How many married - कितनों की शादी हुवी?"
                          fullWidth
                          onChange={handelMarriedBrothers}
                        >
                          {countDown.map((state) => (
                            <MenuItem key={state.label} value={state.value}>
                              {state.label}
                            </MenuItem>
                          ))}
                        </TextField>
                      </Grid>
                    </Grid>
                    <br />
                    {/* Slection Of sisters */}
                    <Grid
                      container
                      direction="row"
                      columnSpacing={2}
                      rowSpacing={2}
                    >
                      <Grid item xs={12} sm={12} md={6} lg={6}>
                        <TextField
                          variant="outlined"
                          required
                          value={selectSisters}
                          select
                          label="How many sisters - कितनी बहनें हैं?"
                          fullWidth
                          onChange={handelSlectSisters}
                        >
                          {countDown.map((state) => (
                            <MenuItem key={state.label} value={state.value}>
                              {state.label}
                            </MenuItem>
                          ))}
                        </TextField>
                      </Grid>
                      <Grid item xs={12} sm={12} md={6} lg={6}>
                        <TextField
                          required
                          variant="outlined"
                          value={marriedSisters}
                          select
                          label="How many married - कितनों की शादी हुवी? "
                          fullWidth
                          onChange={handelMarriedSisters}
                        >
                          {countDown.map((state) => (
                            <MenuItem key={state.label} value={state.value}>
                              {state.label}
                            </MenuItem>
                          ))}
                        </TextField>
                      </Grid>
                    </Grid>
                    <br />
                    {/* Biradari and maslak slection */}
                    <Grid
                      container
                      direction="row"
                      columnSpacing={2}
                      rowSpacing={2}
                    >
                      <Grid item xs={12} sm={12} md={6} lg={6}>
                        <TextField
                          variant="outlined"
                          value={biradari}
                          select
                          label="Biradari"
                          fullWidth
                          onChange={handelBiradariSelect}
                        >
                          {biradariSlectBar.map((state) => (
                            <MenuItem key={state.label} value={state.value}>
                              {state.label}
                            </MenuItem>
                          ))}
                        </TextField>
                      </Grid>
                      <Grid item xs={12} sm={12} md={6} lg={6}>
                        <TextField
                          variant="outlined"
                          value={maslak}
                          select
                          label="Maslak"
                          fullWidth
                          onChange={handelMaslakSelect}
                        >
                          {maslakSlectBar.map((state) => (
                            <MenuItem key={state.label} value={state.value}>
                              {state.label}
                            </MenuItem>
                          ))}
                        </TextField>
                      </Grid>
                    </Grid>
                    <br />
                    <Grid container direction="row">
                      <Grid item xs={12} sm={12} md={2} lg={2}></Grid>
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
