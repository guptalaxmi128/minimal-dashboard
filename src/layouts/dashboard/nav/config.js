// component
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: icon('ic_analytics'),
  },
  {
    title: 'Jobs',
    path: '/dashboard/jobs',
    icon: icon('ic_user'),
  },
  {
    title: 'Order',
    path: '/dashboard/order',
    icon: icon('ic_cart'),
  },
  {
    title: 'Snaglist',
    path: '/dashboard/snaglist',
    icon: icon('ic_blog'),
  },
  {
    title: 'profile',
    path: '/dashboard/profile',
    icon: icon('ic_blog'),
  },
  // {
  //   title: 'register',
  //   path: '/register',
  //   icon: icon('ic_lock'),
  // },

  // {
  //   title: 'Not found',
  //   path: '/404',
  //   icon: icon('ic_disabled'),
  // },
];

export default navConfig;
