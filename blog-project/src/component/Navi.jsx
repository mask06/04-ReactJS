import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Navi = () => {
  return (
    <>
    <nav>
      <ul>
        <li><NavLink style={({isActive})=>({color:isActive?"orangered":"whitesmoke"})} to="/ank18">Main</NavLink></li>
        <li><NavLink to="Blog">Blog</NavLink></li>
        <li><NavLink to="Gallery">Photos</NavLink></li>
        <li><NavLink to="contact">Contact</NavLink></li>
      </ul>
    </nav>
    <Outlet/>
    </>
  )
}

export default Navi