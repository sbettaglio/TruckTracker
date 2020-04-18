import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import UserHome from './pages/UserHome'
import Register from './pages/Register'
import NotFound from './pages/NotFound'
import Picks from './pages/Picks'
import LateTrucks from './pages/LateTrucks'
import CarrierProfiles from './pages/CarrierProfiles'
import NewCarrier from './pages/NewCarrier'
import NewLoad from './pages/NewLoad'
import Load from './pages/Load'
import './custom.scss'
import Drops from './pages/Drops'
import AvailableLoads from './pages/AvailableLoads'
import UpdateLoad from './pages/UpdateLoad'
import SearchPage from './pages/SearchPage'
import CitySearch from './pages/CitySearch'
export default class App extends Component {
  static displayName = App.name

  render() {
    return (
      <Router>
        <Switch>
          {/* <Route exact path="/" component={LandingPage}></Route> */}
          <Route exact path="/register" component={Register}></Route>
          <Route exact path="/" component={UserHome}></Route>
          <Route exact path="/picks" component={Picks}></Route>
          <Route exact path="/available" component={AvailableLoads}></Route>
          <Route exact path="/drops" component={Drops}></Route>
          <Route exact path="/late" component={LateTrucks}></Route>
          <Route
            exact
            path="/carriers/:carrierId"
            component={CarrierProfiles}
          ></Route>
          <Route exact path="/newCarrier" component={NewCarrier}></Route>
          <Route exact path="/create" component={NewLoad}></Route>
          <Route exact path="/loadtracker/:loadId" component={Load}></Route>
          <Route exact path="/search" component={SearchPage}></Route>
          <Route
            exact
            path="/search/:searchCity"
            component={CitySearch}
          ></Route>
          <Route
            exact
            path="/loadtracker/update/:loadId"
            component={UpdateLoad}
          ></Route>
          <Route path="*" component={NotFound}></Route>
        </Switch>
      </Router>
    )
  }
}
