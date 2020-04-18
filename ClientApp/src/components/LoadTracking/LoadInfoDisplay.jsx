import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import LoadInfoDataComponent from './LoadInfoDataComponent'
import LoadInfoTimeComponent from './LoadInfoTimeComponent'
const LoadInfoDisplay = ({ load }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <LoadInfoDataComponent text="P/U City" data={load.pickCity} />
          </Col>
          <Col>
            <LoadInfoTimeComponent text="P/U Date" date={load.pickApp} />
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <LoadInfoDataComponent text="D/O City" data={load.dropCity} />
          </Col>
          <Col>
            <LoadInfoTimeComponent text="D/O Date" date={load.dropApp} />
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <LoadInfoDataComponent text="Commodity" data={load.commodity} />
          </Col>
          <Col>
            <LoadInfoDataComponent text="Distance" data={load.distance} />
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <LoadInfoDataComponent
              text="Customer Rate"
              data={load.customerRate}
            />
          </Col>

          <Col>
            <LoadInfoDataComponent
              text="Carrier Rate"
              data={load.carrierRate}
            />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default LoadInfoDisplay
