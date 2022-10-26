import React from "react";
import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

import phoneImg from "../assets/images/cbc7174b4f05.png";
import SigninPage from "./SigninPage";
import Animation from "../components/homepage/Animation";

const Container = styled(Grid)(({ theme }) => ({
  height: "100vh",
  padding: "2rem",
  position: "relative",
  [theme.breakpoints.up("md")]: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "2rem",
  },
}));

const PhoneComponent = styled(Grid)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.up("md")]: {
    position: "relative",
    display: "block",
    maxWidth: "420px",
  },
}));

const HomePage = () => {
  return (
    <Container>
      <PhoneComponent>
        <img style={{ maxWidth: "100%" }} src={phoneImg}></img>
        <Animation />
      </PhoneComponent>
      <SigninPage />
    </Container>
  );
};

export default HomePage;
