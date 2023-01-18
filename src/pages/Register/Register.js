import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
// @mui
import { styled } from '@mui/material/styles';
import {
  Container,
  Typography,
  Stack,
  Button,
  IconButton,
  InputAdornment,
  TextField,
  FormControl,
  MenuItem,
  Select,
  InputLabel,
  // ImageIcon
} from '@mui/material';
// import ImageIcon from '@material-ui/icons/Image';

// hooks
import useResponsive from '../../hooks/useResponsive';
// components
import Logo from '../../components/logo';
import Iconify from '../../components/iconify';
// sections
// import { LoginForm } from '../sections/auth/login';
import './Register.css';

// ----------------------------------------------------------------------

const StyledRoot = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex',
  },
}));

const StyledSection = styled('div')(({ theme }) => ({
  width: '100%',
  maxWidth: 480,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  boxShadow: theme.customShadows.card,
  backgroundColor: theme.palette.background.default,
}));

// const StyledContent = styled('div')(({ theme }) => ({
//   maxWidth: 480,
//   margin: 'auto',
//   minHeight: '100vh',
//   display: 'flex',
//   justifyContent: 'center',
//   flexDirection: 'column',
//   padding: theme.spacing(12, 0),
// }));

// ----------------------------------------------------------------------

export default function Register() {
  const mdUp = useResponsive('up', 'md');

  const [showPassword, setShowPassword] = useState(false);

  const [first, setfirst] = useState(true);
  const [second, setsecond] = useState(false);
  const [third, setthird] = useState(false);

  const [selected, setSelected] = useState('');
  const [selectedJob, setSelectedJob] = useState('');

  const selectionChangeHandler = (event) => {
    setSelected(event.target.value);
  };

  const selectionJobHandler = (event) => {
    setSelectedJob(event.target.value);
  };

  const toggle = (id) => {
    if (id === 1) {
      setfirst(false);
      setsecond(true);
    } else if (id === 2) {
      setsecond(false);
      setfirst(true);
    } else if (id === 3) {
      setsecond(false);
      setthird(true);
    } else if (id === 4) {
      setthird(false);
      setsecond(true);
    }
  };

  return (
    <>
      <Helmet>
        <title> Login | Minimal UI </title>
      </Helmet>

      <StyledRoot>
        <Logo
          sx={{
            position: 'fixed',
            top: { xs: 16, sm: 24, md: 40 },
            left: { xs: 16, sm: 24, md: 40 },
          }}
        />

        {mdUp && (
          <StyledSection>
            <Typography variant="h3" sx={{ px: 5, mt: 10, mb: 5 }}>
              Hi, Welcome
            </Typography>
            <img src="/assets/illustrations/illustration_login.png" alt="login" />
          </StyledSection>
        )}

        <Container maxWidth="sm">
          {/* <StyledContent> */}
          <div className="radio-field" style={{ marginTop: '20px' }}>
            <div
              className="radio"
              style={{
                backgroundColor: first || second || third ? 'rgb(84,63,241)' : '',
              }}
            />
            <div className="radio1" style={{ backgroundColor: second || third ? 'rgb(84,63,241)' : '' }} />
            <div className="radio2" />
          </div>{' '}
          <br />
          {first && (
            <>
              <Typography variant="h4" gutterBottom>
                Create Account
              </Typography>
              <Stack spacing={3}>
                <TextField name="name" label="Name" />
                <TextField name="email" label="Email address" />
                <TextField name="mobile" label="Mobile" />

                <TextField
                  name="password"
                  label="Password"
                  type={showPassword ? 'text' : 'password'}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                          <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  name="confirm password"
                  label=" Confirm Password"
                  type={showPassword ? 'text' : 'password'}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                          <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Stack>
              <Button
                sx={{ marginLeft: '450px' }}
                onClick={() => {
                  toggle(1);
                }}
              >
                <p className="button3">
                  <b>Next</b>
                </p>
              </Button>
            </>
          )}
          {second && (
            <>
              <Typography variant="h4" gutterBottom>
                Your Organization
              </Typography>
              <Stack spacing={3}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Partner Type</InputLabel>
                  <Select
                    name="partnertype"
                    label="Partner Type"
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={selected}
                    onChange={selectionChangeHandler}
                  >
                    <MenuItem value={1}>Work Partner</MenuItem>
                    <MenuItem value={2}>Survey Partner</MenuItem>
                  </Select>
                </FormControl>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Job As</InputLabel>
                  <Select
                    name="jobas"
                    label="Job As"
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={selectedJob}
                    onChange={selectionJobHandler}
                  >
                    <MenuItem value={1}>Individual</MenuItem>
                    <MenuItem value={2}>Having a Team</MenuItem>
                  </Select>
                </FormControl>
                <TextField name="worklocationpincode" label="Work Location Pincode" />
                <TextField name="worklocation" label="Work Location" />
                <TextField name="firmname" label="Firm Name" />
              </Stack>
              <Button
                sx={{ justifyContent: 'left' }}
                onClick={() => {
                  toggle(2);
                }}
              >
                <p className="button2">
                  <b>Previous</b>
                </p>
              </Button>
              <Button
                sx={{ marginLeft: '285px', padding: 0 }}
                onClick={() => {
                  toggle(3);
                }}
              >
                <p className="button5">
                  <b>Next</b>
                </p>
              </Button>
            </>
          )}
          {third && (
            <>
              <Typography variant="h4" gutterBottom>
                Address & Aadhar
              </Typography>
              <Stack spacing={3}>
                <TextField name="presentaddress" label="Present Address" />
                <TextField name="permanentaddress" label="Permanent Address" />
                <TextField name="aadharnumber" label="Aadhar Number" />
                <TextField
                  name="uploadaadhar"
                  label="Upload Aadhar"
                  hidden
                  accept="image/*"
                  type="file"
                />

                <TextField name="religion" label="Religion" />
              </Stack>
              <Button
                sx={{ justifyContent: 'left' }}
                onClick={() => {
                  toggle(4);
                }}
              >
                <p className="button4">
                  <b>Previous</b>
                </p>
              </Button>
              <Button sx={{ padding: 0, marginLeft: '285px' }}>
                <p className="button7">
                  <b>Next</b>
                </p>
              </Button>
            </>
          )}
          {/* </StyledContent> */}
        </Container>
      </StyledRoot>
    </>
  );
}
