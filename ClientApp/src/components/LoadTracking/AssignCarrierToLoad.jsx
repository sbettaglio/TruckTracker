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
const AssignCarrierToLoad = ({ track, save }) => {
  return (
    <Container>
      <Form>
        <Row>
          <Col sm={12} lg={8}>
            <FormGroup>
              <Label>Carrier MC</Label>
              <Input type="number" name="mCNumber" onChange={track}></Input>
            </FormGroup>
          </Col>
          <Col sm={12} lg={8}>
            <FormGroup>
              <Label>Contact</Label>
              <Input type="text" name="contact"></Input>
            </FormGroup>
          </Col>
          <Col sm={12} lg={4}>
            <FormGroup className="button-bottom">
              <Button className="btn-success" onClick={save}>
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
