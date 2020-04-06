import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap'
const NewCarrier = () => {
  const [carrier, setCarrier] = useState({})
  const trackInput = e => {
    const fieldToUpdate = e.target.name
    console.log(fieldToUpdate)
    const value = e.target.value
    console.log(value)
    setCarrier(prevCarrier => {
      prevCarrier[fieldToUpdate] = value
      return prevCarrier
    })
  }
  return (
    <>
      <div>
        <h1>Add New Carrier</h1>
      </div>
      <main className="registration">
        <Form>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="carrierName">Carrier Name</Label>
                <Input
                  type="text"
                  name="carrierName"
                  id="carrierName"
                  placeholder="Carrier name goes here"
                  onChange={trackInput}
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="exampleMC">MC Number</Label>
                <Input
                  type="number"
                  name="mCNumber"
                  id="exampleMC"
                  placeholder="123456"
                  onChange={trackInput}
                />
              </FormGroup>
              <FormGroup>
                <Label for="examplePrimaryContact">Primary Contact</Label>
                <Input
                  type="text"
                  name="primaryContact"
                  id="examplePrimaryContact"
                  placeholder="John Doe"
                  onChange={trackInput}
                />
              </FormGroup>
              <FormGroup>
                <Label for="examplePhone">Phone</Label>
                <Input
                  type="tel"
                  name="phone"
                  id="examplePhone"
                  placeholder="555-867-5309"
                  onChange={trackInput}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input
                  type="email"
                  name="email"
                  id="exampleEmail"
                  onChange={trackInput}
                />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="exampleState">Home State</Label>
                <Input type="select" name="state" id="exampleState ">
                  <option value="AL">Alabama</option>
                  <option value="AK">Alaska</option>
                  <option value="AZ">Arizona</option>
                  <option value="AR">Arkansas</option>
                  <option value="CA">California</option>
                  <option value="CO">Colorado</option>
                  <option value="CT">Connecticut</option>
                  <option value="DE">Delaware</option>
                  <option value="DC">District Of Columbia</option>
                  <option value="FL">Florida</option>
                  <option value="GA">Georgia</option>
                  <option value="HI">Hawaii</option>
                  <option value="ID">Idaho</option>
                  <option value="IL">Illinois</option>
                  <option value="IN">Indiana</option>
                  <option value="IA">Iowa</option>
                  <option value="KS">Kansas</option>
                  <option value="KY">Kentucky</option>
                  <option value="LA">Louisiana</option>
                  <option value="ME">Maine</option>
                  <option value="MD">Maryland</option>
                  <option value="MA">Massachusetts</option>
                  <option value="MI">Michigan</option>
                  <option value="MN">Minnesota</option>
                  <option value="MS">Mississippi</option>
                  <option value="MO">Missouri</option>
                  <option value="MT">Montana</option>
                  <option value="NE">Nebraska</option>
                  <option value="NV">Nevada</option>
                  <option value="NH">New Hampshire</option>
                  <option value="NJ">New Jersey</option>
                  <option value="NM">New Mexico</option>
                  <option value="NY">New York</option>
                  <option value="NC">North Carolina</option>
                  <option value="ND">North Dakota</option>
                  <option value="OH">Ohio</option>
                  <option value="OK">Oklahoma</option>
                  <option value="OR">Oregon</option>
                  <option value="PA">Pennsylvania</option>
                  <option value="RI">Rhode Island</option>
                  <option value="SC">South Carolina</option>
                  <option value="SD">South Dakota</option>
                  <option value="TN">Tennessee</option>
                  <option value="TX">Texas</option>
                  <option value="UT">Utah</option>
                  <option value="VT">Vermont</option>
                  <option value="VA">Virginia</option>
                  <option value="WA">Washington</option>
                  <option value="WV">West Virginia</option>
                  <option value="WI">Wisconsin</option>
                  <option value="WY">Wyoming</option>
                </Input>
              </FormGroup>
            </Col>
          </Row>
          <FormGroup check>
            <Input
              type="checkbox"
              name="validInsurance"
              id="exampleInsurance"
            />
            <Label for="exampleInsurance" check>
              Valid Insurance
            </Label>
          </FormGroup>
          <Button>
            <Link>Save Carrier</Link>
          </Button>
        </Form>
      </main>
    </>
  )
}

export default NewCarrier
