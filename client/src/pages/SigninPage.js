import React, { useState } from "react";
import { Button, Divider, Grid, TextField, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import heroImg from "../assets/images/d2529dbef8ed.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import appleStore from "../assets/images/apple_store.png";
import googleStore from "../assets/images/google_store.png";
import { Link } from "react-router-dom";
import { theme } from "../components/ThemeColor";

const FormComponent = styled(Grid)(({ theme }) => ({
  padding: "4rem",
  [theme.breakpoints.up("md")]: {
    padding: "0rem",
    maxWidth: "350px",
  },
}));

const BorderUp = styled(Grid)(({ theme }) => ({
  border: "1px solid lightgrey",
  padding: "0 2rem",
  backgroundColor: "white",
  marginBottom: "0.5rem",

  [theme.breakpoints.up("md")]: {
    backgroundColor: "white",
    marginBottom: "0.8rem",
  },
}));

const BorderBtm = styled(Grid)(({ theme }) => ({
  border: "1px solid lightgrey",
  padding: "1rem 2rem",
  backgroundColor: "white",
  marginBottom: "0.5rem",

  [theme.breakpoints.up("md")]: {
    border: "1px solid lightgrey",
    marginBottom: "1rem",
  },
}));

const SigninPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordErr, setPasswordErr] = useState(false);

  const handleEmailInput = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordInput = (e) => {
    setPassword(e.target.value);
  };

  return (
    <FormComponent>
      <BorderUp>
        <Grid display="flex" justifyContent="center" sx={{ p: "2rem 3rem" }}>
          <img style={{ maxWidth: "150px" }} src={heroImg}></img>
        </Grid>
        <TextField
          fullWidth
          placeholder="Phone number, username, or email"
          inputProps={{
            style: {
              height: "8px",
              fontSize: "12px",
              background: theme.palette.secondary.secondary,
            },
          }}
          value={email}
          onChange={handleEmailInput}
          sx={{ mb: "0.3rem" }}
        />
        <TextField
          fullWidth
          placeholder="Password"
          inputProps={{
            style: {
              height: "8px",
              fontSize: "12px",
              background: theme.palette.secondary.secondary,
            },
          }}
          value={password}
          onChange={handlePasswordInput}
          sx={{ mb: "0.8rem" }}
        />
        <Button
          variant="contained"
          fullWidth
          sx={{
            textTransform: "capitalize",
            fontSize: "12px",
            mb: "1.2rem",
            height: "30px",
          }}
        >
          Log in
        </Button>
        <Divider sx={{ mb: "1.2rem", fontSize: "12px" }}>OR</Divider>
        <Grid
          display="flex"
          justifyContent="center"
          alignItems="center"
          gap={1}
          sx={{ mb: "0.6rem" }}
        >
          <FacebookIcon color="dark" />
          <Typography
            fontWeight="bold"
            fontSize="12px"
            sx={{ color: theme.palette.dark.secondary }}
          >
            Log in with Facebook
          </Typography>
        </Grid>
        <Typography
          fontSize="12px"
          sx={{
            textAlign: "center",
            mb: "0.5rem",
            color: theme.palette.dark.secondary,
          }}
        >
          Forgot password?
        </Typography>
      </BorderUp>
      <BorderBtm display="flex" justifyContent="center" gap={1}>
        <Typography fontSize="12px">Don't have an account?</Typography>
        <Link to="/signup" style={{ textDecoration: "none" }}>
          <Typography color="primary" fontWeight={700} fontSize="12px">
            Sign up
          </Typography>
        </Link>
      </BorderBtm>
      <Typography fontSize="12px" sx={{ textAlign: "center", mb: "1rem" }}>
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
      <Typography textAlign="center" color="secondary" fontSize="12px">
        &copy;2022 Instagram from Meta
      </Typography>
    </FormComponent>
  );
};

export default SigninPage;
