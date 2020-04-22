import React from 'react'
import { FormGroup, Button, Label } from 'reactstrap'
const RegisterRedirect = () => {
  return (
    <>
      <FormGroup>
        <Label for="register">New User?</Label>
        <Button id="register" className="btn btn-info" href="/register">
          Register
        </Button>
      </FormGroup>
    </>
  )
}

export default RegisterRedirect
