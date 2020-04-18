import React from 'react'

import CustomNav from '../components/NavMenu/CustomNav'
import './styles/user-home.scss'
import HomeTable from '../components/UserHomeComponents/HomeTable'

const UserHome = () => {
  return (
    <>
      <CustomNav />
      <div className="title-div">
        <h1>User Home Page</h1>
      </div>
      <HomeTable />
    </>
  )
}

export default UserHome
