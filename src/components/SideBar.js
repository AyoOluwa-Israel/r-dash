import React from 'react'
import {FaHome, FaBook, FaDashcube, FaMailBulk, FaUserLock} from 'react-icons/fa';

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__links"> <p>Home</p> <FaHome/></div>
      <div className="sidebar__links"><p>Profile</p> <FaBook/> </div>
      <div className="sidebar__links"><p>Dashboard</p> <FaDashcube/> </div>
      <div className="sidebar__links"><p>Mail</p> <FaMailBulk/> </div>
      <div className="sidebar__links"><p>Log Out</p> <FaUserLock/></div>
    </div>
  )
}

export default SideBar
