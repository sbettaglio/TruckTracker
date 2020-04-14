import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
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
import axios from 'axios'
const AssignCarrierToLoad = ({ id, load }) => {
  console.log(load)
  const [carrier, setCarrier] = useState({})
  const [wasSuccessfullyCreated, setWasSuccessfullyCreated] = useState({
    shouldRedirect: false,
    newLoadInformation: { load },
  })
  const trackInput = e => {
    const fieldToUpdate = e.target.name
    console.log(fieldToUpdate)
    const value = e.target.value
    console.log(value)
    if (fieldToUpdate === 'mCNumber') {
      setCarrier(prevCarrier => {
        prevCarrier[fieldToUpdate] = parseInt(value, 10)

        return prevCarrier
      })
    }
  }
  const saveCarrierToApi = async () => {
    console.log(carrier.mCNumber)
    const resp = await axios.put(`api/Loads/${id}/${carrier.mCNumber}`, load)
    console.log(resp.data)
    if (resp.status === 200) {
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
          pathname: `/loadtracker/update/${id}`,
          state: { load: wasSuccessfullyCreated.newLoadInformation },
        }}
      />
    )
  }
  return (
    <Container>
      <Form>
        <Row>
          <Col sm={12} lg={8}>
            <FormGroup>
              <Label>Carrier MC</Label>
              <Input
                type="number"
                name="mCNumber"
                onChange={trackInput}
              ></Input>
            </FormGroup>
          </Col>
          <Col sm={12} lg={8}>
            <FormGroup>
              <Label>Contact</Label>
              <Input type="text" name="contact" onChange={trackInput}></Input>
            </FormGroup>
          </Col>
          <Col sm={12} lg={4}>
            <FormGroup className="button-bottom">
              <Button className="btn-success" onClick={saveCarrierToApi}>
                Assign
              </Button>
            </FormGroup>
          </Col>
        </Row>
      </Form>
    </Container>
  )
}

export default AssignCarrierToLoad
