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
          <Col sm={1} md={12}>
            <LoadInfoDataComponent text="Status" data={load.loadStatus} />
          </Col>
          <Col>
            <LoadInfoTimeComponent text="P/U Date" date={load.pickApp} />
          </Col>
          <Col lg={12}>
            <LoadInfoDataComponent text="D/O City" data={load.dropCity} />
          </Col>
          <Col>
            <LoadInfoTimeComponent text="D/O Date" date={load.dropApp} />
          </Col>
          <Col lg={12}>
            <LoadInfoDataComponent text="Commodity" data={load.commodity} />
          </Col>
          <Col>
            <LoadInfoDataComponent text="Distance" data={load.distance} />
          </Col>
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
