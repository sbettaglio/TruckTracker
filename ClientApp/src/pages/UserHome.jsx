import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CustomNav from '../components/NavMenu/CustomNav'
import './styles/user-home.scss'
import HomeTable from '../components/UserHomeComponents/HomeTable'

const UserHome = () => {
  const [profile, setProfile] = useState({})
  const loadUser = async () => {
    const resp = await axios.get(`/api/Profile`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
    setProfile(resp.data)
  }
  console.log(profile)
  useEffect(() => {
    loadUser()
  }, [])
  return (
    <>
      <CustomNav />
      <HomeTable />
    </>
  )
}

export default UserHome
