import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
// @mui
import { Button, TextField, FormControl, MenuItem, Select, InputLabel, Box, Container, Card } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

// ----------------------------------------------------------------------

export default function Snaglist() {
  const [value, setValue] = useState(null);
  const [image, setImage] = useState();

  const handleImageFile = (event) => {
    setImage(event.target.files[0]);
};

  return (
    <>
      <Helmet>
        <title> Order | Minimal UI </title>
      </Helmet>

      <Container>
        <Card sx={{ width: '100%', padding: '24px' }}>
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, mt: 2, mb: 2 }}>
            <TextField name="orderId" label="OrderId" type="number" fullWidth mt={4} sx={{ mr: { sm: 1 } }} />
            <TextField name="id" label="Id" type="number" fullWidth sx={{ mr: { sm: 1 } }} />
          </Box>
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, mt: 2, mb: 2 }}>
            <TextField name="name" label="Name" type="text" fullWidth sx={{ mr: { sm: 1 } }} />
            <TextField name="address" label="Address" type="text" fullWidth sx={{ mr: { sm: 1 } }} />
          </Box>
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, mt: 2, mb: 2 }}>
            <TextField name="pincode" label="Pincode" type="number" fullWidth sx={{ mr: { sm: 1 } }} />
            <TextField name="locationCode" label="Location Code" type="number" fullWidth sx={{ mr: { sm: 1 } }} />
          </Box>
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, mt: 2, mb: 2 }}>
            <TextField name="cCordinator" label="Customer Cordinator" type="text" fullWidth sx={{ mr: { sm: 1 } }} />
            <TextField name="mNumber" label="Material Number" type="text" fullWidth sx={{ mr: { sm: 1 } }} />
          </Box>
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, mt: 2, mb: 2 }}>
            <TextField name="sCordinator" label="Site Cordinator" type="text" fullWidth sx={{ mr: { sm: 1 } }} />
            <TextField name="mNumber" label="Material Number" type="text" fullWidth sx={{ mr: { sm: 1 } }} />
          </Box>
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, mt: 2, mb: 2 }}>
            <TextField name="fCordinator" label="Factory Cordinator" type="text" fullWidth sx={{ mr: { sm: 1 } }} />
            <TextField name="mNumber" label="Material Number" type="text" fullWidth sx={{ mr: { sm: 1 } }} />
          </Box>
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, mt: 2, mb: 2 }}>
            <TextField name="productId" label="Product Id" type="number" fullWidth sx={{ mr: { sm: 1 } }} />
            <TextField name="product" label="Product" type="text" fullWidth sx={{ mr: { sm: 1 } }} />
          </Box>
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, mt: 2, mb: 2 }}>
            <TextField name="productCode" label="Product Code" type="number" fullWidth sx={{ mr: { sm: 1 } }} />
            <TextField name="fArea" label="Factory Area" type="text" fullWidth sx={{ mr: { sm: 1 } }} />
          </Box>
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, mt: 2, mb: 2 }}>
            <Box sx={{ width: '100%', ml: { sm: 1 }, mt: { xs: 2, sm: 0 } }}>
              <LocalizationProvider dateAdapter={AdapterDayjs} sx={{ maxWidth: '100%', width: '100%' }}>
                <DatePicker
                  label="Target Start Date"
                  value={value}
                  onChange={(newValue) => {
                    setValue(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} fullWidth />}
                />
              </LocalizationProvider>
            </Box>
            <Box sx={{ width: '100%', ml: { sm: 1 }, mt: { xs: 2, sm: 0 } }}>
              <LocalizationProvider dateAdapter={AdapterDayjs} sx={{ maxWidth: '100%', width: '100%' }}>
                <DatePicker
                  label="Target End Date"
                  value={value}
                  onChange={(newValue) => {
                    setValue(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} fullWidth />}
                />
              </LocalizationProvider>
            </Box>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, mt: 2, mb: 2 }}>
            <Box sx={{ width: '100%', ml: { sm: 1 }, mt: { xs: 2, sm: 0 } }}>
              <LocalizationProvider dateAdapter={AdapterDayjs} sx={{ maxWidth: '100%', width: '100%' }}>
                <DatePicker
                  label="Start Date"
                  value={value}
                  onChange={(newValue) => {
                    setValue(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} fullWidth />}
                />
              </LocalizationProvider>
            </Box>
            <Box sx={{ width: '100%', ml: { sm: 1 }, mt: { xs: 2, sm: 0 } }}>
              <LocalizationProvider dateAdapter={AdapterDayjs} sx={{ maxWidth: '100%', width: '100%' }}>
                <DatePicker
                  label="End Date"
                  value={value}
                  onChange={(newValue) => {
                    setValue(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} fullWidth />}
                />
              </LocalizationProvider>
            </Box>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, mt: 2, mb: 2 }}>
            <TextField name="issue" label="Issue" type="text" fullWidth sx={{ mr: { sm: 1 } }} />
            <TextField name="reason" label="Reason" type="text" fullWidth sx={{ mr: { sm: 1 } }} />
          </Box>
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, mt: 2, mb: 2 }}>
            <TextField name="solution" label="Solution" type="text" fullWidth sx={{ mr: { sm: 1 } }} />
            <TextField name="action" label="Action" type="text" fullWidth sx={{ mr: { sm: 1 } }} />
          </Box>
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, mt: 2, mb: 2 ,mr: 2}}>
          <Box sx={{ width: '100%', ml: { sm: 1 }, mt: { xs: 2, sm: 0 } }} mr={1} >
              <Button
                // variant="outlined"
                
                fullWidth
                component="label"
                style={{ height: '56px',border:"1px solid #dcdcdc", color:"gray", fontSize:"1rem" }}
                value={image}
                onChange={(e) => handleImageFile(e)}
              >
                Pic
                <input hidden accept="image/*" type="file" />
              </Button>
            </Box>
            <TextField
                    label="Video"
                    // variant="outlined"
                    fullWidth
                    sx={{ mr: { sm: 1 }, ml: 1 }}
                    type="text"
                    name="video"
                   
                />
          </Box>
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, mt: 2, mb: 2 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Status</InputLabel>
              <Select
                name="status"
                label="Status"
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                sx={{ mr: { sm: 1 } }}
                //   value={profile.jobAs}
                //   onChange={selectionJobHandler}
              >
                <MenuItem value="individual">Individual</MenuItem>
                <MenuItem value="team">Having a Team</MenuItem>
              </Select>
            </FormControl>
            <Box sx={{ width: '100%', ml: { xs: 0, sm: 1 } }} />
          </Box>
          <Box>
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
          </Box>
        </Card>
      </Container>
    </>
  );
}
