import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Option,
} from 'reactstrap'
const LoadTrackingForm = props => {
  console.log(props)
  const { id } = props

  const [load, setLoad] = useState({})
  const trackLoad = e => {
    const fieldToUpdate = e.target.name
    console.log(fieldToUpdate)
    let value = e.target.value
    if (value === 'on') {
      value = true
    }
    console.log(value)
    setLoad(prevLoad => {
      prevLoad[fieldToUpdate] = value
      return prevLoad
    })
  }
  const getLoadData = async () => {
    const resp = await axios.get(`api/Loads/${id}`)
    setLoad(resp.data)
  }
  const sendLoadUpdateToApi = async () => {
    // console.log('updating', load)
    const resp = await axios.put(`api/Loads/${id}/update`, load)
    if (resp.status === 200) {
      setLoad(resp.data)
      alert('Load has been updated')
    }
  }

  useEffect(() => {
    getLoadData()
  }, [])

  return (
    <>
      <Container>
        <Form>
          <Row>
            <Col>
              <FormGroup>
                <Label for="loadStatus">Load Status</Label>
                <Input
                  className="form-control"
                  type="select"
                  name="loadStatus"
                  id="loadStatus"
                  onChange={trackLoad}
                >
                  <option>{load.loadStatus}</option>
                  <option value="available">Available</option>
                  <option value="pickOnWay">Pick on way</option>
                  <option value="pickLate">Pick late</option>
                  <option value="atShipper">At shipper</option>
                  <option value="loading">Loading</option>
                  <option value="onRoute">On Route</option>
                  <option value="rollingLate">Rolling Late</option>
                  <option value="atDrop">At drop</option>
                  <option value="unloading">Unloading</option>
                  <option value="empty">Empty</option>
                </Input>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <FormGroup>
                <Label for="exampleDateTime">ETA to Pick</Label>
                <Input
                  name="pickEta"
                  type="datetime-local"
                  id="exampleDateTime"
                  onChange={trackLoad}
                  // value={load.pickEta}
                ></Input>
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label>Checked-in</Label>
                <Input
                  name="pickCheckIn"
                  type="datetime-local"
                  onChange={trackLoad}
                ></Input>
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label>Checked-out</Label>
                <Input
                  name="pickCheckOut"
                  type="datetime-local"
                  onChange={trackLoad}
                ></Input>
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col>
              <FormGroup>
                <Label>ETA to Drop</Label>
                <Input
                  name="dropEta"
                  type="datetime-local"
                  onChange={trackLoad}
                ></Input>
              </FormGroup>
            </Col>

            <Col>
              <FormGroup>
                <Label>Checked-in</Label>
                <Input
                  name="dropCheckIn"
                  type="datetime-local"
                  onChange={trackLoad}
                ></Input>
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label>Checked-out</Label>
                <Input
                  name="dropCheckOut"
                  type="datetime-local"
                  onChange={trackLoad}
                ></Input>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <FormGroup className="registration-button">
                <Button className="btn-success" onClick={sendLoadUpdateToApi}>
                  Save
                </Button>
              </FormGroup>
            </Col>
          </Row>
        </Form>
      </Container>
    </>
  )
}

export default LoadTrackingForm
