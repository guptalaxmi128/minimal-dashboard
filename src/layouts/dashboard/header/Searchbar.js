// import { useState } from 'react';
// // @mui
// import { styled } from '@mui/material/styles';
// import { Input, Slide, Button, IconButton, InputAdornment, ClickAwayListener } from '@mui/material';
// // utils
// import { bgBlur } from '../../../utils/cssStyles';
// // component
// import Iconify from '../../../components/iconify';

// // ----------------------------------------------------------------------

// const HEADER_MOBILE = 64;
// const HEADER_DESKTOP = 92;

// const StyledSearchbar = styled('div')(({ theme }) => ({
//   ...bgBlur({ color: theme.palette.background.default }),
//   top: 0,
//   left: 0,
//   zIndex: 99,
//   width: '100%',
//   display: 'flex',
//   position: 'absolute',
//   alignItems: 'center',
//   height: HEADER_MOBILE,
//   padding: theme.spacing(0, 3),
//   boxShadow: theme.customShadows.z8,
//   [theme.breakpoints.up('md')]: {
//     height: HEADER_DESKTOP,
//     padding: theme.spacing(0, 5),
//   },
// }));

// // ----------------------------------------------------------------------

// export default function Searchbar() {
//   const [open, setOpen] = useState(false);

//   const handleOpen = () => {
//     setOpen(!open);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <ClickAwayListener onClickAway={handleClose}>
//       <div>
//         {!open && (
//           <IconButton onClick={handleOpen}>
//             <Iconify icon="eva:search-fill" />
//           </IconButton>
//         )}

//         <Slide direction="down" in={open} mountOnEnter unmountOnExit>
//           <StyledSearchbar>
//             <Input
//               autoFocus
//               fullWidth
//               disableUnderline
//               placeholder="Search…"
//               startAdornment={
//                 <InputAdornment position="start">
//                   <Iconify icon="eva:search-fill" sx={{ color: 'text.disabled', width: 20, height: 20 }} />
//                 </InputAdornment>
//               }
//               sx={{ mr: 1, fontWeight: 'fontWeightBold' }}
//             />
//             <Button variant="contained" onClick={handleClose}>
//               Search
//             </Button>
//           </StyledSearchbar>
//         </Slide>
//       </div>
//     </ClickAwayListener>
//   );
// }
import PropTypes from 'prop-types';
// @mui
import { styled, alpha } from '@mui/material/styles';
import { Toolbar, Tooltip, IconButton, Typography, OutlinedInput, InputAdornment } from '@mui/material';
// component
import Iconify from '../../../components/iconify';

// ----------------------------------------------------------------------

const StyledRoot = styled(Toolbar)(({ theme }) => ({
  height: 96,
  display: 'flex',
  justifyContent: 'space-between',
  padding: theme.spacing(0, 1, 0, 3),
}));

const StyledSearch = styled(OutlinedInput)(({ theme }) => ({
  width: 240,
  transition: theme.transitions.create(['box-shadow', 'width'], {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.shorter,
  }),
  '&.Mui-focused': {
    width: 320,
    boxShadow: theme.customShadows.z8,
  },
  '& fieldset': {
    borderWidth: `1px !important`,
    borderColor: `${alpha(theme.palette.grey[500], 0.32)} !important`,
  },
}));

// ----------------------------------------------------------------------

Searchbar.propTypes = {
  numSelected: PropTypes.number,
  filterName: PropTypes.string,
  onFilterName: PropTypes.func,
};

export default function Searchbar({ numSelected, filterName, onFilterName }) {
  return (
    <StyledRoot
      sx={{
        ...(numSelected > 0 && {
          color: 'primary.main',
          bgcolor: 'primary.lighter',
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography component="div" variant="subtitle1">
          {numSelected} selected
        </Typography>
      ) : (
        <StyledSearch
          value={filterName}
          onChange={onFilterName}
          placeholder="Search user..."
          startAdornment={
            <InputAdornment position="start">
              <Iconify icon="eva:search-fill" sx={{ color: 'text.disabled', width: 20, height: 20 }} />
            </InputAdornment>
          }
        />
      )}

      {/* {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton>
            <Iconify icon="eva:trash-2-fill" />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton>
            <Iconify icon="ic:round-filter-list" />
          </IconButton>
        </Tooltip>
      )} */}
    </StyledRoot>
  );
}

