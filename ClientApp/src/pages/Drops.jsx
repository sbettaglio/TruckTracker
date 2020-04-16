import React, { useState, useEffect } from 'react'
import { Container } from 'reactstrap'
import axios from 'axios'
import LoadTable from '../components/LoadTable/LoadTable'

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
      <div className="title-div">
        <h1>Today's Drops</h1>
      </div>
      <main className="loads-main">
        {loads !== undefined ? (
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
              <h2>You have no Drops scheduled today</h2>
            </Container>
          </>
        )}
      </main>
    </>
  )
}

export default Drops
