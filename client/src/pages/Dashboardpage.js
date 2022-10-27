import { Grid } from "@mui/material";
import React from "react";
import DashFollowing from "../components/dashboard/DashFollowing";
import DashHeader from "../components/dashboard/DashHeader";
import DashPosts from "../components/dashboard/DashPosts";
import DashSidebar from "../components/dashboard/DashSidebar";
import { styled } from "@mui/material/styles";

const DashContainer = styled(Grid)(({ theme }) => ({
  height: "100vh",
  [theme.breakpoints.up("md")]: {
    display: "flex",
    justifyContent: "center",
    // alignItems: "center",
  },
}));

const DashContainerLeft = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    padding: "2rem 6rem",
    paddingRight: "2rem",
  },
}));

const DashContainerRight = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    padding: "3rem 0",
    width: "23%",
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
