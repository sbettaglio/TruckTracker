import React, { useState } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import axios from 'axios'
const LandingPage = () => {
  const [emailLogin, setEmailLogin] = useState('')
  const [passwordLogin, setPasswordLogin] = useState('')
  const [token, setToken] = useState('')

  const logUserIntoApi = async () => {
    const resp = await axios.post('auth/login', {
      email: emailLogin,
      password: passwordLogin,
    })
    console.log(resp)
    setToken(resp.data.token)
  }
  const getSecretInformation = async () => {
    console.log(token)
    const resp = await axios.get('/api/secret', {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    })
    console.log(resp.data)
  }
  return (
    <>
      <main className="login">
        <div className="title-div">
          <h1>Truck Tracker</h1>
        </div>
        <Button onClick={getSecretInformation}>Get Secret!</Button>
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
