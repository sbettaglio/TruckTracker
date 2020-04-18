import React, { useState, useEffect } from 'react'
import { Container } from 'reactstrap'
import axios from 'axios'
import LoadTable from '../components/LoadTable/LoadTable'
import CustomNav from '../components/NavMenu/CustomNav'
const Picks = () => {
  const [loads, setLoads] = useState({})
  const getLateTrucks = async () => {
    const resp = await axios.get('api/search/loads/available')
    console.log(resp.data)
    setLoads(resp.data)
  }

  useEffect(() => {
    getLateTrucks()
  }, [])
  return (
    <>
      <CustomNav />
      <div>
        <h1>Available Loads</h1>
      </div>
      <main className="loads-main">
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
    </>
  )
}

export default Picks
