import React from 'react'
import { Container, Form, Row } from 'reactstrap'
import './styles/search.scss'
import CarrierSearchContainer from '../components/SearchComponents/CarrierSearchContainer'
import LoadSearchContainer from '../components/SearchComponents/LoadSearchContainer'
import LoadTable from '../components/LoadTable/LoadTable'
const SearchPage = props => {
  console.log(props)
  const results = props.location.state
  console.log(results)
  return (
    <>
      <div className="title-div">
        <h1>Search</h1>
      </div>
      <main>
        <Container>
          <Form inline>
            <Row>
              <CarrierSearchContainer
                labelTop="MC Number"
                nameTop="mCNumber"
                labelBottom="Carrier Name"
                nameBottom="carrierName"
                placeholderBottom="Lorem Ipsum Express"
              />
            </Row>
            <Row>
              <LoadSearchContainer
                labelTop="Load Number"
                nameTop="id"
                labelBottom="City"
                placeholderBottom="St. Pete, FL"
              />
            </Row>
          </Form>
        </Container>
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
      </main>
    </>
  )
}

export default SearchPage
