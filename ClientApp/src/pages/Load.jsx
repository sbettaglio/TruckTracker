import React from 'react'
import { Container, Row, Col, Form, FormGroup, Label, Input } from 'reactstrap'
import LoadTrackingForm from '../components/LoadTracking/LoadTrackingForm'
import AssignCarrierToLoad from '../components/LoadTracking/AssignCarrierToLoad'
const Load = () => {
  return (
    <>
      <div>
        <h1>Load Id</h1>
      </div>
      <main>
        <Container>
          <Row>
            <Col sm={1} md={2}>
              <p>
                <span>P/U City:</span>Tampa,FL{' '}
              </p>
            </Col>
            <Col sm={1} md={2}>
              <p>
                <span>P/U Date:</span>05/01/2020 14:00
              </p>
            </Col>
          </Row>
          <Row>
            <Col sm={1} md={2}>
              <p>
                <span>D/O City:</span>Miami, FL
              </p>
            </Col>
          </Row>
          <Row>
            <Col sm={1} md={2}>
              <p>
                <span>D/O Date:</span>05/02/2020 07:00
              </p>
            </Col>
          </Row>
          <Row>
            <Col sm={1} md={2}>
              <p>
                <span>Commodity:</span>Food Grade
              </p>
            </Col>
          </Row>
          <Row>
            <Col sm={1} md={2}>
              <p>
                <span>Customer Rate:</span>$700
              </p>
            </Col>
          </Row>
          <Row>
            <Col sm={1} md={2}>
              <p>
                <span>Carrier Rate:</span>$600
              </p>
            </Col>
          </Row>
        </Container>
        <section className="registration">
          <h3>Assign Carrier</h3>
          <AssignCarrierToLoad />
          <LoadTrackingForm />
        </section>
      </main>
    </>
  )
}

export default Load
