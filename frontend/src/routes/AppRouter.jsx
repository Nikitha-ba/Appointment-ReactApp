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
import {jwtDecode} from 'jwt-decode';

const isAuthenticated = ()=> {
  const lsToken = localStorage.getItem("userToken")
  if (!lsToken)
  {
    return false
  }
  try {
    const decode = jwtDecode(lsToken)
    const currentTime = Date.now()/1000
    if (decode?.exp < currentTime) 
    {
      localStorage.removeItem('userToken')
    }
    return true
  } catch (error) {
    localStorage.removeItem('userToken')
    return false
  }
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