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
import FormText from './pages/FormText'
export default class App extends Component {
  static displayName = App.name

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage}></Route>
          <Route exact path="/test" component={FormText}></Route>
          <Route exact path="/register" component={Register}></Route>
          <Route
            exact
            path="/userHome"
            render={routeProps =>
              localStorage.getItem('token') ? (
                <UserHome {...routeProps} />
              ) : (
                <Redirect to="/" />
              )
            }
          ></Route>
          <Route
            exact
            path="/picks"
            render={routeProps =>
              localStorage.getItem('token') ? (
                <Picks {...routeProps} />
              ) : (
                <Redirect to="/" />
              )
            }
          ></Route>
          <Route
            exact
            path="/available"
            render={routeProps =>
              localStorage.getItem('token') ? (
                <AvailableLoads {...routeProps} />
              ) : (
                <Redirect to="/" />
              )
            }
          ></Route>
          <Route
            exact
            path="/drops"
            render={routeProps =>
              localStorage.getItem('token') ? (
                <Drops {...routeProps} />
              ) : (
                <Redirect to="/" />
              )
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
            render={routeProps =>
              localStorage.getItem('token') ? (
                <NewCarrier {...routeProps} />
              ) : (
                <Redirect to="/" />
              )
            }
          ></Route>
          <Route
            exact
            path="/create"
            render={routeProps =>
              localStorage.getItem('token') ? (
                <NewLoad {...routeProps} />
              ) : (
                <Redirect to="/" />
              )
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
            render={routeProps =>
              localStorage.getItem('token') ? (
                <SearchPage {...routeProps} />
              ) : (
                <Redirect to="/" />
              )
            }
          ></Route>
          <Route
            exact
            path="/search/:searchCity"
            render={routeProps =>
              localStorage.getItem('token') ? (
                <SearchPage {...routeProps} />
              ) : (
                <Redirect to="/" />
              )
            }
          ></Route>
          <Route path="*" component={NotFound}></Route>
        </Switch>
      </Router>
    )
  }
}
