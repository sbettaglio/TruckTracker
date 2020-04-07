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
      <div className="title-div">
        <h1>Registration</h1>
        <h3>Please enter info below</h3>
      </div>
      <main className="registration">
        <Form>
          <Row>
            <Col sm={1}>
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
            <Col sm={1}>
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
          </Row>
          <Row>
            <Col sm={1}>
              <FormGroup>
                <Label for="exampleFullName">Full Name</Label>
                <Input
                  type="text"
                  name="fullName"
                  id="exampleFullName"
                  placeholder="John Doe"
                  onChange={trackInput}
                />
              </FormGroup>
            </Col>
            <Col sm={1}>
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
            </Col>
          </Row>
          <Row>
            <Col sm={1}>
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
            <Col sm={1}>
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
          <Row className="registration-button">
            <Button className="btn btn-success">Register</Button>
          </Row>
        </Form>
      </main>
    </>
  )
}

export default Register
