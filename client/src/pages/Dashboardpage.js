import { Grid } from "@mui/material";
import React from "react";
import DashFollowing from "../components/dashboard/DashFollowing";
import DashHeader from "../components/dashboard/DashHeader";
import DashPosts from "../components/dashboard/DashPosts";

const Dashboardpage = () => {
  return (
    <Grid>
      <DashHeader />
      <DashFollowing />
      <DashPosts />
    </Grid>
  );
};

export default Dashboardpage;
