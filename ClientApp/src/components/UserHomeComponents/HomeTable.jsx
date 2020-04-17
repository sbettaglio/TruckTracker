import React from 'react'
import { Link } from 'react-router-dom'
import { Table, Container, Row, Col } from 'reactstrap'
import HomeCard from './HomeCard'
const HomeTable = () => {
  return (
    <>
      <Container>
        <Row>
          <Col sm={1} md={6} xl={4}>
            <HomeCard text="Today's Picks" link="picks" />
          </Col>
          <Col sm={1} md={6} xl={4}>
            <HomeCard text="Today's Drops" link="drops" />
          </Col>
          <Col sm={1} md={6} xl={4}>
            <HomeCard text="Late Trucks" link="late" />
          </Col>

          <Col sm={1} md={6} xl={4}>
            <HomeCard text="Available Loads" link="available" />
          </Col>

          <Col sm={1} md={6} xl={4}>
            <HomeCard text="Create New Load" link="create" />
          </Col>
          <Col sm={1} md={6} xl={4}>
            <HomeCard text="Add New Carrier" link="newCarrier" />
          </Col>
        </Row>
        <Row>
          <Col sm={1} md={{ size: 6, offset: 3 }}>
            <HomeCard text="Search" link="search" />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default HomeTable