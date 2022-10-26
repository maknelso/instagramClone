import React from "react";
import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

import phoneImg from "../assets/images/cbc7174b4f05.png";
import SigninPage from "./SigninPage";

const Container = styled(Grid)(({ theme }) => ({
  height: "100vh",
  padding: "2rem",
  [theme.breakpoints.up("md")]: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  [theme.breakpoints.up("lg")]: {
    gap: "2rem",
  },
}));

const PhoneComponent = styled(Grid)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.up("md")]: {
    display: "block",
    maxWidth: "350px",
  },
}));

const HomePage = () => {
  return (
    <Container>
      <PhoneComponent>
        <img style={{ maxWidth: "100%" }} src={phoneImg}></img>
      </PhoneComponent>
      <SigninPage />
    </Container>
  );
};

export default HomePage;
