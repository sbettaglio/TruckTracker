import React, { useState } from 'react'
import { Col, Row, Button, Form, FormGroup, Label } from 'reactstrap'
import { useForm, FormContext } from 'react-hook-form'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import NewCarrierStateSelect from '../NewCarrier/NewCarrierStateSelect'
import NewUserInput from './NewUserInput'
import NewCarrierEmailInput from '../NewCarrier/NewCarrierEmailInput'
import AlertComponent from '../AlertComponent'
import NewUserPasswordInput from './NewUserPasswordInput'

const UserRegistration = () => {
  const methods = useForm()
  const [shouldRedirect, setShouldRedirect] = useState(false)
  const [visible, setVisible] = useState({
    passwordAlert: false,
    usernameAlert: false,
    emailAlert: false,
  })
  const [loginError, setLoginError] = useState('')
  const onDismiss = () => setVisible(false)
  const sendUserRegistrationToApi = async data => {
    try {
      const resp = await axios.post('/auth/register', data)
      if (resp.status === 200) {
        localStorage.setItem('token', resp.data.token)
        setShouldRedirect(true)
      }
    } catch (error) {
      switch (error.response.data) {
        case 'Password must be at least five characters.':
          setVisible({
            passwordAlert: true,
          })
          setLoginError(error.response.data)
          break
        case 'User already exists with that email':
          setVisible({
            emailAlert: true,
          })
          setLoginError(error.response.data)
          break
        case 'User already exists with that username':
          setVisible({
            usernameAlert: true,
          })
          setLoginError(error.response.data)
          break
      }
    }
  }

  if (shouldRedirect) {
    return <Redirect to="/userHome" />
  }
  return (
    <>
      <FormContext {...methods}>
        <Form
          onSubmit={methods.handleSubmit(sendUserRegistrationToApi)}
          className="registration-form"
        >
          <Row>
            <Col sm={12} md={6}>
              <FormGroup>
                <NewUserInput
                  label="Company"
                  name="company"
                  type="text"
                  placeholder="Input Company Name"
                  message="This field is required to register"
                />
              </FormGroup>
            </Col>
            <Col sm={12} md={6}>
              <FormGroup>
                <NewUserInput
                  label="Position"
                  name="position"
                  type="text"
                  placeholder="Input Position"
                  message="This field is required to register"
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col sm={12} md={6}>
              <FormGroup>
                <NewUserInput
                  label="Full Name"
                  name="fullName"
                  type="text"
                  placeholder="Input Full Name"
                  message="This field is required to register"
                />
              </FormGroup>
            </Col>
            <Col sm={12} md={6}>
              <FormGroup>
                {visible.usernameAlert ? (
                  <AlertComponent
                    isOpen={visible}
                    toggle={onDismiss}
                    fade={true}
                    msg={loginError}
                    color="danger"
                  />
                ) : (
                  <NewUserInput
                    label="Username"
                    name="username"
                    type="text"
                    placeholder="Input Username"
                    message="This field is required to register"
                  />
                )}
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col sm={12} md={6}>
              <FormGroup>
                {visible.emailAlert ? (
                  <AlertComponent
                    isOpen={visible}
                    toggle={onDismiss}
                    fade={true}
                    msg={loginError}
                    color="danger"
                  />
                ) : (
                  <NewCarrierEmailInput
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="Input Email"
                    message="Please input a valid email address"
                  />
                )}
              </FormGroup>
            </Col>
            <Col sm={12} md={6}>
              <FormGroup>
                {visible.passwordAlert ? (
                  <AlertComponent
                    isOpen={visible}
                    toggle={onDismiss}
                    fade={true}
                    msg={loginError}
                    color="danger"
                  />
                ) : (
                  <NewUserPasswordInput
                    label="Password"
                    name="password"
                    type="password"
                    placeholder="Input Password"
                    message="Password must be at least 7 characters"
                  />
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
      </FormContext>
    </>
  )
}

export default UserRegistration
