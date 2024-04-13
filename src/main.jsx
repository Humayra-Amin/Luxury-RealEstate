import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Home from './components/Home/Home';
import { HelmetProvider } from 'react-helmet-async';
import Properties from './components/Properties/Properties';
import EstateDetails from './components/EstateDetails/EstateDetails';
import AuthProvider from './AuthProvider/AuthProvider';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import AboutUs from './components/AboutUs/AboutUs';
// import UpdateProfile from './components/UpdateProfile/UpdateProfile';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/properties',
        element: <Properties></Properties>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
      {
        path: '/aboutus',
        element: <AboutUs></AboutUs>,
      },
      {
        path: '/estate/:id',
        element: <ProtectedRoute> 
          <EstateDetails></EstateDetails>
        </ProtectedRoute>,
        loader: () => fetch('/estate.json')
      },
      // {
      //   path: '/userprofile',
      //   element: <UpdateProfile></UpdateProfile>,
      // },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
    </HelmetProvider>
  </React.StrictMode>,
)
