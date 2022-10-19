import React from "react";
import { Button, Divider, Grid, TextField, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import heroImg from "../assets/images/d2529dbef8ed.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import appleStore from "../assets/images/apple_store.png";
import googleStore from "../assets/images/google_store.png";
import { theme } from "../components/ThemeColor";
import { Link } from "react-router-dom";

const Container = styled(Grid)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "0 2rem",
  height: "100vh",
}));

const ContainerInner = styled(Grid)(({ theme }) => ({
  maxWidth: "330px",
  [theme.breakpoints.up("sm")]: {
    border: "1px solid lightgrey",
    padding: "1rem 2rem",
    background: "white",
  },
}));

// const BorderUp = styled(Grid)(({ theme }) => ({
//   [theme.breakpoints.up("md")]: {
//     // border: "1px solid lightgrey",
//     // padding: "0 2rem",
//     // marginBottom: "0.8rem",
//   },
// }));

const SignupPage = () => {
  return (
    <Container>
      <ContainerInner>
        <Grid>
          <Grid sx={{ p: "1rem 5rem" }}>
            <img style={{ width: "100%" }} src={heroImg}></img>
          </Grid>
          <Typography
            variant="h6"
            color={theme.palette.grey.main}
            sx={{ textAlign: "center", mb: "1rem" }}
          >
            Sign up to see photos and videos from your friends.
          </Typography>
          <Button
            variant="contained"
            startIcon={<FacebookIcon />}
            fullWidth
            sx={{
              textTransform: "capitalize",
              fontSize: "16px",
              mb: "1.6rem",
            }}
          >
            Log in with Facebook
          </Button>
          <Divider sx={{ mb: "1.2rem" }}>OR</Divider>
          <TextField
            fullWidth
            placeholder="Phone number, username, or email"
            sx={{ mb: "0.5rem" }}
            inputProps={{
              style: {
                height: "10px",
              },
            }}
          />
          <TextField
            fullWidth
            placeholder="Full Name"
            sx={{ mb: "0.5rem" }}
            inputProps={{
              style: {
                height: "10px",
              },
            }}
          />
          <TextField
            fullWidth
            placeholder="Username"
            sx={{ mb: "0.5rem" }}
            inputProps={{
              style: {
                height: "10px",
              },
            }}
          />
          <TextField
            fullWidth
            placeholder="Password"
            inputProps={{
              style: {
                height: "10px",
              },
            }}
            sx={{ mb: "0.5rem" }}
          />
          <Button
            variant="contained"
            fullWidth
            sx={{
              textTransform: "capitalize",
              fontSize: "16px",
              mb: "1.6rem",
            }}
          >
            Sign up
          </Button>
          {/* <Grid
              display="flex"
              justifyContent="center"
              gap={1}
              sx={{ mb: "1rem" }}
            >
              <FacebookIcon color="dark" />
              <Typography>Log in with Facebook</Typography>
            </Grid> */}
          <Typography sx={{ textAlign: "center", mb: "1.2rem" }}>
            Have an account?
            <Link to="/">Log in</Link>
          </Typography>
        </Grid>

        <Typography sx={{ textAlign: "center", mb: "1rem" }}>
          Get the app
        </Typography>
        <Grid display="flex" justifyContent="space-between" sx={{ mb: "2rem" }}>
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
      </ContainerInner>
    </Container>
  );
};

export default SignupPage;
