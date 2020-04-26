import React from 'react'
import { useFormContext, ErrorMessage } from 'react-hook-form'
import { Label } from 'reactstrap'
const NewUserPasswordInput = ({ label, name, type, placeholder, message }) => {
  const { register, errors } = useFormContext()
  return (
    <>
      <Label>
        <h5>{label}</h5>
      </Label>
      <input
        name={name}
        class="form-control"
        type={type}
        placeholder={placeholder}
        ref={register({ required: true, minLength: 7 })}
      ></input>
      <ErrorMessage errors={errors} name={name} message={message} />
    </>
  )
}

export default NewUserPasswordInput
