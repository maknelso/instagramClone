import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import { styled } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import logo from '../../assets/images/d2529dbef8ed.png';
import profile from '../../assets/images/profilepage/profile.jpg';
import { Grid } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import HomeIcon from '@mui/icons-material/Home';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import InstagramIcon from '@mui/icons-material/Instagram';
import SearchIcon from '@mui/icons-material/Search';
import ExploreIcon from '@mui/icons-material/Explore';
import { theme } from '../ThemeColor';
import { Link, useParams } from 'react-router-dom';
import DashHamBtn from './DashHamBtn';
import DashSearchMobile from './DashSearchMobile';
import DashSearchDrawer from './DashSearchDrawer';

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

const StyledInputBase = styled(InputBase)(({ theme }) => ({
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

export default function DashHeader({ handleLogOut, usersInfo }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [isDrawerOpen, setIsDrawderOpen] = React.useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    // <Box sx={{ flexGrow: 1 }}>
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
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
            sx={{ width: '100%' }}
          />
        </Search>
        <DashSearchMobile
          anchorEl={anchorEl}
          setAnchorEl={setAnchorEl}
          handleClick={handleClick}
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
            {/* </Link> */}
            {navItems.map((item, index) => {
              return (
                <Link
                  to={item.to}
                  key={index}
                  style={{ color: 'black', textDecoration: 'none' }}
                >
                  <DashIconHover className="dash__hover">
                    <Grid sx={{ color: theme.palette.black.main }}>
                      {item.logo}
                    </Grid>
                    <DashIconText sx={{ color: theme.palette.black.main }}>
                      {item.text}
                    </DashIconText>
                  </DashIconHover>
                </Link>
              );
            })}
          </DashMobileDisappear>

          <Link
            // to={`/instagram/${usersInfo.username}`}
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
        </DashIconWrapper>
      </DashToolBar>
      <DashSearchDrawer
        isDrawerOpen={isDrawerOpen}
        setIsDrawderOpen={setIsDrawderOpen}
      />
      <DashHamBtn handleLogOut={handleLogOut} />
    </DashAppBar>
    // </Box>
  );
}

const navItems = [
  {
    id: 3,
    logo: <ExploreIcon fontSize="large" />,
    text: 'Explore',
    to: '/dashboard',
  },
  {
    id: 4,
    logo: <ChatBubbleOutlineIcon fontSize="large" />,
    text: 'Messages',
    to: '/dashboard',
  },
  {
    id: 5,
    logo: <FavoriteBorderIcon fontSize="large" />,
    text: 'Notifications',
    to: '/dashboard',
  },
  {
    id: 6,
    logo: <AddCircleOutlineIcon fontSize="large" />,
    text: 'Create',
    to: '/dashboard',
  },
];
