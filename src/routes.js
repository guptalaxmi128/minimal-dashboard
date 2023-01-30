import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';

// import SimpleLayout from './layouts/simple';
// import BlogPage from './pages/BlogPage';
// import Page404 from './pages/Page404';
// import UserPage from './pages/UserPage';
import ProductsPage from './pages/ProductsPage';
import DashboardAppPage from './pages/DashboardAppPage';
import Register from './pages/Register/Register';
import Jobs from './pages/Jobs/Jobs';
import Profile from './pages/Profile/Profile';
import Order from "./pages/Order/Order";
import Snaglist from "./pages/Snaglist/Snaglist";


// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
  
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { path: 'app', element: <DashboardAppPage /> },
        { path: 'jobs', element: <Jobs /> },
        { path: 'order', element: <Order/> },
        { path: 'snaglist', element: <Snaglist /> },
        {
          path: 'profile',
          element: <Profile />,
        },
    
      ],
    },
    // {
    //   path: 'register',
    //   element: <Register />,
    // },
   
    
    // {
    //   element: <SimpleLayout />,
    //   children: [
    //     { element: <Navigate to="/dashboard/app" />, index: true },
    //     { path: '404', element: <Page404 /> },
    //     { path: '*', element: <Navigate to="/404" /> },
    //   ],
    // },
    // {
    //   path: '*',
    //   element: <Navigate to="/404" replace />,
    // },
  ]);

  return routes;
}
