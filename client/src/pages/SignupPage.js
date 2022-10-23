import React, { useEffect, useState } from "react";
import { Button, Divider, Grid, TextField, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import heroImg from "../assets/images/d2529dbef8ed.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import appleStore from "../assets/images/apple_store.png";
import googleStore from "../assets/images/google_store.png";
import axios from "axios";
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

const SignupPage = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [fullName, setFullName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleOnChangePhone = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleOnChangeFullName = (e) => {
    setFullName(e.target.value);
  };

  const handleOnChangeUserName = (e) => {
    setUserName(e.target.value);
  };

  const handleOnChangePassword = (e) => {
    setPassword(e.target.value);
  };

  // useEffect(() => {
  // });

  const handleUserRegister = () => {
    axios
      .post("/api/register", {
        email: phoneNumber,
        name: fullName,
        username: userName,
        password: password,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    // console.log("clicked");
    // const fetchRegisterApi = async () => {
    //   const payload = {
    //     firstName: "Fred",
    //     lastName: "Flintstone",
    //   };
    //   try {
    //     const res = await axios.post("/api/register", payload);
    //     return res.json();
    //   } catch (err) {
    //     console.log(err);
    //   }
    // };
    // fetchRegisterApi();
  };

  // console.log(phoneNumber);
  // console.log(fullName);
  // console.log(userName);
  // console.log(password);

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
                fontSize: "12px",
              },
            }}
            onChange={handleOnChangePhone}
            value={phoneNumber}
          />
          <TextField
            fullWidth
            placeholder="Full Name"
            sx={{ mb: "0.5rem" }}
            inputProps={{
              style: {
                height: "10px",
                fontSize: "12px",
              },
            }}
            onChange={handleOnChangeFullName}
            value={fullName}
          />
          <TextField
            fullWidth
            placeholder="Username"
            sx={{ mb: "0.5rem" }}
            inputProps={{
              style: {
                height: "10px",
                fontSize: "12px",
              },
            }}
            onChange={handleOnChangeUserName}
            value={userName}
          />
          <TextField
            fullWidth
            placeholder="Password"
            type="password"
            inputProps={{
              style: {
                height: "10px",
                fontSize: "12px",
              },
            }}
            onChange={handleOnChangePassword}
            value={password}
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
            onClick={handleUserRegister}
          >
            Sign up
          </Button>
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
