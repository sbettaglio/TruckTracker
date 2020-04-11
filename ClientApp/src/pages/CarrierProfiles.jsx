import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Button } from 'reactstrap'
import axios from 'axios'
import Moment from 'react-moment'
import './styles/carrier-profiles.scss'
const CarrierProfiles = props => {
  console.log(props.match.params.carrierId)
  const carrierId = props.match.params.carrierId
  const [carrier, setCarrier] = useState({})
  const getCarrierData = async () => {
    const resp = await axios.get(`api/Carriers/${carrierId}`)
    setCarrier(resp.data)
  }
  useEffect(() => {
    getCarrierData()
  }, [])
  console.log(carrier)
  return (
    <>
      <div className="title-div">
        <h1>{carrier.carrierName}</h1>
      </div>
      <main className="carrier-profile">
        <Container>
          <Row>
            <Col sm={1} md={12} lg={12}>
              <section className="mc-number">
                <h4>MC Number</h4>
                <p>{carrier.mcNumber}</p>
              </section>
            </Col>
          </Row>
          <Row>
            <Col sm={2} md={4} lg={12}>
              <section>
                <h4>Primary Contact</h4>
                <p>{carrier.primaryContact}</p>
              </section>
            </Col>
            <Col sm={2} md={4} lg={12}>
              <section>
                <h4>Phone Number</h4>
                <p>{carrier.phoneNumber}</p>
              </section>
            </Col>
            <Col md={4} lg={12}>
              <section>
                <h4>Email Address</h4>
                <p>{carrier.email}</p>
              </section>
            </Col>
          </Row>
          <Row>
            <Col sm={1} md={4} lg={12}>
              <section>
                <h4>Setup Date</h4>
                <p>
                  <Moment format="MM-DD-YYYY">{carrier.setupDate}</Moment>
                </p>
              </section>
            </Col>
            <Col sm={1} md={4} lg={12}>
              <section>
                <h4>Home State</h4>
                <p>{carrier.homeState}</p>
              </section>
            </Col>
            <Col md={4} lg={12}>
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
