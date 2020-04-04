import React from 'react'
import { Link } from 'react-router-dom'

const UserHome = () => {
  return (
    <>
      <div>
        <h1>User Home Page</h1>
      </div>
      <main className="user-home">
        <ul>
          <li>
            <Link to="/picks">Today's Picks</Link>
          </li>
          <li>
            <Link to="/drops">Today's Drops</Link>
          </li>
          <li>
            <Link to="/late">Late Trucks</Link>
          </li>
          <li>
            <Link to="/available">Available Loads</Link>
          </li>
          <li>
            <Link to="/create">Create New Load</Link>
          </li>
          <li>
            <Link to="/carriers">Carrier Profiles</Link>
          </li>
          <li className="mobile-bottom">
            <Link to="/newCarrier">New Carrier</Link>
          </li>
        </ul>
        <form>
          <button>Sign Out</button>
        </form>
      </main>
    </>
  )
}

export default UserHome
