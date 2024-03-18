import React from 'react'
import NavBar from '../NavBar/NavBar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
      <div>
          <NavBar />
          <Outlet/>
    </div>
  )
}

export default Layout