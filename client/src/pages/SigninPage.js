import React, { useState, useEffect, useContext } from 'react';
import { Button, Divider, Grid, TextField, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import heroImg from '../assets/images/d2529dbef8ed.png';
import FacebookIcon from '@mui/icons-material/Facebook';
import appleStore from '../assets/images/apple_store.png';
import googleStore from '../assets/images/google_store.png';
import { Link, useNavigate } from 'react-router-dom';
import { theme } from '../components/ThemeColor';
import { APILogin } from '../api/user';

const FormComponent = styled(Grid)(({ theme }) => ({
  padding: '1rem',
  maxWidth: '350px',
  margin: '8rem auto',
  [theme.breakpoints.up('md')]: {
    padding: '0rem',
  },
}));

const BorderUp = styled(Grid)(({ theme }) => ({
  border: '1px solid lightgrey',
  padding: '0 2rem',
  backgroundColor: 'white',
  marginBottom: '0.5rem',

  [theme.breakpoints.up('md')]: {
    backgroundColor: 'white',
    marginBottom: '0.8rem',
  },
}));

const BorderBtm = styled(Grid)(({ theme }) => ({
  border: '1px solid lightgrey',
  padding: '1rem 2rem',
  backgroundColor: 'white',
  marginBottom: '4rem',

  [theme.breakpoints.up('md')]: {
    border: '1px solid lightgrey',
    marginBottom: '1rem',
  },
}));

const GetApp = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  marginBottom: '4rem',

  [theme.breakpoints.up('md')]: {
    marginBottom: '1rem',
  },
}));

const SigninPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordErr, setPasswordErr] = useState(false);

  const navigate = useNavigate();

  const handleEmailInput = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordInput = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    const body = { email: email, password: password };

    APILogin(body)
      .then(function (response) {
        setPasswordErr(false);
        sessionStorage.setItem('token', response.data.token);
      })
      .then(() => {
        navigate('/dashboard');
      })
      .catch(function (error) {
        console.log(error);
        setPasswordErr(true);
      });
  };

  return (
    <Grid>
      <FormComponent>
        <BorderUp>
          <Grid display="flex" justifyContent="center" sx={{ p: '2rem 3rem' }}>
            <img style={{ maxWidth: '150px' }} src={heroImg}></img>
          </Grid>
          <TextField
            fullWidth
            placeholder="Phone number, username, or email"
            inputProps={{
              style: {
                height: '8px',
                fontSize: '12px',
                background: theme.palette.secondary.secondary,
              },
            }}
            value={email}
            onChange={handleEmailInput}
            sx={{ mb: '0.3rem' }}
          />
          <TextField
            type="password"
            fullWidth
            placeholder="Password"
            inputProps={{
              style: {
                height: '8px',
                fontSize: '12px',
                background: theme.palette.secondary.secondary,
              },
            }}
            value={password}
            onChange={handlePasswordInput}
            error={passwordErr ? true : false}
            helperText={
              passwordErr
                ? 'Sorry, your password was incorrect. Please double-check your password.'
                : ''
            }
            sx={{ mb: '0.8rem' }}
          />
          <Button
            variant="contained"
            fullWidth
            sx={{
              textTransform: 'capitalize',
              fontSize: '12px',
              mb: '1.2rem',
              height: '30px',
            }}
            onClick={handleLogin}
          >
            Log in
          </Button>
          <Divider sx={{ mb: '1.2rem', fontSize: '12px' }}>OR</Divider>
          <Grid
            display="flex"
            justifyContent="center"
            alignItems="center"
            gap={1}
            sx={{ mb: '0.6rem' }}
          >
            <FacebookIcon color="dark" />
            <Typography
              fontWeight="bold"
              fontSize="12px"
              sx={{ color: theme.palette.dark.secondary }}
            >
              Log in with Facebook
            </Typography>
          </Grid>
          <Typography
            fontSize="12px"
            sx={{
              textAlign: 'center',
              mb: '0.5rem',
              color: theme.palette.dark.secondary,
            }}
          >
            Forgot password?
          </Typography>
        </BorderUp>
        <BorderBtm display="flex" justifyContent="center" gap={1}>
          <Typography fontSize="12px">Don't have an account?</Typography>
          <Link to="/signup" style={{ textDecoration: 'none' }}>
            <Typography color="primary" fontWeight={700} fontSize="12px">
              Sign up
            </Typography>
          </Link>
        </BorderBtm>
        <GetApp fontSize="12px">Get the app.</GetApp>
        <Grid
          display="flex"
          justifyContent="center"
          gap="1rem"
          sx={{ mb: '2rem' }}
        >
          <Grid sx={{ maxWidth: '120px' }}>
            <img style={{ maxWidth: '100%' }} src={appleStore}></img>
          </Grid>
          <Grid sx={{ maxWidth: '120px' }}>
            <img style={{ maxWidth: '100%' }} src={googleStore}></img>
          </Grid>
        </Grid>
        <Typography textAlign="center" color="secondary" fontSize="12px">
          &copy;2022 Instagram from Meta
        </Typography>
      </FormComponent>
    </Grid>
  );
};

export default SigninPage;
