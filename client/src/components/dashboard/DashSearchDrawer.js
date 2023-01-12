import React, { useEffect, useState } from 'react';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import { Grid, Typography, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import CloseIcon from '@mui/icons-material/Close';
import Avatar from '@mui/material/Avatar';
import MenuItem from '@mui/material/MenuItem';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const DashDrawer = styled(Drawer)(({ theme }) => ({
  '& .MuiDrawer-paper': {
    position: 'absolute',
    left: '65px',
    boxShadow: 'none',
    borderRight: '1px solid lightgrey',

    [theme.breakpoints.up('lg')]: {
      left: '200px',
    },
  },
}));

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: '#F7F8FA',
  marginLeft: 0,
  width: '100%',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    // padding: theme.spacing(1, 1, 1, 0),
    padding: '1rem',
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

export default function DashSearchDrawer({ isDrawerOpen, setIsDrawderOpen }) {
  const [searchDb, setSearchDb] = useState([]);
  const [searchItem, setSearchItem] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get('/api/login')
      .then((response) => {
        setSearchDb(response.data);
        // console.log(response.data);
        const filteredArr = response.data.filter((searchedUser) => {
          return searchedUser.username === searchItem;
          // return searchedUser.username.match(searchItem);
        });
        setSearchDb(filteredArr);
      })
      .catch(() => {});
  }, [searchItem]);

  const handleSearchOnChange = (e) => {
    setSearchItem(e.target.value);
  };

  return (
    <Grid>
      <DashDrawer
        BackdropProps={{ invisible: true }}
        anchor="left"
        open={isDrawerOpen}
        onClose={() => setIsDrawderOpen(false)}
      >
        <Grid sx={{ width: '350px' }}>
          <Grid
            sx={{ p: '1rem' }}
            display="flex"
            flexDirection="column"
            gap={3}
          >
            <Typography variant="h5">Search</Typography>
            <Search>
              <StyledInputBase
                onChange={handleSearchOnChange}
                value={searchItem}
                placeholder="Enter username…"
                inputProps={{ 'aria-label': 'search' }}
                sx={{ width: '100%' }}
              />
            </Search>
          </Grid>
          <Divider />
          <Grid>
            <Grid
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                p: '1rem',
              }}
            >
              <Typography fontWeight={500}>Recent</Typography>
              <Typography color="primary">Clear all</Typography>
            </Grid>
            {searchDb.map((user, index) => {
              return (
                <Button
                  style={{
                    textDecoration: 'none',
                    color: 'black',
                    cursor: 'pointer',
                  }}
                  key={index}
                  onClick={() => navigate(`/instagram/${user.username}`)}
                >
                  <MenuItem
                    sx={{ display: 'flex', justifyContent: 'space-between' }}
                  >
                    <Grid
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        gap: '1rem',
                      }}
                    >
                      <Avatar src={user.avatar} />
                      <Grid>
                        <Typography>{user.username}</Typography>
                        <Typography>{user.name}</Typography>
                      </Grid>
                    </Grid>
                    <CloseIcon />
                  </MenuItem>
                </Button>
              );
            })}

            {/* <MenuItem sx={{ display: "flex", justifyContent: "space-between" }}>
              <Grid
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "1rem",
                }}
              >
                <Avatar />
                <Grid>
                  <Typography>tonyrose123</Typography>
                  <Typography>tony</Typography>
                </Grid>
              </Grid>
              <CloseIcon />
            </MenuItem> */}
          </Grid>
        </Grid>
      </DashDrawer>
    </Grid>
  );
}
