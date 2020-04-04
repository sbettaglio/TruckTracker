import React, { Component } from 'react'
import { Route, Switch } from 'react-router'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import HelloWorld from './pages/_template/HelloWorld'
import HeyWorld from './pages/_template/HeyWorld'
import NotFound from './pages/NotFound'
import './custom.scss'
export default class App extends Component {
  static displayName = App.name

  render() {
    return (
      <Router>
        <header>
          <nav>
            <ul>
              <li>
                <Link to="/register">Register</Link>
              </li>
              <li>
                <Link to="/userHome">User Home</Link>
              </li>
            </ul>
          </nav>
        </header>
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route exact path="/register" component={Register}></Route>
          <Route exact path="/userHome" component={UserHome}></Route>
          <Route exact path="/picks" component={Picks}></Route>
          <Route exact path="/late" component={LateTrucks}></Route>
          <Route exact path="/carriers" component={CarrierProfiles}></Route>
          <Route exact path="/newCarrier" component={NewCarrier}></Route>
          <Route exact path="/create" component={NewLoad}></Route>
          <Route exact path="/loadtracker" component={Load}></Route>
          <Route path="*" component={NotFound}></Route>
        </Switch>
      </Router>
    )
  }
}
