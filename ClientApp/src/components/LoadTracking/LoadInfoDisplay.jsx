import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import LoadInfoDataComponent from './LoadInfoDataComponent'
import LoadInfoTimeComponent from './LoadInfoTimeComponent'
const LoadInfoDisplay = ({ load, distance }) => {
  let netProfit = load.customerRate - load.carrierRate

  return (
    <>
      <Container>
        <Row className="load-info-row">
          <Col xl={6}>
            <LoadInfoDataComponent text="Status" data={load.loadStatus} />
          </Col>
          <Col sm={12} md={12} xl={6}>
            <LoadInfoDataComponent text="Distance" data={distance} />
          </Col>
          <Col xl={6}>
            <LoadInfoDataComponent text="Pick City" data={load.pickCity} />
          </Col>
          <Col lg={12} xl={6}>
            <LoadInfoTimeComponent text="Pick Date" date={load.pickApp} />
          </Col>
          <Col xl={6}>
            <LoadInfoDataComponent text="Drop City" data={load.dropCity} />
          </Col>
          <Col lg={12} xl={6}>
            <LoadInfoTimeComponent text="Drop Date" date={load.dropApp} />
          </Col>
          <Col xl={6}>
            <LoadInfoDataComponent text="Commodity" data={load.commodity} />
          </Col>
          <Col lg={12} xl={6}>
            <LoadInfoDataComponent
              text="Customer Rate"
              data={load.customerRate}
            />
          </Col>
          <Col sm={12} xl={6}>
            <LoadInfoDataComponent
              text="Carrier Rate"
              data={load.carrierRate}
            />
          </Col>
          <Col>
            <LoadInfoDataComponent text="Net Profit" data={netProfit} />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default LoadInfoDisplay
