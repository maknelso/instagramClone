import React, { useContext, useState } from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArchiveIcon from '@mui/icons-material/Archive';
import HomeIcon from '@mui/icons-material/Home';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { Grid } from '@mui/material';
import UserContext from '../../contexts/userContext';

const DashFooterMobile = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    display: 'none',
  },
  // [theme.breakpoints.up("md")]: {},
}));

export default function DashFooter() {
  const [value, setValue] = useState(0);
  const { setOpenPostModal } = useContext(UserContext);

  return (
    <DashFooterMobile sx={{ pb: 7 }}>
      <CssBaseline />

      <Paper
        sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="Home" icon={<HomeIcon />} />
          <BottomNavigationAction
            label="Create Post"
            icon={<AddCircleOutlineIcon />}
            onClick={() => setOpenPostModal(true)}
          />
          <BottomNavigationAction
            label="Message"
            icon={<ChatBubbleOutlineIcon />}
          />
        </BottomNavigation>
      </Paper>
    </DashFooterMobile>
  );
}
