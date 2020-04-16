import React, { useState } from 'react'
import { Container, Form, Row } from 'reactstrap'
import './styles/search.scss'
import CarrierSearchContainer from '../components/SearchComponents/CarrierSearchContainer'
import LoadSearchContainer from '../components/SearchComponents/LoadSearchContainer'
import LoadTable from '../components/LoadTable/LoadTable'
import CustomNav from '../components/NavMenu/CustomNav'
const SearchPage = () => {
  return (
    <>
      <CustomNav />
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
      </main>
    </>
  )
}

export default SearchPage
