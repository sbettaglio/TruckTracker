import React, { useState } from 'react'
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap'
import axios from 'axios'

const UserRegistration = () => {
  const [user, setUser] = useState({})
  const trackInput = e => {
    const fieldToUpdate = e.target.name
    const value = e.target.value
    setUser(prevUser => {
      return { ...prevUser, [fieldToUpdate]: value }
    })
  }
  const sendUserRegistrationToApi = async () => {
    console.log(user.password.length)
    if (user.password.length < 5) {
      return alert('Password must be at least five characters.')
    } else {
      const resp = await axios
        .post('/auth/register', user)
        .catch(function(error) {
          if (error.response) {
            console.log(error.response.data)
            console.log(error.response.status)
            console.log(error.response.headers)
          }
          console.log(error.config)
          alert(error.response.data)
        })
    }
  }
  return (
    <>
      <Form>
        <Row>
          <Col sm={1} md={6}>
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
          <Col sm={1} md={6}>
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
          <Col sm={1} md={6}>
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
          <Col sm={1} md={6}>
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
          <Col sm={1} md={6}>
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
          <Col sm={1} md={6}>
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
        </Row>
        <Row className="registration-button">
          <Button
            className="btn btn-success"
            onClick={sendUserRegistrationToApi}
          >
            Register
          </Button>
        </Row>
      </Form>
    </>
  )
}

export default UserRegistration
