import React from "react";
import { Button, Divider, Grid, TextField, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import heroImg from "../assets/images/d2529dbef8ed.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import appleStore from "../assets/images/apple_store.png";
import googleStore from "../assets/images/google_store.png";
import phoneImg from "../assets/images/cbc7174b4f05.png";
import { Link } from "react-router-dom";

const Container = styled(Grid)(({ theme }) => ({
  height: "100vh",
  padding: "2rem",
  [theme.breakpoints.up("md")]: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  [theme.breakpoints.up("lg")]: {
    justifyContent: "center",
    gap: "3rem",
  },
}));

const PhoneComponent = styled(Grid)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.up("md")]: {
    display: "block",
    maxWidth: "450px",
  },
}));

const BorderUp = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    border: "1px solid lightgrey",
    padding: "0 2rem",
    marginBottom: "0.8rem",
  },
}));

const BorderBtm = styled(Grid)(({ theme }) => ({
  padding: "0 2rem",
  [theme.breakpoints.up("md")]: {
    border: "1px solid lightgrey",
    padding: "1rem 2rem",
    marginBottom: "1rem",
  },
}));

const HomePage = () => {
  return (
    <Container>
      <PhoneComponent>
        <img style={{ maxWidth: "100%" }} src={phoneImg}></img>
      </PhoneComponent>
      <Grid>
        <Grid>
          <BorderUp>
            <Grid sx={{ p: "2rem 5rem" }}>
              <img style={{ width: "100%" }} src={heroImg}></img>
            </Grid>
            <TextField
              fullWidth
              placeholder="Phone number, username, or email"
              sx={{ mb: "0.8rem" }}
            />
            <TextField fullWidth placeholder="Password" sx={{ mb: "1.2rem" }} />
            <Button
              variant="contained"
              fullWidth
              sx={{
                textTransform: "capitalize",
                fontSize: "20px",
                mb: "1.6rem",
              }}
            >
              Log in
            </Button>
            <Divider sx={{ mb: "1.2rem" }}>OR</Divider>
            <Grid
              display="flex"
              justifyContent="center"
              gap={1}
              sx={{ mb: "1rem" }}
            >
              <FacebookIcon color="dark" />
              <Typography>Log in with Facebook</Typography>
            </Grid>
            <Typography sx={{ textAlign: "center", mb: "1.2rem" }}>
              Forgot password?
            </Typography>
          </BorderUp>
          <BorderBtm display="flex" justifyContent="center" gap={1}>
            <Typography>Don't have an account?</Typography>
            <Link to="/signup">
              <Typography color="primary" fontWeight={700}>
                Sign up
              </Typography>
            </Link>
          </BorderBtm>
          <Typography sx={{ textAlign: "center", mb: "1rem" }}>
            Get the app.
          </Typography>
          <Grid
            display="flex"
            justifyContent="center"
            gap="1rem"
            sx={{ mb: "2rem" }}
          >
            <Grid sx={{ maxWidth: "120px" }}>
              <img style={{ maxWidth: "100%" }} src={appleStore}></img>
            </Grid>
            <Grid sx={{ maxWidth: "120px" }}>
              <img style={{ maxWidth: "100%" }} src={googleStore}></img>
            </Grid>
          </Grid>
          <Typography textAlign="center" color="secondary">
            &copy;2022 Instagram from Meta
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomePage;
