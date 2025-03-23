import React from 'react'
import {
    createBrowserRouter,
    Navigate,
    RouterProvider,
  } from "react-router-dom";
import Login from '../components/Login';
import Register from '../components/Register';
import HomePage from '../components/HomePage';
import Appointment from '../components/Appointment';
import Patient from '../components/Patient';
import Staff from '../components/Staff';

const isAuthenticated = ()=> {
  return localStorage.getItem("userToken") != null
}

const ProtectedRoute = ({component}) => {
  return isAuthenticated() ? component : <Navigate to={"/login"} replace/>
}

const PublicRoute = ({component}) => {
  return isAuthenticated() ? <Navigate to={"/"} replace/>: component
}

const router = createBrowserRouter([
    {
      path: "/",
      element:<ProtectedRoute component={<HomePage/>}/>
    },
    {
        path: "/login",
        element: <PublicRoute component={<Login/>}/>
      },
      {
        path: "/register",
        element: <PublicRoute component={<Register/>}/>
      },
      {
        path: "/appointment",
        element: <ProtectedRoute component={<Appointment/>}/>
      },
      {
        path: "/patient",
        element: <ProtectedRoute component={<Patient/>}/>
      },
      {
        path: "/staff",
        element: <ProtectedRoute component={<Staff/>}/>
      },
  ]);

const AppRouter = () => {
  return <RouterProvider 
  router = {router}
  />
}

export default AppRouter