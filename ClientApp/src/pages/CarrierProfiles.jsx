import React, { useState, useEffect } from 'react'
import { Container } from 'reactstrap'
import axios from 'axios'

import './styles/carrier-profiles.scss'
import CustomNav from '../components/NavMenu/CustomNav'
import CarrierProfileComponent from '../components/CarrierProfiles/CarrierProfileComponent'
const CarrierProfiles = props => {
  const carrierId = props.match.params.carrierId
  const [carrier, setCarrier] = useState([])
  const getCarrierData = async () => {
    const resp = await axios.get(`api/Carriers/${carrierId}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
    setCarrier(resp.data)
  }
  useEffect(() => {
    getCarrierData()
  }, [])

  return (
    <>
      <CustomNav />
      <div className="carrier-profile-title-div">
        <h1>{carrier.carrierName}</h1>
      </div>
      <main className="carrier-profile">
        <Container className="carrier-profile-container">
          <CarrierProfileComponent carrier={carrier} />
        </Container>
      </main>
    </>
  )
}

export default CarrierProfiles
