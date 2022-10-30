import * as React from "react";
import AppBar from "@mui/material/AppBar";
import { styled, alpha } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import logo from "../../assets/images/d2529dbef8ed.png";
import avatar from "../../assets/images/dashboard/avatar.jpg";
import { Grid } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import HomeIcon from "@mui/icons-material/Home";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import DehazeOutlinedIcon from "@mui/icons-material/DehazeOutlined";
import { theme } from "../ThemeColor";
import { Link } from "react-router-dom";

const Search = styled("div")(({ theme }) => ({
  display: "none",
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "#F7F8FA",
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("md")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
    // display: "block",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "black",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    color: "black",
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "40ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const DashToolBar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: "0 0.3rem",
  minHeight: "66px",
  background: "white",
  justifyContent: "space-between",
  [theme.breakpoints.up("sm")]: {
    flexDirection: "column",
    padding: 0,
  },
  [theme.breakpoints.up("md")]: {},
}));

const DashLogoWrapper = styled(Grid)(({ theme }) => ({
  display: "flex",
  paddingTop: "0.8rem",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
  // [theme.breakpoints.up("md")]: {},
}));

const DashIconWrapper = styled(Grid)(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  gap: "1rem",
  [theme.breakpoints.up("sm")]: {
    flexDirection: "column",
  },
  // [theme.breakpoints.up("md")]: {},
}));

const DashHamburger = styled(Grid)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.up("sm")]: {
    display: "block",
  },
  // [theme.breakpoints.up("md")]: {},
}));

const DashAppBar = styled(AppBar)(({ theme }) => ({
  position: "static",
  boxShadow: "none",
  [theme.breakpoints.up("sm")]: {
    position: "absolute",
    left: 0,
    width: "65px",
    height: "100vh",
    background: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem",
    borderRight: "1px solid lightgrey",
  },
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("lg")]: {
    width: "200px",
    alignItems: "flex-start",
  },
}));

export default function DashHeader() {
  return (
    // <Box sx={{ flexGrow: 1 }}>
    <DashAppBar>
      <DashToolBar>
        <DashLogoWrapper>
          <Link to="/">
            <Grid sx={{ width: "100%" }}>
              <img src={logo} style={{ width: "85px" }}></img>
            </Grid>
          </Link>
          <KeyboardArrowDownIcon
            fontSize="medium"
            sx={{ color: theme.palette.secondary.main }}
          />
        </DashLogoWrapper>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
        <DashIconWrapper>
          <HomeIcon fontSize="large" sx={{ color: theme.palette.black.main }} />
          <ChatBubbleOutlineIcon
            fontSize="medium"
            sx={{ color: theme.palette.black.main }}
          />
          <AddCircleOutlineIcon
            fontSize="medium"
            sx={{ color: theme.palette.black.main }}
          />
          <TravelExploreIcon
            fontSize="medium"
            sx={{ color: theme.palette.black.main }}
          />
          <FavoriteBorderIcon
            fontSize="medium"
            sx={{ color: theme.palette.black.main }}
          />
          <Grid>
            <img
              src={avatar}
              style={{ width: "30px", borderRadius: "50%" }}
            ></img>
          </Grid>
        </DashIconWrapper>
      </DashToolBar>
      <DashHamburger>
        <DehazeOutlinedIcon
          sx={{ color: theme.palette.black.main }}
          fontSize="medium"
        />
      </DashHamburger>
    </DashAppBar>
    // </Box>
  );
}
