import React, { useState } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
const LandingPage = () => {
  const [emailLogin, setEmailLogin] = useState('')
  const [passwordLogin, setPasswordLogin] = useState('')
  const [shouldRedirect, setShouldRedirect] = useState(false)
  const logUserIntoApi = async () => {
    const resp = await axios.post('auth/login', {
      email: emailLogin,
      password: passwordLogin,
    })
    if (resp.status === 200) {
      localStorage.setItem('token', resp.data.token)
      setShouldRedirect(true)
    }
  }
  if (shouldRedirect) {
    return <Redirect to="/userHome" />
  }

  return (
    <>
      <main className="login">
        <div className="title-div">
          <h1>Truck Tracker</h1>
        </div>
        <Form>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              name="email"
              onChange={e => setEmailLogin(e.target.value)}
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
              name="password"
              onChange={e => setPasswordLogin(e.target.value)}
            ></Input>
          </FormGroup>

          <Button className="btn btn-success" onClick={logUserIntoApi}>
            Log In
          </Button>
        </Form>
        <Button className="btn btn-info" href="/register">
          Register
        </Button>
      </main>
    </>
  )
}
export default LandingPage
