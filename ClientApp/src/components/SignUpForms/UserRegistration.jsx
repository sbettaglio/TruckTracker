import React, { useState } from 'react'
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap'
import { useForm } from 'react-hook-form'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

const UserRegistration = () => {
  // const [user, setUser] = useState({})
  const { register, handleSubmit, errors } = useForm()
  const [shouldRedirect, setShouldRedirect] = useState(false)
  // const onSubmit = data => {
  //   console.log(data)
  // }

  // const trackInput = e => {
  //   const fieldToUpdate = e.target.name
  //   const value = e.target.value
  //   setUser(prevUser => {
  //     return { ...prevUser, [fieldToUpdate]: value }
  //   })
  // }
  const sendUserRegistrationToApi = async data => {
    console.log('sending', data)
    try {
      const resp = await axios.post('/auth/register', data)
      if (resp.status === 200) {
        localStorage.setItem('token', resp.data.token)
        setShouldRedirect(true)
      }
    } catch (error) {
      alert(error.response.data)
    }
  }

  if (shouldRedirect) {
    return <Redirect to="/userHome" />
  }
  return (
    <>
      <Form onSubmit={handleSubmit(sendUserRegistrationToApi)}>
        <Row>
          <Col sm={1} md={6}>
            <FormGroup>
              <Label for="exampleCompany">Company</Label>
              <input
                name="company"
                class="form-control"
                ref={register({ required: true })}
              ></input>
              {errors.company && (
                <p className="text-danger">
                  This field is required to register
                </p>
              )}
            </FormGroup>
          </Col>
          <Col sm={1} md={6}>
            <FormGroup>
              <Label for="examplePosition">Position</Label>
              <input
                name="position"
                class="form-control"
                ref={register({ required: true })}
              ></input>
              {errors.position && (
                <p className="text-danger">
                  This field is required to register
                </p>
              )}
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col sm={1} md={6}>
            <FormGroup>
              <Label>Full Name</Label>
              <input
                name="fullName"
                class="form-control"
                ref={register({ required: true })}
              ></input>
              {errors.fullName && (
                <p className="text-danger">
                  This field is required to register
                </p>
              )}
            </FormGroup>
          </Col>
          <Col sm={1} md={6}>
            <FormGroup>
              <Label for="exampleUserName">Username</Label>
              <input
                name="userName"
                class="form-control"
                ref={register({ required: true })}
              ></input>
              {errors.userName && (
                <p className="text-danger">
                  This field is required to register
                </p>
              )}
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col sm={1} md={6}>
            <FormGroup>
              <Label>Email</Label>
              <input
                name="email"
                class="form-control"
                ref={register({
                  required: true,
                  pattern: /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/,
                })}
              ></input>
              {errors.email && (
                <p className="text-danger">
                  This field is required to register
                </p>
              )}
              {errors.email && errors.email.type == 'pattern' && (
                <p className="text-danger">Please submit a valid email</p>
              )}
            </FormGroup>
          </Col>
          <Col sm={1} md={6}>
            <FormGroup>
              <Label>Password</Label>
              <input
                name="password"
                type="password"
                class="form-control"
                ref={register({ required: true, minLength: 7 })}
              ></input>
              {errors.password && (
                <p className="text-danger">
                  This field is required to register
                </p>
              )}
              {errors.password && errors.password.type === 'minLength' && (
                <p className="text-danger">
                  Password must be at least 7 characters
                </p>
              )}
            </FormGroup>
          </Col>
        </Row>
        <Row className="registration-button">
          <Button type="submit" className="btn btn-success">
            Register
          </Button>
        </Row>
      </Form>
    </>
  )
}

export default UserRegistration
