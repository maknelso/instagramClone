import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { theme } from '../ThemeColor';

export default function DashSearchMobile({ setAnchorEl, anchorEl }) {
  //   const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  //   const handleClick = (event) => {
  //     setAnchorEl(event.currentTarget);
  //   };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Menu
      anchorEl={anchorEl}
      id="account-menu"
      open={open}
      onClose={handleClose}
      onClick={handleClose}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      transformOrigin={{ vertical: 'top', horizontal: 'left' }}
      PaperProps={{
        style: {
          left: '50%',
          transform: 'translateX(-50%) translateY(32%)',
        },
        elevation: 0,
        sx: {
          overflow: 'visible',
          filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
          mt: 1.5,
          width: '300px',
          '& .MuiAvatar-root': {
            width: 32,
            height: 32,
            ml: -0.5,
            mr: 1,
          },
          '&:before': {
            content: '""',
            display: 'block',
            position: 'absolute',
            top: 0,
            right: '50%',
            width: 10,
            height: 10,
            bgcolor: 'background.paper',
            transform: 'translateY(-50%) rotate(45deg)',
            zIndex: 0,
          },
        },
      }}
    >
      <Grid
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          p: '0.5rem 1rem',
        }}
      >
        <Typography fontWeight={500}>Recent</Typography>
        <Typography color="primary">Clear all</Typography>
      </Grid>
      <MenuItem sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Grid sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Avatar />
          <Grid>
            <Typography>Leomessi</Typography>
            <Typography>Leo Messi</Typography>
          </Grid>
        </Grid>
        <CloseIcon />
      </MenuItem>
      <MenuItem sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Grid sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Avatar />
          <Grid>
            <Typography>tonyrose123</Typography>
            <Typography>tony</Typography>
          </Grid>
        </Grid>
        <CloseIcon />
      </MenuItem>
    </Menu>
  );
}
