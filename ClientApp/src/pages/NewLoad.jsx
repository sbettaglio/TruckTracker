import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
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
      <div>
        <h1>Create New Load</h1>
      </div>
      <main className="registration">
        <Form>
          <FormGroup>
            <Label>P/U City,State</Label>
            <Input type="text" name="pickCity" onChange={trackInput}></Input>
          </FormGroup>
          <FormGroup>
            <Label>P/U Date</Label>
            <Input
              type="datetime-local"
              name="pickDate"
              onChange={trackInput}
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label>/O City,State</Label>
            <Input type="text" name="dropCity" onChange={trackInput}></Input>
          </FormGroup>
          <FormGroup>
            <Label>D/O Date</Label>
            <Input
              type="datetime-local"
              name="dropDate"
              onChange={trackInput}
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label>Weight</Label>
            <Input type="number" name="weight" onChange={trackInput}></Input>
          </FormGroup>
          <FormGroup>
            <Label>Commodity</Label>
            <Input type="text" name="commodity" onChange={trackInput}></Input>
          </FormGroup>
          <FormGroup>
            <Label>Customer Rate</Label>
            <Input
              type="number"
              name="customerRate"
              onChange={trackInput}
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label>Carrier Rate</Label>
            <Input
              type="number"
              name="carrierRate"
              onChange={trackInput}
            ></Input>
          </FormGroup>
          <Button>
            <Link to="/loadtracker">Save</Link>
          </Button>
        </Form>
      </main>
    </>
  )
}

export default NewLoad
