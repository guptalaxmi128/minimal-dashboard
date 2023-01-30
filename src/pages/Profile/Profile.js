import { Helmet } from 'react-helmet-async';

import { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Tabs, Tab, Typography, Container, Stack } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import DashboardLayout from '../../layouts/dashboard/index';
import ProfilePage from './ProfilePage/ProfilePage';





// ----------------------------------------------------------------------

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


export default function Profile() {

    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    const theme = useTheme();
 
  return (
    <>
      <Helmet>
        <title> Profile | Minimal UI </title>
      </Helmet>
      
      {/* <DashboardLayout /> */}
      <Container >
      
        {/* <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Profile
          </Typography>
        </Stack> */}

        <Box
          sx={{
            width: '100%',
            bgcolor: 'background.paper',
            borderRadius: 2,
            borderColor: theme.palette.mode === 'dark' ? theme.palette.divider : theme.palette.grey.A800,
            boxShadow: 'inherit',
            ':hover': {
              boxShadow: 'inherit',
            },
            '& pre': {
              m: 0,
              p: '16px !important',
              fontFamily: theme.typography.fontFamily,
              fontSize: '0.75rem',
            },
          }}
        >
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} variant="scrollable" aria-label="scrollable auto tabs example">
              <Tab label="Profile" {...a11yProps(0)} />
              <Tab label="Login security" {...a11yProps(1)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
      <ProfilePage />
    </TabPanel>
    {/* <TabPanel value={value} index={1}>
      <AllArticles articles={articles} />
    </TabPanel> */}
        </Box>
      </Container> 

    
    </>
  );
}
