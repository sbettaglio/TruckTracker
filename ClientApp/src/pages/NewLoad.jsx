import React from 'react'
import { Link } from 'react-router-dom'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
const NewLoad = () => {
  return (
    <>
      <div>
        <h1>Create New Load</h1>
      </div>
      <main className="registration">
        <Form>
          <FormGroup>
            <Label>P/U City,State</Label>
            <Input type="text" name="pickCity"></Input>
          </FormGroup>
          <FormGroup>
            <Label>P/U Date</Label>
            <Input type="datetime-local" name="pickDate"></Input>
          </FormGroup>
          <FormGroup>
            <Label>/O City,State</Label>
            <Input type="text" name="dropCity"></Input>
          </FormGroup>
          <FormGroup>
            <Label>D/O Date</Label>
            <Input type="datetime-local" name="dropDate"></Input>
          </FormGroup>
          <FormGroup>
            <Label>Weight</Label>
            <Input type="number" name="weight"></Input>
          </FormGroup>
          <FormGroup>
            <Label>Commodity</Label>
            <Input type="text" name="commodity"></Input>
          </FormGroup>
          <FormGroup>
            <Label>Customer Rate</Label>
            <Input type="number" name="customerRate"></Input>
          </FormGroup>
          <FormGroup>
            <Label>Carrier Rate</Label>
            <Input type="number" name="carrierRate"></Input>
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
