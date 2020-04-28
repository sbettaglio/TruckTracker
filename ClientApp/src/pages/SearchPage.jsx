import React from 'react'
import { Container, Form, Row } from 'reactstrap'
import './styles/search.scss'
import CarrierSearchContainer from '../components/SearchComponents/CarrierSearchContainer'
import LoadSearchContainer from '../components/SearchComponents/LoadSearchContainer'

import CustomNav from '../components/NavMenu/CustomNav'
import Footer from '../components/Footer/Footer'
const SearchPage = () => {
  return (
    <>
      <CustomNav />
      <div className="search-title-div">
        <h1>Search</h1>
      </div>
      <main className="search-main">
        <Container className="search-container">
          <Form>
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
      <Footer />
    </>
  )
}

export default SearchPage
