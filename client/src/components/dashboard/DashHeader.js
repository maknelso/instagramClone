import React, { useState, useContext, useRef } from 'react';
import AppBar from '@mui/material/AppBar';
import { styled } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import logo from '../../assets/images/d2529dbef8ed.png';
import profile from '../../assets/images/profilepage/profile.jpg';
import { Grid, TextField, Autocomplete } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import InstagramIcon from '@mui/icons-material/Instagram';
import SearchIcon from '@mui/icons-material/Search';
import { theme } from '../ThemeColor';
import DashHamBtn from './DashHamBtn';
import DashSearchMobile from './DashSearchMobile';
import DashSearchDrawer from './DashSearchDrawer';
import { Link } from 'react-router-dom';
import UserContext from '../../contexts/userContext';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: '#F7F8FA',
  // "&:hover": {
  //   backgroundColor: alpha(theme.palette.common.white, 0.25),
  // },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    display: 'none',
  },
  [theme.breakpoints.up('md')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
    // display: "block",
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'black',
}));

const StyledInputBase = styled(TextField)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    color: 'black',
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '40ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const DashToolBar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: '0 0.3rem',
  minHeight: '66px',
  background: 'white',
  justifyContent: 'space-between',
  [theme.breakpoints.up('sm')]: {
    flexDirection: 'column',
    padding: 0,
  },
  [theme.breakpoints.up('md')]: {
    alignItems: 'flex-start',
  },
  [theme.breakpoints.up('lg')]: {
    width: '100%',
  },
}));

const DashLogoWrapper = styled(Grid)(({ theme }) => ({
  display: 'flex',
  paddingTop: '0.8rem',
  [theme.breakpoints.up('sm')]: {
    display: 'none',
  },
  [theme.breakpoints.up('lg')]: {
    display: 'flex',
    marginBottom: '3rem',
  },
}));

const DashIconHover = styled(Grid)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
  [theme.breakpoints.up('sm')]: {},
  [theme.breakpoints.up('lg')]: {},
}));

const DashInsLoggo = styled(Grid)(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.up('sm')]: {
    display: 'block',
    marginBottom: '1rem',
  },
  [theme.breakpoints.up('lg')]: {
    display: 'none',
  },
}));

const DashIconWrapper = styled(Grid)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  [theme.breakpoints.up('sm')]: {
    flexDirection: 'column',
    gap: '1rem',
  },
  [theme.breakpoints.up('lg')]: {
    alignItems: 'flex-start',
    width: '100%',
  },
}));

const DashIconText = styled(Grid)(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.up('lg')]: {
    display: 'block',
    fontSize: '16px',
  },
}));
const DashMobileDisappear = styled(Grid)(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.up('sm')]: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
}));

const DashAppBar = styled(AppBar)(({ theme }) => ({
  position: 'static',
  boxShadow: 'none',
  padding: '0 1rem',
  background: 'white',
  [theme.breakpoints.up('sm')]: {
    height: '100%',
    position: 'fixed',
    left: 0,
    width: '65px',
    // height: "100vh",
    background: 'white',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '3rem 0',
    borderRight: '1px solid lightgrey',
  },
  [theme.breakpoints.up('md')]: {},
  [theme.breakpoints.up('lg')]: {
    width: '200px',
    alignItems: 'flex-start',
    padding: '2rem',
  },
}));

const DashDownWrapper = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    display: 'none',
  },
  // [theme.breakpoints.up("md")]: {},
}));

const SearchInput = (
  handleSearchChange
) => {
  return (
    // <Search>
    //   <SearchIconWrapper>
    //     <SearchIcon />
    //   </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search…"
        onChange={handleSearchChange}
        sx={{ width: '100%' }}
      />
    // </Search>
  );
};

export default function DashHeader({ handleLogOut, usersInfo }) {
  const [isDrawerOpen, setIsDrawderOpen] = useState(false);
  const [inputEl, setInputEl] = useState('');
  const { setOpenPostModal } = useContext(UserContext);

  const handleSearchChange = (e) => {
    setInputEl(e.target.value);
  };

  console.log(inputEl);

  const options = [{ label: 'Leomessi' }, { label: 'tonyrose123' }];

  return (
    <DashAppBar>
      <DashToolBar>
        <DashLogoWrapper>
          <Link to="/dashboard">
            <Grid sx={{ width: '100%' }}>
              <img src={logo} style={{ width: '100px' }}></img>
            </Grid>
          </Link>
          <DashDownWrapper>
            <KeyboardArrowDownIcon
              fontSize="medium"
              sx={{ color: theme.palette.secondary.main }}
            />
          </DashDownWrapper>
        </DashLogoWrapper>
        {/* <Search onClick={handleShowPopUp}>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
            onChange={handleSearchChange}
            sx={{ width: '100%' }}
            ref={inputRef}
            onFocus={handleShowPopUp}
          />
        </Search>
        <DashSearchMobile 
        anchorEl={inputRef} 
        open={open}
        setOpen={setOpen}
         /> */}
        <Autocomplete
          // disablePortal
          options={options}
          renderInput={
            (params) =>  <StyledInputBase startAdornment={
            <SearchIcon />} {...params} />
          }
          sx={{ width: '100%' }}
        />

        <DashIconWrapper>
          <DashInsLoggo>
            <InstagramIcon
              fontSize="large"
              sx={{ color: theme.palette.black.main }}
            />
          </DashInsLoggo>
          <DashMobileDisappear>
            <Link
              to="/dashboard"
              style={{ color: 'black', textDecoration: 'none' }}
            >
              <DashIconHover className="dash__hover">
                <Grid sx={{ color: theme.palette.black.main }}>
                  <HomeIcon fontSize="large" />
                </Grid>
                <DashIconText sx={{ color: theme.palette.black.main }}>
                  Home
                </DashIconText>
              </DashIconHover>
            </Link>

            <DashIconHover
              className="dash__hover"
              onClick={() => setIsDrawderOpen(true)}
            >
              <Grid sx={{ color: theme.palette.black.main }}>
                <SearchIcon fontSize="large" />
              </Grid>
              <DashIconText sx={{ color: theme.palette.black.main }}>
                Search
              </DashIconText>
            </DashIconHover>
            <DashIconHover className="dash__hover">
              <Grid sx={{ color: theme.palette.black.main }}>
                <ChatBubbleOutlineIcon fontSize="large" />
              </Grid>
              <DashIconText sx={{ color: theme.palette.black.main }}>
                Messages
              </DashIconText>
            </DashIconHover>
            <DashIconHover
              className="dash__hover"
              onClick={() => setOpenPostModal(true)}
            >
              <Grid sx={{ color: theme.palette.black.main }}>
                <AddCircleOutlineIcon fontSize="large" />
              </Grid>
              <DashIconText sx={{ color: theme.palette.black.main }}>
                Create
              </DashIconText>
            </DashIconHover>
          </DashMobileDisappear>

          {usersInfo && (
            <Link
              to={`/instagram/${usersInfo.username}`}
              style={{ color: 'black', textDecoration: 'none' }}
            >
              <DashIconHover
                className="dash__hover"
                display="flex"
                gap={1}
                alignItems="center"
              >
                <img
                  src={profile}
                  style={{
                    width: '20px',
                    borderRadius: '50%',
                    border: '1px solid black',
                  }}
                ></img>
                <DashIconText
                  sx={{ color: theme.palette.black.main, fontWeight: 'bold' }}
                >
                  Profile
                </DashIconText>
              </DashIconHover>
            </Link>
          )}
        </DashIconWrapper>
      </DashToolBar>
      <DashSearchDrawer
        isDrawerOpen={isDrawerOpen}
        setIsDrawderOpen={setIsDrawderOpen}
      />
      <DashHamBtn handleLogOut={handleLogOut} />
    </DashAppBar>
  );
}
