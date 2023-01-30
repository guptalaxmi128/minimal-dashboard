import PropTypes from 'prop-types';
// @mui
import { styled } from '@mui/material/styles';
import { Box, Stack, AppBar, Toolbar, IconButton,Typography } from '@mui/material';
// utils
import { bgBlur } from '../../../utils/cssStyles';
// components
import Iconify from '../../../components/iconify';
//
import Searchbar from './Searchbar';
import AccountPopover from './AccountPopover';
import LanguagePopover from './LanguagePopover';
import NotificationsPopover from './NotificationsPopover';
// import PageTitle from './PageTitle';


// ----------------------------------------------------------------------

const NAV_WIDTH = 280;

const HEADER_MOBILE = 64;

const HEADER_DESKTOP = 92;

const StyledRoot = styled(AppBar)(({ theme }) => ({
  ...bgBlur({ color: theme.palette.background.default }),
  boxShadow: 'none',
  [theme.breakpoints.up('lg')]: {
    width: `calc(100% - ${NAV_WIDTH + 1}px)`,
  },
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  minHeight: HEADER_MOBILE,
  [theme.breakpoints.up('lg')]: {
    minHeight: HEADER_DESKTOP,
    padding: theme.spacing(0, 5),
  },
}));

// ----------------------------------------------------------------------

Header.propTypes = {
  onOpenNav: PropTypes.func,
};

export default function Header({ onOpenNav }) {
  const  changeTitle = () => {
    switch(window.location.pathname){
      case '/dashboard/profile':
        return 'Profile';
      case '/dashboard/jobs':
        return 'Jobs';
        case '/dashboard/order':
          return 'Order';
          case '/dashboard/snaglist':
            return 'Snaglist';
      default:
        return 'Hi, Welcome Back';
    }
  }
  const title=changeTitle();
  return (
    <StyledRoot>
      <StyledToolbar>
        <IconButton
          onClick={onOpenNav}
          sx={{
            mr: 1,
            color: 'text.primary',
            display: { lg: 'none' },
          }}
        >
          <Iconify icon="eva:menu-2-fill" />
        </IconButton> 
        

         <Typography variant="h4" gutterBottom sx={{color:"black"}}>
            {title}
          </Typography>
       
        <Box sx={{ flexGrow: 1 }} />

        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          spacing={{
            xs: 0.5,
            sm: 1,
          }}
        >
         
        <Searchbar />
          {/* <LanguagePopover /> */}
          <NotificationsPopover />
          <AccountPopover />
        </Stack>
      </StyledToolbar>
    </StyledRoot>
  );
}
