import React, { useState, useEffect } from 'react'
import { Container } from 'reactstrap'
import axios from 'axios'
import LoadTable from '../components/LoadTable/LoadTable'
import CustomNav from '../components/NavMenu/CustomNav'
import Footer from '../components/Footer/Footer'
const Picks = () => {
  const [loads, setLoads] = useState({})
  const getAvailableLoads = async () => {
    const resp = await axios.get('api/search/loads/available', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
    console.log(resp.data)
    setLoads(resp.data)
  }

  useEffect(() => {
    getAvailableLoads()
  }, [])
  return (
    <>
      <CustomNav />
      <div className="title-div">
        <h1>Available Loads</h1>
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
          <>
            <h2>All loads are covered</h2>
          </>
        )}
      </main>
      <Footer />
    </>
  )
}

export default Picks
