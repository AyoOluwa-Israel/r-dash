import React from 'react'
import { Link } from 'react-router-dom';
import {FaHome, FaBook, FaDashcube, FaMailBulk, FaUserLock} from 'react-icons/fa';

const SideBar = () => {
  return (
    <div className="sidebar">
      <Link className="sidebar__links" to="/" >  <FaHome className="sidebar__icons"/><p>Home</p></Link>
      <Link className="sidebar__links" to="/Profile"><FaBook className="sidebar__icons" /><p>Profile</p>  </Link>
      <Link className="sidebar__links" to="/Dashboard"> <FaDashcube className="sidebar__icons"/> <p>Dashboard</p></Link>
      <Link className="sidebar__links" to="/Mail"> <FaMailBulk className="sidebar__icons"/><p>Mail</p> </Link>
      <Link className="sidebar__links"> <FaUserLock className="sidebar__icons"/><p>Log Out</p></Link>
    </div>
  )
}

export default SideBar
