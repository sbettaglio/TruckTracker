import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'
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
import SearchPage from './pages/SearchPage'
import CitySearch from './pages/CitySearch'
import LandingPage from './pages/LandingPage'
export default class App extends Component {
  static displayName = App.name

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage}></Route>
          <Route exact path="/register" component={Register}></Route>
          <Route
            exact
            path="/userHome"
            render={() =>
              localStorage.getItem('token') ? <UserHome /> : <Redirect to="/" />
            }
          ></Route>
          <Route
            exact
            path="/picks"
            render={() =>
              localStorage.getItem('token') ? <Picks /> : <Redirect to="/" />
            }
          ></Route>
          <Route
            exact
            path="/available"
            render={() =>
              localStorage.getItem('token') ? (
                <AvailableLoads />
              ) : (
                <Redirect to="/" />
              )
            }
          ></Route>
          <Route
            exact
            path="/drops"
            render={() =>
              localStorage.getItem('token') ? <Drops /> : <Redirect to="/" />
            }
          ></Route>
          <Route exact path="/late" component={LateTrucks}></Route>
          <Route
            exact
            path="/carriers/:carrierId"
            render={routeProps =>
              localStorage.getItem('token') ? (
                <CarrierProfiles {...routeProps} />
              ) : (
                <Redirect to="/" />
              )
            }
          ></Route>
          <Route
            exact
            path="/newCarrier"
            render={() =>
              localStorage.getItem('token') ? (
                <NewCarrier />
              ) : (
                <Redirect to="/" />
              )
            }
          ></Route>
          <Route
            exact
            path="/create"
            render={() =>
              localStorage.getItem('token') ? <NewLoad /> : <Redirect to="/" />
            }
          ></Route>
          <Route
            exact
            path="/loadtracker/:loadId"
            render={routeProps =>
              localStorage.getItem('token') ? (
                <Load {...routeProps} />
              ) : (
                <Redirect to="/" />
              )
            }
          ></Route>
          <Route
            exact
            path="/search"
            render={() =>
              localStorage.getItem('token') ? (
                <SearchPage />
              ) : (
                <Redirect to="/" />
              )
            }
          ></Route>
          <Route
            exact
            path="/search/:searchCity"
            component={CitySearch}
          ></Route>
          <Route path="*" component={NotFound}></Route>
        </Switch>
      </Router>
    )
  }
}
