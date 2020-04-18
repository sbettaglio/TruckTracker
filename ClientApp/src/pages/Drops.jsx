import React, { useState, useEffect } from 'react'
import { Container } from 'reactstrap'
import axios from 'axios'
import LoadTable from '../components/LoadTable/LoadTable'
import CustomNav from '../components/NavMenu/CustomNav'

const Drops = () => {
  const [loads, setLoads] = useState({})
  const getTodaysDrops = async () => {
    const resp = await axios.get('api/search/loads/droptoday')
    console.log(resp.data)
    setLoads(resp.data)
  }

  useEffect(() => {
    getTodaysDrops()
  }, [])
  return (
    <>
      <CustomNav />
      <div className="title-div">
        <h1>Today's Drops</h1>
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
            <h2>You have no drops scheduled today</h2>
          </>
        )}
      </main>
    </>
  )
}

export default Drops
