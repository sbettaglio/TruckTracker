import React from 'react'
import { Button, FormGroup, Label, Input } from 'reactstrap'

const LoginForm = ({ email, password, login }) => {
  return (
    <>
      <FormGroup>
        <Label for="email" className="text-success">
          Email
        </Label>
        <Input
          type="email"
          className="form-control"
          id="email"
          aria-describedby="emailHelp"
          placeholder="Enter email"
          name="email"
          onChange={email}
        ></Input>
      </FormGroup>
      <FormGroup>
        <Label for="password" className="text-success">
          Password
        </Label>
        <Input
          type="password"
          className="form-control"
          id="password"
          placeholder="Password"
          name="password"
          onChange={password}
        ></Input>
      </FormGroup>
      <Button className="btn btn-success" onClick={login}>
        Log In
      </Button>
    </>
  )
}

export default LoginForm
