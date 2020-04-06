import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Button } from 'reactstrap'

const CarrierProfiles = () => {
  return (
    <>
      <div>
        <h1>Placeholder Express</h1>
      </div>
      <main>
        <Container>
          <Col>
            <Row>
              <section>
                <h4>MC Number</h4>
                <p>123456</p>
              </section>
            </Row>
            <Row>
              <section>
                <h4>Primary Contact</h4>
                <p>John Doe</p>
              </section>
            </Row>
          </Col>
          <Col>
            <Row>
              <section>
                <h4>Phone Number</h4>
                <p>555-867-5309</p>
              </section>
            </Row>
            <Row>
              <section>
                <h4>Email Address</h4>
                <p>lorem@ipsum.com</p>
              </section>
            </Row>
          </Col>
          <Col>
            <Row>
              <section>
                <h4>Setup Date</h4>
                <p>01/12/2018</p>
              </section>
            </Row>
            <Row>
              <section>
                <h4>Home State</h4>
                <p>Florida</p>
              </section>
            </Row>
          </Col>
        </Container>
        <Button>Update</Button>
      </main>
    </>
  )
}

export default CarrierProfiles
