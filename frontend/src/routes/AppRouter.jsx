import React from 'react'
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Login from '../components/Login';
import Register from '../components/Register';
import HomePage from '../components/HomePage';

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
  ]);

const AppRouter = () => {
  return <RouterProvider 
  router = {router}
  />
}

export default AppRouter