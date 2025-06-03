import React from "react"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Header from './components/common/Header'
import Home from './components/pages/Home'
import Login from './components/pages/Login'
import Register from './components/pages/Register'
import NotFound from './components/pages/NotFound'
import ForgetPassword from "./components/pages/ForgetPassword"
import ProfileCard from "./components/pages/ProfileCard"
import Game from "./components/pages/Game"
import About from "./components/pages/About"

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <Header/>
          <Home/>
        </div>
      )
    },
    {
      path: '/login',
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
      path: '/profileCard',
      element: (
        <div>
          <Header/>
          <ProfileCard/>
        </div>
      )
    },
    {
      path: '/about',
      element: (
        <div>
          <Header/>
          <About/>
        </div>
      )
    },
    {
      path: '/game',
      element: (
        <div>
          <Header/>
          <Game/>
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
