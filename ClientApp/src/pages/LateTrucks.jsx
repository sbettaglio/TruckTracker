import React, { useState, useEffect } from 'react'
import { Container } from 'reactstrap'
import axios from 'axios'
import LoadTable from '../components/LoadTable/LoadTable'
import CustomNav from '../components/NavMenu/CustomNav'
import Footer from '../components/Footer/Footer'

const LateTrucks = () => {
  const [loads, setLoads] = useState({})
  const getLateTrucks = async () => {
    const resp = await axios.get('api/search/loads/late', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
    console.log(resp.data)
    setLoads(resp.data)
  }
  console.log(loads.length)

  useEffect(() => {
    getLateTrucks()
  }, [])
  return (
    <>
      <CustomNav />
      <div className="title-div">
        <h1>Late Trucks</h1>
      </div>
      <main>
        {loads.length > 0 ? (
          <Container>
            <LoadTable
              slot1="Id"
              slot2="P/U City"
              slot3="P/U Appointment"
              slot4="D/O City"
              slot5="D/O Appointment"
              results={loads}
            />
          </Container>
        ) : (
          <Container>
            <h2>All trucks are on schedule</h2>
          </Container>
        )}
      </main>
      <Footer />
    </>
  )
}

export default LateTrucks
