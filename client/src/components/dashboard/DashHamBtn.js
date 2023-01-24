import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Divider, Grid } from '@mui/material';
import DehazeOutlinedIcon from '@mui/icons-material/DehazeOutlined';
import { theme } from '../ThemeColor';
import { styled } from '@mui/material/styles';

const DashHamburger = styled(Grid)(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.up('sm')]: {
    display: 'block',
  },
  [theme.breakpoints.up('lg')]: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
  },
}));

const DashIconText = styled(Grid)(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.up('lg')]: {
    display: 'block',
    fontSize: '16px',
  },
}));

export default function DashHamBtn({ handleLogOut }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <DashHamburger
        sx={{ color: theme.palette.black.main, pt: '1rem', cursor: 'pointer' }}
        className="dash__hover"
        fontSize="medium"
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <DehazeOutlinedIcon fontSize="large" />
        <DashIconText sx={{ color: theme.palette.black.main }}>
          More
        </DashIconText>
      </DashHamburger>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <MenuItem
          sx={{ minHeight: 0, width: '180px', m: 0 }}
          onClick={handleClose}
        >
          Settings
        </MenuItem>
        <Divider sx={{ m: 0 }} />
        <MenuItem
          sx={{ minHeight: 0, width: '180px', m: 0 }}
          onClick={handleClose}
        >
          Saved
        </MenuItem>
        <Divider />
        <MenuItem
          sx={{ minHeight: 0, width: '180px', m: 0 }}
          onClick={handleClose}
        >
          Report a problem
        </MenuItem>
        <Divider />
        <MenuItem
          sx={{ minHeight: 0, width: '180px', m: 0 }}
          onClick={handleClose}
        >
          Switch accounts
        </MenuItem>
        <Divider />
        <MenuItem
          sx={{ minHeight: 0, width: '180px', m: 0 }}
          onClick={handleLogOut}
        >
          Log out
        </MenuItem>
      </Menu>
    </div>
  );
}
