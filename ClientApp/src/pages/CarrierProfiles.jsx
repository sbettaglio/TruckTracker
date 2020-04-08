import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Button } from 'reactstrap'
import './styles/carrier-profiles.scss'
const CarrierProfiles = () => {
  return (
    <>
      <div className="title-div">
        <h1>Placeholder Express</h1>
      </div>
      <main className="carrier-profile">
        <Container>
          <Row>
            <Col sm={1} md={12} lg={12}>
              <section className="mc-number">
                <h4>MC Number</h4>
                <p>123456</p>
              </section>
            </Col>
          </Row>
          <Row>
            <Col sm={2} md={4} lg={12}>
              <section>
                <h4>Primary Contact</h4>
                <p>John Doe</p>
              </section>
            </Col>
            <Col sm={2} md={4} lg={12}>
              <section>
                <h4>Phone Number</h4>
                <p>555-867-5309</p>
              </section>
            </Col>
            <Col md={4} lg={12}>
              <section>
                <h4>Email Address</h4>
                <p>lorem@ipsum.com</p>
              </section>
            </Col>
          </Row>
          <Row>
            <Col sm={1} md={4} lg={12}>
              <section>
                <h4>Setup Date</h4>
                <p>01/12/2018</p>
              </section>
            </Col>
            <Col sm={1} md={4} lg={12}>
              <section>
                <h4>Home State</h4>
                <p>Florida</p>
              </section>
            </Col>
            <Col md={4}>
              <section className="bottom-button">
                <Button className="btn-success">Update</Button>
              </section>
            </Col>
          </Row>
        </Container>
      </main>
    </>
  )
}

export default CarrierProfiles
