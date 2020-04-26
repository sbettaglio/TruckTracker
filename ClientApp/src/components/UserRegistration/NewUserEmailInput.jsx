import React from 'react'
import { useFormContext, ErrorMessage } from 'react-hook-form'
import { Label } from 'reactstrap'
const NewUserEmailInput = ({ label, name, type, placeholder, message }) => {
  return (
    <>
      <Label className="registration-label">
        <h5>{label}</h5>
      </Label>
      <input
        className="form-control"
        type={type}
        name={name}
        placeholder={placeholder}
        ref={register({
          required: true,
          pattern: /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/,
        })}
      />
      <ErrorMessage errors={errors} name={name} message={message} />
    </>
  )
}

export default NewUserEmailInput
