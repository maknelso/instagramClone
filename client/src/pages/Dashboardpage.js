import { Grid } from "@mui/material";
import React from "react";
import DashFollowing from "../components/dashboard/DashFollowing";
import DashHeader from "../components/dashboard/DashHeader";
import DashPosts from "../components/dashboard/DashPosts";
import DashSidebar from "../components/dashboard/DashSidebar";
import { styled } from "@mui/material/styles";

const DashContainer = styled(Grid)(({ theme }) => ({
  height: "100vh",
  maxWidth: "400px",
  margin: "0 auto",
  [theme.breakpoints.up("md")]: {
    maxWidth: "1600px",
    display: "flex",
    justifyContent: "center",
  },
}));

const DashContainerLeft = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.up("sm")]: {
    padding: "2rem 0",
  },
  [theme.breakpoints.up("md")]: {
    padding: "2rem 6rem",
    paddingRight: "2rem",
  },
}));

const DashContainerRight = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    padding: "3rem 0",
    width: "28%",
    maxWidth: "500px",
  },
}));

const Dashboardpage = () => {
  return (
    <Grid>
      <DashHeader />
      <DashContainer>
        <DashContainerLeft>
          <DashFollowing />
          <DashPosts />
        </DashContainerLeft>
        <DashContainerRight>
          <DashSidebar />
        </DashContainerRight>
      </DashContainer>
    </Grid>
  );
};

export default Dashboardpage;
