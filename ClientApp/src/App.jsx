import React, { Component } from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'

import UserHome from './pages/UserHome'
import Register from './pages/Register'
import LandingPage from './pages/LandingPage'
import NotFound from './pages/NotFound'
import Picks from './pages/Picks'
import LateTrucks from './pages/LateTrucks'
import CarrierProfiles from './pages/CarrierProfiles'
import NewCarrier from './pages/NewCarrier'
import NewLoad from './pages/NewLoad'
import Load from './pages/Load'
import './custom.scss'
// import './_bootswatch.scss'
import Drops from './pages/Drops'
import AvailableLoads from './pages/AvailableLoads'
import UpdateLoad from './pages/UpdateLoad'
export default class App extends Component {
  static displayName = App.name

  render() {
    return (
      <Router>
        <header className="navbar-dark bg-primary">
          <nav>
            <ul>
              <li>
                <Link className="navbar-brand" to="/register">
                  Register
                </Link>
              </li>
              <li>
                <Link className="navbar-brand" to="/userHome">
                  User Home
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <Switch>
          <Route exact path="/" component={LandingPage}></Route>
          <Route exact path="/register" component={Register}></Route>
          <Route exact path="/userHome" component={UserHome}></Route>
          <Route exact path="/picks" component={Picks}></Route>
          <Route exact path="/available" component={AvailableLoads}></Route>
          <Route exact path="/drops" component={Drops}></Route>
          <Route exact path="/late" component={LateTrucks}></Route>
          <Route exact path="/carriers" component={CarrierProfiles}></Route>
          <Route exact path="/newCarrier" component={NewCarrier}></Route>
          <Route exact path="/create" component={NewLoad}></Route>

          <Route
            exact
            path="/loadtracker/update/"
            component={UpdateLoad}
          ></Route>
          <Route path="*" component={NotFound}></Route>
        </Switch>
      </Router>
    )
  }
}
