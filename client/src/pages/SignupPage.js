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
import validator from "validator";

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
  const [phoneNumberErr, setPhoneNumberErr] = useState("");
  const [fullName, setFullName] = useState("");
  const [fullNameErr, setFullNameErr] = useState("");
  const [userName, setUserName] = useState("");
  const [userNameErr, setUserNameErr] = useState("");
  const [password, setPassword] = useState("");
  const [passwordErr, setPasswordErr] = useState("");

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

  const handleUserRegister = (e) => {
    e.preventDefault();
    validate();

    const fetchRegisterApi = async () => {
      const payload = {
        email: phoneNumber,
        name: fullName,
        username: userName,
        password: password,
      };
      try {
        if (!phoneNumberErr && !userNameErr && !fullNameErr && !passwordErr) {
          const res = await axios.post("/api/register", payload);
          console.log(res);
        } else {
          return null;
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchRegisterApi();
  };

  const validate = () => {
    // email and phone number validation
    if (!phoneNumber) {
      setPhoneNumberErr("Please enter your email or phone number");
    } else if (!validator.isEmail(phoneNumber)) {
      if (validator.isMobilePhone(phoneNumber, "en-CA")) {
        setPhoneNumberErr("");
      } else {
        setPhoneNumberErr("Please enter a valid email address or phone number");
      }
    } else if (validator.isEmail(phoneNumber)) {
      setPhoneNumberErr("");
    }
    // full name validation
    if (!fullName) {
      setFullNameErr("Please enter your full name");
    } else if (fullName) {
      setFullNameErr("");
    }
    // user name validation
    if (!userName) {
      setUserNameErr("Please enter your user name");
    } else if (userName) {
      setUserNameErr("");
    }
    if (!password) {
      setPasswordErr("Please enter your password");
    } else if (password) {
      if (!validator.isStrongPassword(password)) {
        setPasswordErr(
          "Please enter at least 8 digit, and include at least  1 lowercase, 1 uppercase, 1 number, and a symbol"
        );
      } else {
        setPasswordErr("");
      }
    }
  };

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

          <form onSubmit={handleUserRegister}>
            <TextField
              fullWidth
              autoFocus
              name="phoneNumber"
              // autoComplete="email"
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
              error={phoneNumberErr ? true : false}
              helperText={phoneNumberErr ? phoneNumberErr : null}
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
              error={fullNameErr ? true : false}
              helperText={fullNameErr ? fullNameErr : null}
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
              error={userNameErr ? true : false}
              helperText={userNameErr ? userNameErr : null}
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
              error={passwordErr ? true : false}
              helperText={passwordErr ? passwordErr : null}
              sx={{ mb: "0.5rem" }}
            />
            <Button
              type="submit"
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
          </form>
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
