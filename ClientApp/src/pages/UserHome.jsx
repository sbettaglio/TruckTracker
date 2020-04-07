import React from 'react'
import { Link } from 'react-router-dom'
import { Table } from 'reactstrap'
import HomeTable from '../components/HomeTable'

const UserHome = () => {
  return (
    <>
      <div className="title-div">
        <h1>User Home Page</h1>
      </div>
      <HomeTable />
      <form className="log-out">
        <button type="button" class="btn btn-danger">
          Sign Out
        </button>
      </form>
    </>
  )
}

export default UserHome
