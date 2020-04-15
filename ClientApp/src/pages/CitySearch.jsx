import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from 'reactstrap'
import LoadTable from '../components/LoadTable/LoadTable'

const Drops = props => {
  console.log(props)
  const results = props.location.state
  const searchCity = props.match.params.searchCity
  const cityCapitalized =
    searchCity.charAt(0).toUpperCase() + searchCity.slice(1)

  console.log(results)
  return (
    <>
      <div className="title-div">
        <h1>{cityCapitalized} Load History</h1>
      </div>
      <main className="loads-main">
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
    </>
  )
}

export default Drops
