import React, { useState } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'

import { useForm } from 'react-hook-form'
import { now } from 'moment'

const FormText = () => {
  const { register, handleSubmit, errors } = useForm()
  const { date, setDate } = useState(new Date())
  const onSubmit = data => {
    console.log(data)
  }
  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <Label>Company</Label>
          <input name="company" ref={register}></input>
        </FormGroup>
        <FormGroup>
          <Label>Appointment</Label>
        </FormGroup>
        <FormGroup>
          <Label>Full Name</Label>
        </FormGroup>
        <FormGroup>
          <Label>Email</Label>
        </FormGroup>
        <FormGroup>
          <Label>password</Label>
        </FormGroup>
        <Button type="submit">submit</Button>
      </Form>
    </>
  )
}

export default FormText
