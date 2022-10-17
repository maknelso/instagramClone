import { Button, Divider, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import heroImg from "../assets/images/d2529dbef8ed.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import appleStore from "../assets/images/apple_store.png";
import googleStore from "../assets/images/google_store.png";
import { theme } from "../components/ThemeColor";

const HomePage = () => {
  return (
    <Grid sx={{ p: "0 2rem" }}>
      <Grid>
        <Grid sx={{ p: "3rem 5rem" }}>
          <img style={{ width: "100%" }} src={heroImg}></img>
        </Grid>
        <Grid>
          <TextField
            fullWidth
            placeholder="Phone number, username, or email"
            sx={{ mb: "0.8rem" }}
          />
          <TextField fullWidth placeholder="Password" sx={{ mb: "1.2rem" }} />
          <Button
            variant="contained"
            fullWidth
            sx={{ textTransform: "capitalize", fontSize: "20px", mb: "1.6rem" }}
          >
            Log in
          </Button>
          <Divider sx={{ mb: "3rem" }}>OR</Divider>
          <Grid
            display="flex"
            justifyContent="center"
            gap={1}
            sx={{ mb: "1.6rem" }}
          >
            <FacebookIcon />
            <Typography>Log in with Facebook</Typography>
          </Grid>
          <Typography sx={{ textAlign: "center", mb: "3rem" }}>
            Forgot password?
          </Typography>
          <Grid
            display="flex"
            justifyContent="center"
            gap={1}
            sx={{ mb: "3rem" }}
          >
            <Typography>Don't have an account?</Typography>
            <Typography color="primary" fontWeight={700}>
              Sign up
            </Typography>
          </Grid>
          <Typography sx={{ textAlign: "center", mb: "1rem" }}>
            Get the app.
          </Typography>
          <Grid
            display="flex"
            justifyContent="space-between"
            sx={{ mb: "2rem" }}
          >
            <Grid sx={{ width: "48%" }}>
              <img style={{ width: "100%" }} src={appleStore}></img>
            </Grid>
            <Grid sx={{ width: "48%" }}>
              <img style={{ width: "100%" }} src={googleStore}></img>
            </Grid>
          </Grid>
          <Typography textAlign="center" color="secondary">
            &copy;2022 Instagram from Meta
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default HomePage;
