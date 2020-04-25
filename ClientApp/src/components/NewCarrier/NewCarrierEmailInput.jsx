import React from 'react'
import { useFormContext, ErrorMessage } from 'react-hook-form'
import { Label } from 'reactstrap'
const NewCarrierEmailInput = ({ label, name, type, placeholder, message }) => {
  const { register, errors } = useFormContext()
  return (
    <>
      <Label>{label}</Label>
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

export default NewCarrierEmailInput
