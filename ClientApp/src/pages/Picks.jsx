import React, { useState, useEffect } from 'react'
import { Container } from 'reactstrap'
import axios from 'axios'

import LoadTable from '../components/LoadTable/LoadTable'
const Picks = () => {
  const [loads, setLoads] = useState({})
  const getTodaysPicks = async () => {
    const resp = await axios.get('api/search/loads/picktoday')
    console.log(resp.data)
    setLoads(resp.data)
  }

  useEffect(() => {
    getTodaysPicks()
  }, [])
  return (
    <>
      <div className="title-div">
        <h1>Today's Picks</h1>
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
            <Container>
              <h2>You have no picks scheduled today</h2>
            </Container>
          </>
        )}
      </main>
    </>
  )
}

export default Picks
