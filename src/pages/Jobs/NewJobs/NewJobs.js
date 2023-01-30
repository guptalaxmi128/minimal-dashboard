import { Helmet } from 'react-helmet-async';
import { filter } from 'lodash';
import { sentenceCase } from 'change-case';
import { useState } from 'react';
// @mui
import {
  Card,
  Grid,
  Box,
  Table,
  Stack,
  Paper,
  Avatar,
  Button,
  Popover,
  Checkbox,
  TableRow,
  MenuItem,
  TableBody,
  TableCell,
  Container,
  Typography,
  IconButton,
  TableContainer,
  TablePagination,
  imageListItemBarClasses,
} from '@mui/material';
// import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
// import PlaceIcon from '@mui/icons-material/Place';
// import GpsFixedIcon from '@mui/icons-material/GpsFixed';
// import DateRangeIcon from '@mui/icons-material/DateRange';
import { MdBookmarkBorder, MdPlace, MdDateRange, MdGpsFixed } from 'react-icons/md';
// components

import Label from '../../../components/label';
import Iconify from '../../../components/iconify';
import Scrollbar from '../../../components/scrollbar';
// sections
// import { UserListHead, UserListToolbar } from '../../../sections/@dashboard/user';
// mock
import USERLIST from '../../../_mock/user';

// ----------------------------------------------------------------------

const TABLE_HEAD = [
  { id: 'name', label: 'Name', alignRight: false },
  { id: 'company', label: 'Company', alignRight: false },
  { id: 'role', label: 'Role', alignRight: false },
  { id: 'isVerified', label: 'Verified', alignRight: false },
  { id: 'status', label: 'Status', alignRight: false },
  { id: '' },
];

// ----------------------------------------------------------------------

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function applySortFilter(array, comparator, query) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  if (query) {
    return filter(array, (_user) => _user.name.toLowerCase().indexOf(query.toLowerCase()) !== -1);
  }
  return stabilizedThis.map((el) => el[0]);
}

export default function NewJobs() {
  const [open, setOpen] = useState(null);

  const [page, setPage] = useState(0);

  const [order, setOrder] = useState('asc');

  const [selected, setSelected] = useState([]);

  const [orderBy, setOrderBy] = useState('name');

  const [filterName, setFilterName] = useState('');

  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleOpenMenu = (event) => {
    setOpen(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setOpen(null);
  };

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = USERLIST.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setPage(0);
    setRowsPerPage(parseInt(event.target.value, 10));
  };

  const handleFilterByName = (event) => {
    setPage(0);
    setFilterName(event.target.value);
  };

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - USERLIST.length) : 0;

  const filteredUsers = applySortFilter(USERLIST, getComparator(order, orderBy), filterName);

  const isNotFound = !filteredUsers.length && !!filterName;

  return (
    <>
      <Container style={{padding:"0px"}}>
        {/* <UserListToolbar numSelected={selected.length} filterName={filterName} onFilterName={handleFilterByName} /> */}

        {/* <Scrollbar>
            <TableContainer sx={{ minWidth: 800 }}>
              <Table>
                <UserListHead
                  order={order}
                  orderBy={orderBy}
                  headLabel={TABLE_HEAD}
                  rowCount={USERLIST.length}
                  numSelected={selected.length}
                  onRequestSort={handleRequestSort}
                  onSelectAllClick={handleSelectAllClick}
                />
                <TableBody>
                  {filteredUsers.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                    const { id, name, role, status, company, avatarUrl, isVerified } = row;
                    const selectedUser = selected.indexOf(name) !== -1;

                    return (
                      <TableRow hover key={id} tabIndex={-1} role="checkbox" selected={selectedUser}>
                        <TableCell padding="checkbox">
                          <Checkbox checked={selectedUser} onChange={(event) => handleClick(event, name)} />
                        </TableCell>
                      </TableRow>
                    );
                  })}
                  {emptyRows > 0 && (
                    <TableRow style={{ height: 53 * emptyRows }}>
                      <TableCell colSpan={6} />
                    </TableRow>
                  )}
                </TableBody>

                {isNotFound && (
                  <TableBody>
                    <TableRow>
                      <TableCell align="center" colSpan={6} sx={{ py: 3 }}>
                        <Paper
                          sx={{
                            textAlign: 'center',
                          }}
                        >
                          <Typography variant="h6" paragraph>
                            Not found
                          </Typography>

                          <Typography variant="body2">
                            No results found for &nbsp;
                            <strong>&quot;{filterName}&quot;</strong>.
                            <br /> Try checking for typos or using complete words.
                          </Typography>
                        </Paper>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                )}
              </Table>
            </TableContainer>
          </Scrollbar> */}
         <Box sx={{width:"950px",height:"220px"}}>
        <Grid container spacing={2} mt={1}>
          <Grid item xs={6}>
            <Card sx={{ width: '460px', height: '210px', position: 'absolute', padding: '10px' }}>
              <Box sx={{ display: 'flex', justifyContent: 'left', padding: '16px' }}>
                <img
                  src="/assets/images/1.jpg"
                  alt="job"
                  style={{ width: '49px', height: '49px', border: '1px solid ',borderRadius:"4px" }}
                />
                <Typography variant="h5" ml={2} sx={{ fontSize: '18px', fontWeigth: 500, lineHeight: '22px' }}>
                  Product Name
                  <Typography
                    variant="body2"
                    sx={{
                      color: '#6C6C6C',
                      textAlign: 'left',
                      width: '340px',
                      height: '21px',
                      fontSize: '12px',
                      fontWeight: 400,
                    }}
                  >
                    Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores
                  </Typography>
                </Typography>
                <Box ml={-2}>
                  <MdBookmarkBorder style={{ color: '5B5B5B' }} />
                </Box>
              </Box>
              <Box sx={{ display: 'flex', width: '386px', height: '18px', ml: 2, mt: 1 }}>
                <MdPlace style={{ color: '5B5B5B' }} />
                &nbsp;{' '}
                <Typography mr={3} sx={{ fontSize: '12px', color: '5B5B5B' }}>
                  Area
                </Typography>
                <MdGpsFixed style={{ color: '5B5B5B' }} />
                &nbsp;{' '}
                <Typography mr={3} sx={{ fontSize: '12px', color: '5B5B5B' }}>
                  Pincode
                </Typography>
                <MdDateRange style={{ color: '5B5B5B' }} />
                &nbsp;{' '}
                <Typography mr={3} sx={{ fontSize: '12px', color: '5B5B5B' }}>
                  Start Date
                </Typography>
                <MdDateRange style={{ color: '5B5B5B' }} />
                &nbsp;{' '}
                <Typography mr={3} sx={{ fontSize: '12px', color: '5B5B5B' }}>
                  End Date
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', textAlign: 'center' }} mt={1}>
                <Typography
                  variant="caption"
                  sx={{
                    width: '65px',
                    height: '14px',
                    background: ' rgba(1, 130, 252, 0.2)',
                    borderRadius: '3px',
                    color: '#1573CB',
                    fontWeight: 500,
                    fontSize: '10px',
                    paddingBottom: '14px',
                  }}
                  ml={2}
                >
                  Carpenter
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    width: '56px',
                    height: '14px',
                    background: 'rgba(1, 130, 252, 0.2)',
                    borderRadius: '3px',
                    color: '#1573CB',
                    fontWeight: 500,
                    fontSize: '10px',
                    paddingBottom: '14px',
                  }}
                  ml={2}
                >
                  Paint
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    width: '65px',
                    height: '14px',
                    background: 'rgba(1, 130, 252, 0.2)',
                    borderRadius: '3px',
                    color: '#1573CB',
                    fontWeight: 500,
                    fontSize: '10px',
                    paddingBottom: '14px',
                  }}
                  ml={2}
                >
                  Mechanic
                </Typography>
              </Box>
              <Stack direction="row" alignItems="center" justifyContent="end" mt={2}>
                <Button
                  variant="outlined"
                  sx={{
                    width: '130px',
                    mr: 1,
                    fontSize: '16px',
                    color: '007EE5',
                  }}
                >
                  More Details
                </Button>
                <Button variant="contained" color="primary" sx={{ mr: 2, fontSize: '16px', color: '007EE5' }}>
                  Hire me
                </Button>
              </Stack>
            </Card>
          </Grid>
          
          <Grid item xs={6}>
            <Card sx={{ width: '460px', height: '210px', position: 'absolute', padding: '10px' }}>
              <Box sx={{ display: 'flex', justifyContent: 'left', padding: '16px',borderRadius:"3px" }}>
                <img
                  src="/assets/images/1.jpg"
                  alt="job"
                  style={{ width: '49px', height: '49px', border: '1px solid', borderRadius:"4px" }}
                />
                <Typography variant="h5" ml={2} sx={{ fontSize: '18px', fontWeigth: 500, lineHeight: '22px' }}>
                  Product Name
                  <Typography
                    variant="body2"
                    sx={{
                      color: '#6C6C6C',
                      textAlign: 'left',
                      width: '340px',
                      height: '21px',
                      fontSize: '12px',
                      fontWeight: 400,
                    }}
                  >
                    Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores
                  </Typography>
                </Typography>
                <Box ml={-2}>
                  <MdBookmarkBorder style={{ color: '5B5B5B' }} />
                </Box>
              </Box>
              <Box sx={{ display: 'flex', width: '386px', height: '18px', ml: 2, mt: 1 }}>
                <MdPlace style={{ color: '5B5B5B' }} />
                &nbsp;{' '}
                <Typography mr={3} sx={{ fontSize: '12px', color: '5B5B5B' }}>
                  Area
                </Typography>
                <MdGpsFixed style={{ color: '5B5B5B' }} />
                &nbsp;{' '}
                <Typography mr={3} sx={{ fontSize: '12px', color: '5B5B5B' }}>
                  Pincode
                </Typography>
                <MdDateRange style={{ color: '5B5B5B' }} />
                &nbsp;
                <Typography mr={3} sx={{ fontSize: '12px', color: '5B5B5B' }}>
                  Start Date
                </Typography>
                <MdDateRange style={{ color: '5B5B5B' }} />
                &nbsp;{' '}
                <Typography mr={3} sx={{ fontSize: '12px', color: '5B5B5B' }}>
                  End Date
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', textAlign: 'center' }} mt={1}>
                <Typography
                  variant="caption"
                  sx={{
                    width: '65px',
                    height: '14px',
                    background: 'rgba(1, 130, 252, 0.2)',
                    borderRadius: '3px',
                    color: '#1573CB',
                    fontWeight: 500,
                    fontSize: '10px',
                    paddingBottom: '14px',
                  }}
                  ml={2}
                >
                  Carpenter
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    width: '56px',
                    height: '14px',
                    background: 'rgba(1, 130, 252, 0.2)',
                    borderRadius: '3px',
                    color: '#1573CB',
                    fontWeight: 500,
                    fontSize: '10px',
                    paddingBottom: '14px',
                  }}
                  ml={2}
                >
                  Paint
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    width: '65px',
                    height: '14px',
                    background: 'rgba(1, 130, 252, 0.2)',
                    borderRadius: '3px',
                    color: '#1573CB',
                    fontWeight: 500,
                    fontSize: '10px',
                    paddingBottom: '14px',
                  }}
                  ml={2}
                >
                  Mechanic
                </Typography>
              </Box>
              <Stack direction="row" alignItems="center" justifyContent="end" mt={2}>
                <Button
                  variant="outlined"
                  sx={{
                    width: '130px',
                    mr: 1,
                    fontSize: '16px',
                    color: '007EE5',
                  }}
                >
                  More Details
                </Button>
                <Button variant="contained" color="primary" sx={{ mr: 2, fontSize: '16px', color: '007EE5' }}>
                  Hire me
                </Button>
              </Stack>
            </Card>
          </Grid>
        </Grid>
        </Box>
        <Box sx={{width:"950px",height:"220px"}}>
        <Grid container spacing={2} mt={1}>
          <Grid item xs={6}>
            <Card sx={{ width: '460px', height: '210px', position: 'absolute', padding: '10px' }}>
              <Box sx={{ display: 'flex', justifyContent: 'left', padding: '16px' }}>
                <img
                  src="/assets/images/1.jpg"
                  alt="job"
                  style={{ width: '49px', height: '49px', border: '1px solid ',borderRadius:"4px" }}
                />
                <Typography variant="h5" ml={2} sx={{ fontSize: '18px', fontWeigth: 500, lineHeight: '22px' }}>
                  Product Name
                  <Typography
                    variant="body2"
                    sx={{
                      color: '#6C6C6C',
                      textAlign: 'left',
                      width: '340px',
                      height: '21px',
                      fontSize: '12px',
                      fontWeight: 400,
                    }}
                  >
                    Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores
                  </Typography>
                </Typography>
                <Box ml={-2}>
                  <MdBookmarkBorder style={{ color: '5B5B5B' }} />
                </Box>
              </Box>
              <Box sx={{ display: 'flex', width: '386px', height: '18px', ml: 2, mt: 1 }}>
                <MdPlace style={{ color: '5B5B5B' }} />
                &nbsp;{' '}
                <Typography mr={3} sx={{ fontSize: '12px', color: '5B5B5B' }}>
                  Area
                </Typography>
                <MdGpsFixed style={{ color: '5B5B5B' }} />
                &nbsp;{' '}
                <Typography mr={3} sx={{ fontSize: '12px', color: '5B5B5B' }}>
                  Pincode
                </Typography>
                <MdDateRange style={{ color: '5B5B5B' }} />
                &nbsp;{' '}
                <Typography mr={3} sx={{ fontSize: '12px', color: '5B5B5B' }}>
                  Start Date
                </Typography>
                <MdDateRange style={{ color: '5B5B5B' }} />
                &nbsp;{' '}
                <Typography mr={3} sx={{ fontSize: '12px', color: '5B5B5B' }}>
                  End Date
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', textAlign: 'center' }} mt={1}>
                <Typography
                  variant="caption"
                  sx={{
                    width: '65px',
                    height: '14px',
                    background: ' rgba(1, 130, 252, 0.2)',
                    borderRadius: '3px',
                    color: '#1573CB',
                    fontWeight: 500,
                    fontSize: '10px',
                    paddingBottom: '14px',
                  }}
                  ml={2}
                >
                  Carpenter
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    width: '56px',
                    height: '14px',
                    background: 'rgba(1, 130, 252, 0.2)',
                    borderRadius: '3px',
                    color: '#1573CB',
                    fontWeight: 500,
                    fontSize: '10px',
                    paddingBottom: '14px',
                  }}
                  ml={2}
                >
                  Paint
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    width: '65px',
                    height: '14px',
                    background: 'rgba(1, 130, 252, 0.2)',
                    borderRadius: '3px',
                    color: '#1573CB',
                    fontWeight: 500,
                    fontSize: '10px',
                    paddingBottom: '14px',
                  }}
                  ml={2}
                >
                  Mechanic
                </Typography>
              </Box>
              <Stack direction="row" alignItems="center" justifyContent="end" mt={2}>
                <Button
                  variant="outlined"
                  sx={{
                    width: '130px',
                    mr: 1,
                    fontSize: '16px',
                    color: '007EE5',
                  }}
                >
                  More Details
                </Button>
                <Button variant="contained" color="primary" sx={{ mr: 2, fontSize: '16px', color: '007EE5' }}>
                  Hire me
                </Button>
              </Stack>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card sx={{ width: '460px', height: '210px', position: 'absolute', padding: '10px' }}>
              <Box sx={{ display: 'flex', justifyContent: 'left', padding: '16px' }}>
                <img
                  src="/assets/images/1.jpg"
                  alt="job"
                  style={{ width: '49px', height: '49px', border: '1px solid',borderRadius:"4px" }}
                />
                <Typography variant="h5" ml={2} sx={{ fontSize: '18px', fontWeigth: 500, lineHeight: '22px' }}>
                  Product Name
                  <Typography
                    variant="body2"
                    sx={{
                      color: '#6C6C6C',
                      textAlign: 'left',
                      width: '340px',
                      height: '21px',
                      fontSize: '12px',
                      fontWeight: 400,
                    }}
                  >
                    Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores
                  </Typography>
                </Typography>
                <Box ml={-2}>
                  <MdBookmarkBorder style={{ color: '5B5B5B' }} />
                </Box>
              </Box>
              <Box sx={{ display: 'flex', width: '386px', height: '18px', ml: 2, mt: 1 }}>
                <MdPlace style={{ color: '5B5B5B' }} />
                &nbsp;{' '}
                <Typography mr={3} sx={{ fontSize: '12px', color: '5B5B5B' }}>
                  Area
                </Typography>
                <MdGpsFixed style={{ color: '5B5B5B' }} />
                &nbsp;{' '}
                <Typography mr={3} sx={{ fontSize: '12px', color: '5B5B5B' }}>
                  Pincode
                </Typography>
                <MdDateRange style={{ color: '5B5B5B' }} />
                &nbsp;
                <Typography mr={3} sx={{ fontSize: '12px', color: '5B5B5B' }}>
                  Start Date
                </Typography>
                <MdDateRange style={{ color: '5B5B5B' }} />
                &nbsp;{' '}
                <Typography mr={3} sx={{ fontSize: '12px', color: '5B5B5B' }}>
                  End Date
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', textAlign: 'center' }} mt={1}>
                <Typography
                  variant="caption"
                  sx={{
                    width: '65px',
                    height: '14px',
                    background: 'rgba(1, 130, 252, 0.2)',
                    borderRadius: '3px',
                    color: '#1573CB',
                    fontWeight: 500,
                    fontSize: '10px',
                    paddingBottom: '14px',
                  }}
                  ml={2}
                >
                  Carpenter
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    width: '56px',
                    height: '14px',
                    background: 'rgba(1, 130, 252, 0.2)',
                    borderRadius: '3px',
                    color: '#1573CB',
                    fontWeight: 500,
                    fontSize: '10px',
                    paddingBottom: '14px',
                  }}
                  ml={2}
                >
                  Paint
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    width: '65px',
                    height: '14px',
                    background: 'rgba(1, 130, 252, 0.2)',
                    borderRadius: '3px',
                    color: '#1573CB',
                    fontWeight: 500,
                    fontSize: '10px',
                    paddingBottom: '14px',
                  }}
                  ml={2}
                >
                  Mechanic
                </Typography>
              </Box>
              <Stack direction="row" alignItems="center" justifyContent="end" mt={2}>
                <Button
                  variant="outlined"
                  sx={{
                    width: '130px',
                    mr: 1,
                    fontSize: '16px',
                    color: '007EE5',
                  }}
                >
                  More Details
                </Button>
                <Button variant="contained" color="primary" sx={{ mr: 2, fontSize: '16px', color: '007EE5' }}>
                  Hire me
                </Button>
              </Stack>
            </Card>
          </Grid>
        </Grid>
        </Box>
        <Box sx={{width:"950px",height:"220px"}}>
        <Grid container spacing={2} mt={1}>
          <Grid item xs={6}>
            <Card sx={{ width: '460px', height: '210px', position: 'absolute', padding: '10px' }}>
              <Box sx={{ display: 'flex', justifyContent: 'left', padding: '16px' }}>
                <img
                  src="/assets/images/1.jpg"
                  alt="job"
                  style={{ width: '49px', height: '49px', border: '1px solid ',borderRadius:"4px" }}
                />
                <Typography variant="h5" ml={2} sx={{ fontSize: '18px', fontWeigth: 500, lineHeight: '22px' }}>
                  Product Name
                  <Typography
                    variant="body2"
                    sx={{
                      color: '#6C6C6C',
                      textAlign: 'left',
                      width: '340px',
                      height: '21px',
                      fontSize: '12px',
                      fontWeight: 400,
                    }}
                  >
                    Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores
                  </Typography>
                </Typography>
                <Box ml={-2}>
                  <MdBookmarkBorder style={{ color: '5B5B5B' }} />
                </Box>
              </Box>
              <Box sx={{ display: 'flex', width: '386px', height: '18px', ml: 2, mt: 1 }}>
                <MdPlace style={{ color: '5B5B5B' }} />
                &nbsp;{' '}
                <Typography mr={3} sx={{ fontSize: '12px', color: '5B5B5B' }}>
                  Area
                </Typography>
                <MdGpsFixed style={{ color: '5B5B5B' }} />
                &nbsp;{' '}
                <Typography mr={3} sx={{ fontSize: '12px', color: '5B5B5B' }}>
                  Pincode
                </Typography>
                <MdDateRange style={{ color: '5B5B5B' }} />
                &nbsp;{' '}
                <Typography mr={3} sx={{ fontSize: '12px', color: '5B5B5B' }}>
                  Start Date
                </Typography>
                <MdDateRange style={{ color: '5B5B5B' }} />
                &nbsp;{' '}
                <Typography mr={3} sx={{ fontSize: '12px', color: '5B5B5B' }}>
                  End Date
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', textAlign: 'center' }} mt={1}>
                <Typography
                  variant="caption"
                  sx={{
                    width: '65px',
                    height: '14px',
                    background: ' rgba(1, 130, 252, 0.2)',
                    borderRadius: '3px',
                    color: '#1573CB',
                    fontWeight: 500,
                    fontSize: '10px',
                    paddingBottom: '14px',
                  }}
                  ml={2}
                >
                  Carpenter
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    width: '56px',
                    height: '14px',
                    background: 'rgba(1, 130, 252, 0.2)',
                    borderRadius: '3px',
                    color: '#1573CB',
                    fontWeight: 500,
                    fontSize: '10px',
                    paddingBottom: '14px',
                  }}
                  ml={2}
                >
                  Paint
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    width: '65px',
                    height: '14px',
                    background: 'rgba(1, 130, 252, 0.2)',
                    borderRadius: '3px',
                    color: '#1573CB',
                    fontWeight: 500,
                    fontSize: '10px',
                    paddingBottom: '14px',
                  }}
                  ml={2}
                >
                  Mechanic
                </Typography>
              </Box>
              <Stack direction="row" alignItems="center" justifyContent="end" mt={2}>
                <Button
                  variant="outlined"
                  sx={{
                    width: '130px',
                    mr: 1,
                    fontSize: '16px',
                    color: '007EE5',
                  }}
                >
                  More Details
                </Button>
                <Button variant="contained" color="primary" sx={{ mr: 2, fontSize: '16px', color: '007EE5' }}>
                  Hire me
                </Button>
              </Stack>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card sx={{ width: '460px', height: '210px', position: 'absolute', padding: '10px' }}>
              <Box sx={{ display: 'flex', justifyContent: 'left', padding: '16px' }}>
                <img
                  src="/assets/images/1.jpg"
                  alt="job"
                  style={{ width: '49px', height: '49px', border: '1px solid',borderRadius:"4px" }}
                />
                <Typography variant="h5" ml={2} sx={{ fontSize: '18px', fontWeigth: 500, lineHeight: '22px' }}>
                  Product Name
                  <Typography
                    variant="body2"
                    sx={{
                      color: '#6C6C6C',
                      textAlign: 'left',
                      width: '340px',
                      height: '21px',
                      fontSize: '12px',
                      fontWeight: 400,
                    }}
                  >
                    Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores
                  </Typography>
                </Typography>
                <Box ml={-2}>
                  <MdBookmarkBorder style={{ color: '5B5B5B' }} />
                </Box>
              </Box>
              <Box sx={{ display: 'flex', width: '386px', height: '18px', ml: 2, mt: 1 }}>
                <MdPlace style={{ color: '5B5B5B' }} />
                &nbsp;{' '}
                <Typography mr={3} sx={{ fontSize: '12px', color: '5B5B5B' }}>
                  Area
                </Typography>
                <MdGpsFixed style={{ color: '5B5B5B' }} />
                &nbsp;{' '}
                <Typography mr={3} sx={{ fontSize: '12px', color: '5B5B5B' }}>
                  Pincode
                </Typography>
                <MdDateRange style={{ color: '5B5B5B' }} />
                &nbsp;
                <Typography mr={3} sx={{ fontSize: '12px', color: '5B5B5B' }}>
                  Start Date
                </Typography>
                <MdDateRange style={{ color: '5B5B5B' }} />
                &nbsp;{' '}
                <Typography mr={3} sx={{ fontSize: '12px', color: '5B5B5B' }}>
                  End Date
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', textAlign: 'center' }} mt={1}>
                <Typography
                  variant="caption"
                  sx={{
                    width: '65px',
                    height: '14px',
                    background: 'rgba(1, 130, 252, 0.2)',
                    borderRadius: '3px',
                    color: '#1573CB',
                    fontWeight: 500,
                    fontSize: '10px',
                    paddingBottom: '14px',
                  }}
                  ml={2}
                >
                  Carpenter
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    width: '56px',
                    height: '14px',
                    background: 'rgba(1, 130, 252, 0.2)',
                    borderRadius: '3px',
                    color: '#1573CB',
                    fontWeight: 500,
                    fontSize: '10px',
                    paddingBottom: '14px',
                  }}
                  ml={2}
                >
                  Paint
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    width: '65px',
                    height: '14px',
                    background: 'rgba(1, 130, 252, 0.2)',
                    borderRadius: '3px',
                    color: '#1573CB',
                    fontWeight: 500,
                    fontSize: '10px',
                    paddingBottom: '14px',
                  }}
                  ml={2}
                >
                  Mechanic
                </Typography>
              </Box>
              <Stack direction="row" alignItems="center" justifyContent="end" mt={2}>
                <Button
                  variant="outlined"
                  sx={{
                    width: '130px',
                    mr: 1,
                    fontSize: '16px',
                    color: '007EE5',
                  }}
                >
                  More Details
                </Button>
                <Button variant="contained" color="primary" sx={{ mr: 2, fontSize: '16px', color: '007EE5' }}>
                  Hire me
                </Button>
              </Stack>
            </Card>
          </Grid>
        </Grid>
        </Box>
        
      </Container>
    </>
  );
}
