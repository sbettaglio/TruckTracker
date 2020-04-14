import React from 'react'
import { Container, Form, Row } from 'reactstrap'
import './styles/search.scss'
import CarrierSearchContainer from '../components/SearchComponents/CarrierSearchContainer'
import LoadSearchContainer from '../components/SearchComponents/LoadSearchContainer'
const SearchPage = () => {
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
                labelBottom="Pick City"
                nameBottom="pickCity"
                placeholderBottom="St. Pete, FL"
              />
            </Row>
          </Form>
        </Container>
      </main>
    </>
  )
}

export default SearchPage
