import React, { useState, useEffect } from 'react'
import { Container } from 'reactstrap'
import axios from 'axios'
import LoadTable from '../components/LoadTable/LoadTable'
import CustomNav from '../components/NavMenu/CustomNav'
import Footer from '../components/Footer/Footer'

const Drops = () => {
  const [loads, setLoads] = useState({})
  const getTodaysDrops = async () => {
    const resp = await axios.get('api/search/loads/droptoday', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
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
            <h2>You have no drops scheduled today</h2>
          </Container>
        )}
      </main>
      <Footer />
    </>
  )
}

export default Drops
