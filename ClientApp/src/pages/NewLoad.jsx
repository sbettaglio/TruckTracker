import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Container,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Row,
  Col,
} from 'reactstrap'
const NewLoad = () => {
  const [load, setLoad] = useState({})
  const trackInput = e => {
    const fieldToUpdate = e.target.name
    console.log(fieldToUpdate)
    const value = e.target.value
    console.log(value)
    setLoad(prevLoad => {
      prevLoad[fieldToUpdate] = value
      return prevLoad
    })
  }
  return (
    <>
      <div className="title-div">
        <h1>Create New Load</h1>
      </div>
      <Container>
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
                  name="pickDate"
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
                  name="dropDate"
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
              <Button className="btn btn-success">Save</Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </>
  )
}

export default NewLoad
