import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'reactstrap'
import axios from 'axios'
import './styles/load.scss'
import AssignCarrierToLoad from '../components/LoadTracking/AssignCarrierToLoad'
import LoadTrackingForm from '../components/LoadTracking/LoadTrackingForm'
import Moment from 'react-moment'
import CustomNav from '../components/NavMenu/CustomNav'

const Load = props => {
  console.log(props)
  const loadId = props.match.params.loadId

  const [load, setLoad] = useState({})
  const [carrier, setCarrier] = useState({})
  const getLoadData = async () => {
    const resp = await axios.get(`api/Loads/${loadId}`)
    setLoad(resp.data)
  }
  const trackInput = e => {
    const fieldToUpdate = e.target.name
    const value = e.target.value
    if (fieldToUpdate === 'mCNumber') {
      setCarrier(prevCarrier => {
        prevCarrier[fieldToUpdate] = parseInt(value, 10)

        return prevCarrier
      })
    }
  }
  const saveCarrierToApi = async () => {
    const resp = await axios.put(`api/Loads/${load.id}/${carrier.mCNumber}`)
    if (resp.status === 200) {
      setLoad(prevLoad => {
        console.log(prevLoad)
        return { ...prevLoad, carrierId: resp.data }
      })
    }
  }
  console.log(load)
  useEffect(() => {
    getLoadData()
  }, [])
  return (
    <>
      <CustomNav />
      <div className="title-div">
        <h1>Load #{load.id}</h1>
      </div>
      <main>
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
        {load.carrierId === null ? (
          <section>
            <h3>Assign Carrier</h3>
            <AssignCarrierToLoad track={trackInput} save={saveCarrierToApi} />
          </section>
        ) : (
          <section>
            <h3>Update</h3>
            <LoadTrackingForm id={load.id} />
          </section>
        )}
      </main>
    </>
  )
}

export default Load
