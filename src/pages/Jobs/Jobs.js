import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Tabs, Tab, Typography, Container, Stack } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import NewJobs from './NewJobs/NewJobs';
import { UserListToolbar} from "../../sections/@dashboard/user";

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

export default function Jobs() {

  const theme = useTheme();

  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Helmet>
        <title> Jobs | Minimal UI </title>
      </Helmet>

      <Container>
        {/* <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5} >
          <Typography variant="h4" gutterBottom>
            Jobs
          </Typography>
        </Stack> */}
        {/* <Card>
        <TableContainer component={Paper}>
      <Table >
        <TableHead>
          <TableRow>
            <TableCell>S.No.</TableCell>
            <TableCell>Pincode</TableCell>
            <TableCell>Product</TableCell>
            <TableCell>F Area</TableCell>
            <TableCell>TS Date</TableCell>
            <TableCell>TE Date</TableCell>
            <TableCell>Attachment</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow >
              <TableCell>1</TableCell>
              <TableCell>205135</TableCell>
              <TableCell>Mobile</TableCell>
              <TableCell>skb</TableCell>
              <TableCell>27/01/23</TableCell>
              <TableCell>27/01/23</TableCell>
              <TableCell>1.pdf</TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
    </Card> */}
        <Box
          sx={{
            width: '100%',
            bgcolor: 'background.paper',
            // border: '1px solid',
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
              <Tab label="New" {...a11yProps(0)}  />
              <Tab label="Open" {...a11yProps(1)} />
              <Tab label="Closed" {...a11yProps(2)}  />
              <Tab label="Bookmarked jobs"  {...a11yProps(3)} />
             <Box sx={{width:"50px",height:"60px", fontSize:"20px"}} ml={59}> <UserListToolbar /></Box>
            </Tabs>
             
          </Box>
          <TabPanel value={value} index={0}>
      <NewJobs />
    </TabPanel>
    {/* <TabPanel value={value} index={1}>
      <AllArticles articles={articles} />
    </TabPanel> */}
       
        </Box>
      </Container>
    </>
  );
}
