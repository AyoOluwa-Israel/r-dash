import React from 'react'
import SideBar from './SideBar'
import Navbar from './Navbar'
import Landing from '../pages/Landing'

const Home = () => {
  return (
    <div className="home">
      <Navbar/>
      <SideBar/>
      <Landing/>
    </div>
  )
}

export default Home
