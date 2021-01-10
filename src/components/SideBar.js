import React from 'react'
import {FaHome, FaBook, FaDashcube, FaMailBulk, FaUserLock} from 'react-icons/fa';

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__links">  <FaHome className="sidebar__icons"/><p>Home</p></div>
      <div className="sidebar__links"><FaBook className="sidebar__icons"/><p>Profile</p>  </div>
      <div className="sidebar__links"> <FaDashcube className="sidebar__icons"/> <p>Dashboard</p></div>
      <div className="sidebar__links"> <FaMailBulk className="sidebar__icons"/><p>Mail</p> </div>
      <div className="sidebar__links"> <FaUserLock className="sidebar__icons"/><p>Log Out</p></div>
    </div>
  )
}

export default SideBar
