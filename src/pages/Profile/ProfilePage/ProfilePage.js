import { useState } from 'react';
import { Button, TextField, FormControl, MenuItem, Select, InputLabel, Box } from '@mui/material';

const ProfilePage = () => {
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    mobile: '',
    password: '',
    confirmPassword: '',
    partnerType: '',
    jobAs: '',
    workLocationPincode: '',
    workLocation: '',
    firmName: '',
    presentAddress: '',
    permanentAddress: '',
    aadharNumber: '',
    religion: '',
  });

  const handleChange = (event) => {
    setProfile({ ...profile, [event.target.name]: event.target.value });
    console.log(profile);
  };

  const selectionJobHandler = (event) => {
    setProfile({ ...profile, [event.target.name]: event.target.value });
  };
  const [image, setImage] = useState();

  const handleImageFile = (e) => {
    setImage(e.target.files[0], '&&&&');
    // console.log(image);
  };
  console.log(image);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(profile);
    try {
      const formData = new FormData();
      formData.append('partnerType', profile.partnerType);
      formData.append('jobAs', profile.jobAs);
      formData.append('name', profile.name);
      formData.append('email', profile.email);
      formData.append('mobile', profile.mobile);
      formData.append('password', profile.password);
      formData.append('permanentAddress', profile.permanentAddress);
      formData.append('presentAddress', profile.presentAddress);
      formData.append('firmName', profile.firmName);
      formData.append('workLocation', profile.workLocation);
      formData.append('workLocationPincode', profile.workLocationPincode);
      formData.append('aadharNumber', profile.aadharNumber);
      formData.append('religion', profile.religion);
      formData.append('aadharCard', image);
      console.log(formData);
      // dispatch(registerPartner(formData, navigate));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, mt: 2, mb: 2 }}>
          <TextField
            name="name"
            label=" Name"
            type="text"
            fullWidth
            sx={{ mr: { sm: 1 } }}
            value={profile.name}
            onChange={handleChange}
          />
          <TextField
            name="email"
            label="Email address"
            type="email"
            fullWidth
            sx={{ mr: { sm: 1 } }}
            value={profile.email}
            onChange={handleChange}
          />
        </Box>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, mt: 2, mb: 2 }}>
          <TextField
            name="password"
            label="Password"
            type="password"
            fullWidth
            sx={{ mr: { sm: 1 } }}
            value={profile.password}
            onChange={handleChange}
          />
          <TextField
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            fullWidth
            sx={{ mr: { sm: 1 } }}
            value={profile.confirmPassword}
            onChange={handleChange}
          />
        </Box>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, mt: 2, mb: 2 }}>
          <TextField
            name="mobile"
            label="Mobile"
            type="number"
            fullWidth
            sx={{ mr: { sm: 1 } }}
            value={profile.mobile}
            onChange={handleChange}
          />
          <TextField
            name="workLocationPincode"
            label="Work Location Pincode"
            type="number"
            fullWidth
            sx={{ mr: { sm: 1 } }}
            value={profile.workLocationPincode}
            onChange={handleChange}
          />
        </Box>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, mt: 2, mb: 2 }}>
          <TextField
            name="partnerType"
            label="Partner Type"
            type="text"
            fullWidth
            sx={{ mr: { sm: 1 } }}
            value={profile.partnerType}
            onChange={handleChange}
          />

          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Job As</InputLabel>
            <Select
              name="jobAs"
              label="Job As"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              sx={{ mr: { sm: 1 } }}
              value={profile.jobAs}
              onChange={selectionJobHandler}
            >
              <MenuItem value="individual">Individual</MenuItem>
              <MenuItem value="team">Having a Team</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, mt: 2, mb: 2 }}>
          <TextField
            name="workLocation"
            label="Work Location"
            type="text"
            fullWidth
            sx={{ mr: { sm: 1 } }}
            value={profile.workLocation}
            onChange={handleChange}
          />
          <TextField
            name="firmName"
            label="Firm Name"
            type="text"
            fullWidth
            sx={{ mr: { sm: 1 } }}
            value={profile.firmName}
            onChange={handleChange}
          />
        </Box>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, mt: 2, mb: 2 }}>
          <TextField
            name="presentAddress"
            label="Present Address"
            type="text"
            fullWidth
            sx={{ mr: { sm: 1 } }}
            value={profile.presentAddress}
            onChange={handleChange}
          />
          <TextField
            name="permanentAddress"
            label="Permanent Address"
            type="text"
            fullWidth
            sx={{ mr: { sm: 1 } }}
            value={profile.permanentAddress}
            onChange={handleChange}
          />
        </Box>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, mt: 2, mb: 2 }}>
          <TextField
            name="aadharNumber"
            label="Aadhar Number"
            fullWidth
            sx={{ mr: { sm: 1 } }}
            value={profile.aadharNumber}
            onChange={handleChange}
          />

          <Box
            sx={{
              width: '100%',
              borderRadius: '5px',
              ml: { xs: 0, sm: 1 },
              mt: { xs: 2, sm: 0 },
            }}
          >
            <Button
              variant="outlined"
              fullWidth
              component="label"
              sx={{ mr: { sm: 1 } }}
              style={{ height: '53px' }}
              value={image}
              onChange={(e) => handleImageFile(e)}
            >
              Upload Aadhar
              <input hidden accept="image/*" type="file" />
            </Button>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, mt: 2, mb: 2 }}>
          <TextField
            name="religion"
            label="Religion"
            type="text"
            fullWidth
            sx={{ mr: { sm: 1 } }}
            value={profile.religion}
            onChange={handleChange}
          />
          <Box sx={{ width: '100%', ml: { sm: 1 } }} />
        </Box>

        <Box>
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </Box>
      </form>
    </>
  );
};

export default ProfilePage;
