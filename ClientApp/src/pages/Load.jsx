import React from 'react'
import { Container, Row, Col, Form, FormGroup, Label, Input } from 'reactstrap'
import './styles/load.scss'
import AssignCarrierToLoad from '../components/LoadTracking/AssignCarrierToLoad'
const Load = () => {
  return (
    <>
      <div className="title-div">
        <h1>Load Id</h1>
      </div>
      <main>
        <Container>
          <Row>
            <Col lg={12}>
              <section>
                <h4>P/U City</h4>
                <p>P/U CityTampa,FL</p>
              </section>
            </Col>
            <Col>
              <section>
                <h4>P/U Date</h4>
                <p>05/01/2020 14:00</p>
              </section>
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
              <section>
                <h4>D/O City</h4>
                <p>Miami,Fl</p>
              </section>
            </Col>
            <Col>
              <section>
                <h4>D/O Date</h4>
                <p>05/02/2020 07:00</p>
              </section>
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
              <section>
                <h4>Commodity</h4>
                <p>Food Grade</p>
              </section>
            </Col>
            <Col>
              <section>
                <h4>Distance</h4>
                <p>220 miles</p>
              </section>
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
              <section>
                <h4>Customer Rate:</h4>
                <p>$700</p>
              </section>
            </Col>

            <Col>
              <section>
                <h4>Carrier Rate:</h4>
                <p>$600</p>
              </section>
            </Col>
          </Row>
        </Container>
        <section>
          <h3>Assign Carrier</h3>
          <AssignCarrierToLoad />
        </section>
      </main>
    </>
  )
}

export default Load
