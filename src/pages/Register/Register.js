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
  Box
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
  const [register, setRegister] = useState({
    name: '',
    email: '',
    mobile: '',
    password: '',
    confirmPassword: '',
    partnerType:'',
    jobAs:'',
    workLocationPincode: '',
    workLocation: '',
    firmName: '',
    presentAddress: '',
    permanentAddress: '',
    aadharNumber: '',
    religion: '',
  });
  const mdUp = useResponsive('up', 'md');

  const [showPassword, setShowPassword] = useState(false);

  const [first, setfirst] = useState(true);
  const [second, setsecond] = useState(false);
  const [third, setthird] = useState(false);

  const [image, setImage] = useState();

  const handleImageFile = (e) => {
    setImage(e.target.files[0], '&&&&');
   // console.log(image);
  };
  console.log(image);

  const handleChange = (event) => {
    setRegister({ ...register, [event.target.name]: event.target.value });
  };

  const partnerTypeHandler = (event) => {
    setRegister({...register,[event.target.name]: event.target.value});
  };


  const selectionJobHandler = (event) => {
    setRegister({...register,[event.target.name]: event.target.value});
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(register)
    // try {
    //  
    //   const registerData = new FormData(); {
    //     formData.append('name', register.name);
    //     formData.append('email',register.email);
    //     formData.append('mobile',register.mobile);
    //     formData.append('password',register.password);
    //     formData.append('confirmPassword',register.confirmPassword);
    //     formData.append('partnerType',register.partnerType);
    //     formData.append('jobAs',register.jobAs);
    //     formData.append('workLocationPincode',register.workLocationPincode);
    //     formData.append('workLocation',register.workLocation);
    //     formData.append('firmName',register.firmName);
    //     formData.append('presentAddress',register.presentAddress);
    //     formData.append('permanentAddress',register.permanentAddress);
    //     formData.append('aadharNumber',register.aadharNumber);
    //     formData.append('religion',register.religion);
    //     formData.append('image',image);
    //   };
    //   await dispatch(addRegister(registerData));
    //   setRegister({
    //     name: '',
    //     email: '',
    //     mobile: '',
    //     password: '',
    //     confirmPassword: '',
    //     partnerType:'',
    //     jobAs:'',
    //     workLocationPincode: '',
    //     workLocation: '',
    //     firmName: '',
    //     presentAddress: '',
    //     permanentAddress: '',
    //     aadharNumber: '',
    //     religion: '',
    //   });
    //   setImage('');
    // } catch (error) {
    //   console.log(error);
    // }
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
                <TextField name="name" label="Name" type="text" value={register.name} onChange={handleChange} />
                <TextField
                  name="email"
                  label="Email address"
                  type="email"
                  value={register.email}
                  onChange={handleChange}
                />
                <TextField name="mobile" label="Mobile" type="number" value={register.mobile} onChange={handleChange} />

                <TextField
                  name="password"
                  label="Password"
                  value={register.password}
                  onChange={handleChange}
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
                  name="confirmPassword"
                  label=" Confirm Password"
                  value={register.confirmPassword}
                  onChange={handleChange}
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
                    name="partnerType"
                    label="Partner Type"
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={register.partnerType}
                    onChange={partnerTypeHandler}
                  >
                    <MenuItem value={1}>Work Partner</MenuItem>
                    <MenuItem value={2}>Survey Partner</MenuItem>
                  </Select>
                </FormControl>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Job As</InputLabel>
                  <Select
                    name="jobAs"
                    label="Job As"
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={register.jobAs}
                    onChange={selectionJobHandler}
                  >
                    <MenuItem value={1}>Individual</MenuItem>
                    <MenuItem value={2}>Having a Team</MenuItem>
                  </Select>
                </FormControl>
                <TextField
                  name="workLocationPincode"
                  label="Work Location Pincode"
                  type="number"
                  value={register.workLocationPincode}
                  onChange={handleChange}
                />
                <TextField
                  name="workLocation"
                  label="Work Location"
                  type="text"
                  value={register.workLocation}
                  onChange={handleChange}
                />
                <TextField
                  name="firmName"
                  label="Firm Name"
                  type="text"
                  value={register.firmName}
                  onChange={handleChange}
                />
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
                <TextField
                  name="presentAddress"
                  label="Present Address"
                  type="text"
                  value={register.presentAddress}
                  onChange={handleChange}
                />
                <TextField
                  name="permanentAddress"
                  label="Permanent Address"
                  type="text"
                  value={register.permanentAddress}
                  onChange={handleChange}
                />
                <TextField
                  name="aadharNumber"
                  label="Aadhar Number"
                  value={register.aadharNumber}
                  onChange={handleChange}
                />
                {/* <TextField
                  // name="uploadaadhar"
                  label="Upload Aadhar"
                  hidden
                  accept="image/*"
                  type="file"
                  value={image}
                  onChange={(e) => handleImageFile(e)}
                /> */}
                 
                <Box sx={{ width: '100%', border:"1px solid #a6a6a6", borderRadius:"5px", ml: { xs: 0, sm: 1 }, mt: { xs: 2, sm: 0 } }}>
                    <Button
                        // variant="outlined"
                        fullWidth
                        component="label"
                        style={{ height: '52px',color:"gray" }}
                        value={image}
                        onChange={(e) => handleImageFile(e)}
                    >
                        Upload Aadhar
                        <input hidden accept="image/*" type="file" />
                    </Button>
                </Box>


                <TextField
                  name="religion"
                  label="Religion"
                  type="text"
                  value={register.religion}
                  onChange={handleChange}
                />
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
              <Button sx={{ padding: 0, marginLeft: '285px' }} onClick={(e)=>handleSubmit(e)}>
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
