import React, { useState } from 'react'
import { Form, FormGroup, Label, Input, Button, Row, Col } from 'reactstrap'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import CustomNav from '../NavMenu/CustomNav'
const CreateNewLoad = () => {
  const [load, setLoad] = useState({
    distance: 0,
    transitTime: '',
  })
  const [wasSuccessfullyCreated, setWasSuccessfullyCreated] = useState({
    shouldRedirect: false,
    newLoadInformation: {},
  })
  const trackInput = e => {
    const fieldToUpdate = e.target.name
    console.log(fieldToUpdate)
    const value = e.target.value
    console.log(value)
    if (fieldToUpdate === 'weight') {
      setLoad(prevLoad => {
        prevLoad[fieldToUpdate] = parseInt(value, 10)
        console.log(value)
        return prevLoad
      })
    } else if (
      fieldToUpdate === 'customerRate' ||
      fieldToUpdate === 'carrierRate'
    ) {
      setLoad(prevLoad => {
        prevLoad[fieldToUpdate] = parseFloat(value, 10)
        console.log(value)
        return prevLoad
      })
    } else {
      setLoad(prevLoad => {
        prevLoad[fieldToUpdate] = value
        return prevLoad
      })
    }
  }
  // const getDistance = async () => {
  //   console.log(`sending ${load.pickCity} and ${load.dropCity}`)
  //   const drive = await axios.get(
  //     `https://www.mapquestapi.com/directions/v2/route?key=B4L7zPogojJFdsgmWAELJaS2Wtlehzmx&from=${load.pickCity}&to=${load.dropCity}`
  //   )
  //   console.log(drive.data.route.distance, drive.data.route.formattedTime)
  //   setLoad({
  //     distance: drive.data.route.distance,
  //     transitTime: drive.data.route.formattedTime,
  //   })
  // }
  const saveLoad = async () => {
    console.log('adding', load)
    const resp = await axios.post('api/Loads', load, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
    console.log(resp.data)
    if (resp.status === 201) {
      setWasSuccessfullyCreated({
        shouldRedirect: true,
        newLoadInformation: resp.data,
      })
    }
  }
  if (wasSuccessfullyCreated.shouldRedirect) {
    return (
      <Redirect
        to={{
          pathname: `/loadtracker/${wasSuccessfullyCreated.newLoadInformation.id}`,
          state: { load: wasSuccessfullyCreated.newLoadInformation },
        }}
      />
    )
  } else {
    return (
      <>
        <CustomNav />
        <Form>
          <Row>
            <Col md={8}>
              <FormGroup>
                <Label>P/U City,State</Label>
                <Input
                  type="text"
                  name="pickCity"
                  onChange={trackInput}
                ></Input>
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label>P/U Date</Label>
                <Input
                  type="datetime-local"
                  name="pickApp"
                  onChange={trackInput}
                ></Input>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={8}>
              <FormGroup>
                <Label>D/O City,State</Label>
                <Input
                  type="text"
                  name="dropCity"
                  onChange={trackInput}
                ></Input>
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label>D/O Date</Label>
                <Input
                  type="datetime-local"
                  name="dropApp"
                  onChange={trackInput}
                ></Input>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <FormGroup>
                <Label>Weight</Label>
                <Input
                  type="number"
                  name="weight"
                  onChange={trackInput}
                ></Input>
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label>Commodity</Label>
                <Input
                  type="text"
                  name="commodity"
                  onChange={trackInput}
                ></Input>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={5}>
              <FormGroup>
                <Label>Customer Rate</Label>
                <Input
                  type="number"
                  name="customerRate"
                  onChange={trackInput}
                ></Input>
              </FormGroup>
            </Col>
            <Col md={5}>
              <FormGroup>
                <Label>Carrier Rate</Label>
                <Input
                  type="number"
                  name="carrierRate"
                  onChange={trackInput}
                ></Input>
              </FormGroup>
            </Col>
            <Col md={2}>
              <Button className="btn btn-success" onClick={saveLoad}>
                Save
              </Button>
            </Col>
          </Row>
        </Form>
      </>
    )
  }
}

export default CreateNewLoad
