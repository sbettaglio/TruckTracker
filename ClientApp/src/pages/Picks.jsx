import React, { useState, useEffect } from 'react'
import { Container } from 'reactstrap'
import axios from 'axios'
import LoadTable from '../components/LoadTable/LoadTable'
import CustomNav from '../components/NavMenu/CustomNav'
import './styles/load-list.scss'
import Footer from '../components/Footer/Footer'
const Picks = props => {
  const [loads, setLoads] = useState({})
  const getTodaysPicks = async () => {
    const resp = await axios.get('api/search/loads/picktoday', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })

    setLoads(resp.data)
  }

  useEffect(() => {
    getTodaysPicks()
  }, [])
  return (
    <>
      <CustomNav />
      <div className="title-div">
        <h1>Today's Picks</h1>
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
            <h2>You have no picks scheduled today</h2>
          </Container>
        )}
      </main>
      <Footer />
    </>
  )
}

export default Picks
