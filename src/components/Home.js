import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import SideBar from './SideBar'
import Navbar from './Navbar'
import Landing from '../pages/Landing'
import Mail from '../pages/Mail'
import Profile from '../pages/Profile'
import Dashboard from '../pages/Dashboard'


const Home = () => {
  return (
    
    <div className="home">
      <Router>
        <Navbar/>
        <SideBar/>
        <Switch>
          <Route path = '/' exact component={Landing}/>
          <Route path='/Mail' component = {Mail}/>
          <Route path='/Profile' component = {Profile}/>
          <Route path='/Dashboard' component = {Dashboard}/>
        </Switch>
      </Router>
      {/* <Landing/> */}
    </div>
  )
}

export default Home
