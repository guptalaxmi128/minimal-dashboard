import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
// @mui
import { Button, TextField, FormControl, MenuItem, Select, InputLabel, Box, Container,Card } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

// ----------------------------------------------------------------------

export default function Order() {
  const theme = useTheme();
  const [value, setValue] = useState(null);

  return (
    <>
      <Helmet>
        <title> Order | Minimal UI </title>
      </Helmet>

      <Container>
        <Card sx={{width:"100%",padding:"24px"}}>
     
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, mt: 2, mb: 2 }}>
            <TextField name="orderId" label="OrderId" type="number" fullWidth mt={4} sx={{ mr: { sm: 1 } }} />
            <TextField name="id" label="Id" type="number" fullWidth sx={{ mr: { sm: 1 } }} />
          </Box>
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, mt: 2, mb: 2 }}>
            <TextField name="address" label="Address" type="text" fullWidth sx={{ mr: { sm: 1 } }} />
            <TextField name="pincode" label="Pincode" type="number" fullWidth sx={{ mr: { sm: 1 } }} />
          </Box>
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, mt: 2, mb: 2 }}>
            <TextField name="locationCode" label="Location Code" type="number" fullWidth sx={{ mr: { sm: 1 } }} />
            <TextField name="cCordinator" label="Customer Cordinator" type="text" fullWidth sx={{ mr: { sm: 1 } }} />
          </Box>
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, mt: 2, mb: 2 }}>
            <TextField name="mNumber" label="Material Number" type="text" fullWidth sx={{ mr: { sm: 1 } }} />
           
            <TextField name="sCordinator" label="Source Cordinator" type="text" fullWidth sx={{ mr: { sm: 1 } }} />
          </Box>
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, mt: 2, mb: 2 }}>
            <TextField name="mNumber" label="Material Number" type="text" fullWidth sx={{ mr: { sm: 1 } }} />
          
            <TextField name="fCordinator" label="Factory Cordinator" type="text"  fullWidth sx={{ mr: { sm: 1 } }} />
          </Box>
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, mt: 2, mb: 2 }}>
            <TextField name="mNumber" label="Material Number" type="text" fullWidth sx={{ mr: { sm: 1 } }} />
            <TextField name="productId" label="Product Id" type="number" fullWidth sx={{ mr: { sm: 1 } }} />
          </Box>
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, mt: 2, mb: 2 }}>
            <TextField name="product" label="Product" type="text" fullWidth sx={{ mr: { sm: 1 } }} />
            <TextField name="productCode" label="Product Code" type="number" fullWidth sx={{ mr: { sm: 1 } }} />
          </Box>
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, mt: 2, mb: 2 }}>
            <Box sx={{ width: '100%', ml: { sm: 1 }, mt: { xs: 2, sm: 0 } }} >
             
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
            <Box sx={{ width: '100%', ml: { sm: 1 }, mt: { xs: 2, sm: 0 } }} >
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
            <TextField name="fArea" label="Factory Area" type="text" fullWidth sx={{ mr: { sm: 1 } }} />
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
