import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import Moment from 'react-moment'
const LoadInfoDisplay = ({ load }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <section>
              <h4>P/U City</h4>
              <p>{load.pickCity}</p>
            </section>
          </Col>
          <Col>
            <section>
              <h4>P/U Date</h4>
              <p>
                <Moment format="MM-DD-YYYY HH:mm">{load.pickApp}</Moment>
              </p>
            </section>
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <section>
              <h4>D/O City</h4>
              <p>{load.dropCity}</p>
            </section>
          </Col>
          <Col>
            <section>
              <h4>D/O Date</h4>
              <p>
                <Moment format="MM-DD-YYYY HH:mm">{load.dropApp}</Moment>
              </p>
            </section>
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <section>
              <h4>Commodity</h4>
              <p>{load.commodity}</p>
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
              <p>${load.customerRate}.00</p>
            </section>
          </Col>

          <Col>
            <section>
              <h4>Carrier Rate:</h4>
              <p>${load.carrierRate}.00</p>
            </section>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default LoadInfoDisplay
