import React from 'react'
import { Link } from 'react-router-dom'
import { Table } from 'reactstrap'
import CustomNav from '../components/NavMenu/CustomNav'

import HomeTable from '../components/HomeTable'

const UserHome = () => {
  return (
    <>
      <CustomNav />
      <div className="title-div">
        <h1>User Home Page</h1>
      </div>
      <HomeTable />
      <form className="log-out">
        <button type="button" className="btn btn-danger">
          Sign Out
        </button>
      </form>
    </>
  )
}

export default UserHome
