import React, { useState } from 'react'
import { Col, Row, Button, Form, FormGroup, Label } from 'reactstrap'
import { useForm } from 'react-hook-form'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

const UserRegistration = () => {
  const { register, handleSubmit, errors } = useForm()
  const [shouldRedirect, setShouldRedirect] = useState(false)

  const sendUserRegistrationToApi = async data => {
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
              <Label for="exampleCompany">
                <h6>Company</h6>
              </Label>
              <input
                name="company"
                class="form-control"
                ref={register({ required: true })}
              ></input>
              {errors.company && (
                <h6 className="lead">This field is required to register</h6>
              )}
            </FormGroup>
          </Col>
          <Col sm={1} md={6}>
            <FormGroup>
              <Label for="examplePosition">
                <h6>Position</h6>
              </Label>
              <input
                name="position"
                class="form-control"
                ref={register({ required: true })}
              ></input>
              {errors.position && (
                <h6 className="lead">This field is required to register</h6>
              )}
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col sm={1} md={6}>
            <FormGroup>
              <Label>
                <h6>Full Name</h6>
              </Label>
              <input
                name="fullName"
                class="form-control"
                ref={register({ required: true })}
              ></input>
              {errors.fullName && (
                <h6 className="lead">This field is required to register</h6>
              )}
            </FormGroup>
          </Col>
          <Col sm={1} md={6}>
            <FormGroup>
              <Label for="exampleUserName">
                <h6>Username</h6>
              </Label>
              <input
                name="userName"
                class="form-control"
                ref={register({ required: true })}
              ></input>
              {errors.userName && (
                <h6 className="lead">This field is required to register</h6>
              )}
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col sm={1} md={6}>
            <FormGroup>
              <Label>
                <h6>Email</h6>
              </Label>
              <input
                name="email"
                class="form-control"
                ref={register({
                  required: true,
                  pattern: /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/,
                })}
              ></input>
              {errors.email && (
                <h6 className="lead">This field is required to register</h6>
              )}
              {errors.email && errors.email.type == 'pattern' && (
                <h6 className="lead">Please submit a valid email</h6>
              )}
            </FormGroup>
          </Col>
          <Col sm={1} md={6}>
            <FormGroup>
              <Label>
                <h6>Password</h6>
              </Label>
              <input
                name="password"
                type="password"
                class="form-control"
                ref={register({ required: true, minLength: 7 })}
              ></input>
              {errors.password && (
                <h6 className="lead">This field is required to register</h6>
              )}
              {errors.password && errors.password.type === 'minLength' && (
                <h6 className="lead">Password must be at least 7 characters</h6>
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
