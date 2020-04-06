import React from 'react'
import { Container, Row, Col, Form, FormGroup, Label, Input } from 'reactstrap'
const NewLoadForm = () => {
  return (
    <>
      <Form>
        <FormGroup>
          <Label>Carrier MC</Label>
          <Input type="number" name="carrierMC"></Input>
        </FormGroup>
        <FormGroup>
          <Label>Contact</Label>
          <Input type="text" name="contact"></Input>
        </FormGroup>
        <FormGroup check>
          <Input type="checkbox" name="dispatched" id="dispatched" />
          <Label for="dispatched">Dispatched</Label>
        </FormGroup>
        <FormGroup check>
          <Input type="checkbox">At Pick</Input>
          <Label>At pick</Label>
        </FormGroup>
        <FormGroup>
          <Label>Checked-in</Label>
          <Input type="time"></Input>
        </FormGroup>
        <FormGroup check>
          <Input type="checkbox"></Input>
          <Label>Loading</Label>
        </FormGroup>
        <FormGroup>
          <Label>Checked-out</Label>
          <Input type="time"></Input>
        </FormGroup>
        <FormGroup>
          <Label>ETA to Drop</Label>
          <Input type="time"></Input>
        </FormGroup>
        <FormGroup check>
          <Input type="checkbox"></Input>
          <Label>At Drop</Label>
        </FormGroup>
        <FormGroup>
          <Label>Checked-in</Label>
          <Input type="time"></Input>
        </FormGroup>
        <FormGroup check>
          <Input type="checkbox"></Input>
          <Label>Loading</Label>
        </FormGroup>
        <FormGroup>
          <Label>Checked-out</Label>
          <Input type="time"></Input>
        </FormGroup>
      </Form>
    </>
  )
}

export default NewLoadForm
