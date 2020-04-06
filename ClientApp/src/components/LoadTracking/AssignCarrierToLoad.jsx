import React, { useState } from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
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
    <Form>
      <FormGroup>
        <Label>Carrier MC</Label>
        <Input type="number" name="carrierMC" onChange={trackInput}></Input>
      </FormGroup>
      <FormGroup>
        <Label>Contact</Label>
        <Input type="text" name="contact" onChange={trackInput}></Input>
      </FormGroup>
      <Button>Assign</Button>
    </Form>
  )
}

export default AssignCarrierToLoad
