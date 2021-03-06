import React from 'react'
import { Row, Col, Button } from 'reactstrap'

import CarrierProfileData from './CarrierProfileData.jsx'
const CarrierProfileComponent = ({ carrier, button }) => {
  console.log(carrier)
  return (
    <>
      <Row>
        <Col sm={12} md={4} lg={12}>
          <CarrierProfileData label="MC Number" data={carrier.mcNumber} />
        </Col>
        <Col sm={12} md={6} lg={12}>
          <CarrierProfileData
            label="Loads Assigned"
            data={carrier.loads === undefined ? 0 : carrier.loads.length}
          />
        </Col>
      </Row>
      <Row>
        <Col sm={12} md={4} lg={12}>
          <CarrierProfileData
            label="Primary Contact"
            data={carrier.primaryContact}
          />
        </Col>
        <Col sm={12} md={4} lg={12}>
          <CarrierProfileData label="Phone Number" data={carrier.phoneNumber} />
        </Col>
        <Col sm={12} md={4} lg={12}>
          <CarrierProfileData label="Email Address" data={carrier.email} />
        </Col>
      </Row>
      <Row>
        <Col sm={12} md={4} lg={12}>
          <CarrierProfileData label="Setup Date" data={carrier.setupDate} />
        </Col>
        <Col sm={12} md={4} lg={12}>
          <CarrierProfileData label="Home State" data={carrier.homeState} />
        </Col>
        <Col sm={12} md={4} lg={12}>
          <section className="bottom-button">
            <Button className="btn-success" onClick={button}>
              Update
            </Button>
          </section>
        </Col>
      </Row>
    </>
  )
}

export default CarrierProfileComponent
