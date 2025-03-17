import React from 'react'
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Login from '../components/Login';
import Register from '../components/Register';
import HomePage from '../components/HomePage';
import Appointment from '../components/Appointment';
import Patient from '../components/Patient';
import Staff from '../components/Staff';

const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage/>
    },
    {
        path: "/login",
        element: <Login/>
      },
      {
        path: "/register",
        element: <Register/>
      },
      {
        path: "/appointment",
        element: <Appointment/>
      },
      {
        path: "/patient",
        element: <Patient/>
      },
      {
        path: "/staff",
        element: <Staff/>
      },
  ]);

const AppRouter = () => {
  return <RouterProvider 
  router = {router}
  />
}

export default AppRouter