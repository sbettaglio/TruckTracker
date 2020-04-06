import React from 'react'
import { Container, Row, Col, Form, FormGroup, Label, Input } from 'reactstrap'
import NewLoadForm from '../components/NewLoadForm'
const Load = () => {
  return (
    <>
      <div>
        <h1>Load Id</h1>
      </div>
      <main>
        <Container>
          <Row>
            <Col>
              <p>
                <span>P/U City:</span>Tampa,FL{' '}
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>
                <span>P/U Date:</span>05/01/2020 14:00
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>
                <span>D/O City:</span>Miami, FL
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>
                <span>D/O Date:</span>05/02/2020 07:00
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>
                <span>Commodity:</span>Food Grade
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>
                <span>Customer Rate:</span>$700
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>
                <span>Carrier Rate:</span>$600
              </p>
            </Col>
          </Row>
        </Container>
        <section className="registration">
          <h3>Assign Carrier</h3>
          <NewLoadForm />
        </section>
      </main>
    </>
  )
}

export default Load
