import React, { useState } from 'react'
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
const AssignCarrierToLoad = () => {
  const [carrier, setCarrier] = useState({})
  const trackInput = e => {
    const fieldToUpdate = e.target.name
    console.log(fieldToUpdate)
    const value = e.target.value
    console.log(value)
  }
  //on Button submit API call to verify carrier is in database with valid insurance
  return (
    <Container>
      <Form>
        <Row>
          <Col sm={12} lg={8}>
            <FormGroup>
              <Label>Carrier MC</Label>
              <Input
                type="number"
                name="carrierMC"
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
              <Button className="btn-success">Assign</Button>
            </FormGroup>
          </Col>
        </Row>
      </Form>
    </Container>
  )
}

export default AssignCarrierToLoad
