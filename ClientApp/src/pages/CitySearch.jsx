import React from 'react'
import { Container } from 'reactstrap'
import LoadTable from '../components/LoadTable/LoadTable'
import CustomNav from '../components/NavMenu/CustomNav'
import Footer from '../components/Footer/Footer'

const Drops = props => {
  console.log(props)
  const results = props.location.state
  const searchCity = props.match.params.searchCity
  const cityCapitalized =
    searchCity.charAt(0).toUpperCase() + searchCity.slice(1)

  console.log(results)
  return (
    <>
      <CustomNav />
      <div className="title-div">
        <h1>{cityCapitalized} Load History</h1>
      </div>
      <main>
        {results.length > 0 ? (
          <Container>
            <LoadTable
              slot1="Id"
              slot2="P/U City"
              slot3="P/U Appointment"
              slot4="D/O City"
              slot5="D/O Appointment"
              results={results}
            />
          </Container>
        ) : (
          <>
            <Container>
              <h2>
                No loads have been scheduled to pick or drop in{' '}
                {cityCapitalized}.
              </h2>
            </Container>
          </>
        )}
      </main>
      <Footer />
    </>
  )
}

export default Drops
