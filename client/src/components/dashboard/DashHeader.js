import * as React from "react";
import AppBar from "@mui/material/AppBar";
import { styled, alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
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
import { theme } from "../ThemeColor";

const Search = styled("div")(({ theme }) => ({
  display: "none",
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
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
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function DashHeader() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ boxShadow: "none" }}>
        <Toolbar
          display="flex"
          justifyContent="spaceBetween"
          alignItems="center"
          sx={{ p: "0 0.3rem", minHeight: "66px", background: "white" }}
        >
          <Grid display="flex" sx={{ pt: "0.8rem" }}>
            <Grid sx={{ width: "100%" }}>
              <img src={logo} style={{ width: "110px" }}></img>
            </Grid>
            <KeyboardArrowDownIcon
              fontSize="medium"
              sx={{ color: theme.palette.secondary.main }}
            />
          </Grid>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>

          <Grid
            display="flex"
            justifyContent="flex-end"
            alignItems="center"
            gap={2}
            sx={{ width: "100%" }}
          >
            <HomeIcon
              fontSize="large"
              sx={{ color: theme.palette.black.main }}
            />
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
                style={{ width: "35px", borderRadius: "50%" }}
              ></img>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
