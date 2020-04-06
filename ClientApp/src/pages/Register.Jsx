import React, { useState } from 'react'
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap'

const Register = () => {
  const [user, setUser] = useState({})
  const trackInput = e => {
    const fieldToUpdate = e.target.name
    console.log(fieldToUpdate)
    const value = e.target.value
    console.log(value)
    setUser(prevUser => {
      prevUser[fieldToUpdate] = value
      return prevUser
    })
  }
  return (
    <>
      <div>
        <h1>Registration</h1>
        <h3>Please enter info below</h3>
      </div>
      <main className="registration">
        <Form>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="exampleCompany">Company</Label>
                <Input
                  type="text"
                  name="company"
                  id="exampleCompany"
                  placeholder="Company name goes here"
                  onChange={trackInput}
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="exampleFirstName">First Name</Label>
                <Input
                  type="text"
                  name="firstName"
                  id="exampleFirstName"
                  placeholder="John"
                  onChange={trackInput}
                />
              </FormGroup>
            </Col>
          </Row>
          <FormGroup>
            <Label for="exampleLastName">Last Name</Label>
            <Input
              type="text"
              name="lastName"
              id="exampleLastName"
              placeholder="Doe"
              onChange={trackInput}
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleUserName">Username</Label>
            <Input
              type="text"
              name="userName"
              id="exampleUserName"
              placeholder="your username goes here"
              onChange={trackInput}
            />
          </FormGroup>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="examplePosition">Position</Label>
                <Input
                  type="text"
                  name="position"
                  id="examplePosition"
                  placeholder="Job title"
                  onChange={trackInput}
                />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input
                  type="password"
                  name="password"
                  id="examplePassword"
                  onChange={trackInput}
                />
              </FormGroup>
            </Col>
            <Col md={2}>
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
          </Row>
          <FormGroup check></FormGroup>
          <Button>Register</Button>
        </Form>
      </main>
    </>
  )
}

export default Register
