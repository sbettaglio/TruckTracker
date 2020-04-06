import React, { useState } from 'react'
import { Container, Row, Col, Form, FormGroup, Label, Input } from 'reactstrap'
const LoadTrackingForm = () => {
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
  return (
    <>
      <Form>
        <FormGroup check>
          <Input
            type="checkbox"
            name="dispatched"
            id="dispatched"
            onChange={trackLoad}
          />
          <Label for="dispatched">Dispatched</Label>
        </FormGroup>
        <FormGroup>
          <Label>Eta</Label>
          <Input name="pickEta" type="time" onChange={trackLoad}></Input>
        </FormGroup>
        <FormGroup check>
          <Input type="checkbox" name="atPick" onChange={trackLoad}>
            At Pick
          </Input>
          <Label>At pick</Label>
        </FormGroup>
        <FormGroup>
          <Label>Checked-in</Label>
          <Input name="pickCheckIn" type="time" onChange={trackLoad}></Input>
        </FormGroup>
        <FormGroup>
          <Label>Checked-out</Label>
          <Input name="pickCheckOut" type="time" onChange={trackLoad}></Input>
        </FormGroup>
        <FormGroup>
          <Label>ETA to Drop</Label>
          <Input name="dropEta" type="time" onChange={trackLoad}></Input>
        </FormGroup>
        <FormGroup check>
          <Input name="atDrop" type="checkbox" onChange={trackLoad}></Input>
          <Label>At Drop</Label>
        </FormGroup>
        <FormGroup>
          <Label>Checked-in</Label>
          <Input name="dropCheckIn" type="time" onChange={trackLoad}></Input>
        </FormGroup>
        <FormGroup>
          <Label>Checked-out</Label>
          <Input name="dropCheckOut" type="time" onChange={trackLoad}></Input>
        </FormGroup>
      </Form>
    </>
  )
}

export default LoadTrackingForm
