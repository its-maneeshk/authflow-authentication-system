import React from "react"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Header from './components/common/Header'
import Home from './components/pages/Home'
import Login from './components/pages/Login'
import Register from './components/pages/Register'
import NotFound from './components/pages/NotFound'
import ForgetPassword from "./components/pages/ForgetPassword"
import Profile from "./components/pages/Profile"

function App() {
  const router = createBrowserRouter([
    {
      path: "/home",
      element: (
        <div>
          <Header/>
          <Home/>
        </div>
      )
    },
    {
      path: '/',
      element: (
        <div>
          <Login/>
        </div>
      )
    },
    {
      path: '/register',
      element: (
        <div>
          <Register/>
        </div>
      )
    },
    {
      path: '/forgetpassword',
      element: (
        <div>
          <ForgetPassword/>
        </div>
      )
    },
    {
      path: '/profile',
      element: (
        <div>
          <Header/>
          <Profile/>
        </div>
      )
    },
    {
      path: '*',
      element: (
        <div>
          <Header/>
          <NotFound/>
        </div>
      )
    }
  ])

  return ( <RouterProvider router={router}/>)
}

export default App
