import React from 'react'
import { FormGroup, Button, Label } from 'reactstrap'
const RegisterRedirect = () => {
  return (
    <>
      <FormGroup>
        <Label for="register" className="lead">
          <h6>New User?</h6>
        </Label>
        <Button id="register" className="btn btn-info" href="/register">
          Register
        </Button>
      </FormGroup>
    </>
  )
}

export default RegisterRedirect
