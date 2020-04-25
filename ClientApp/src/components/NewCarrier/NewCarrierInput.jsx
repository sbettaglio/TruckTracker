import React from 'react'
import { useFormContext, ErrorMessage } from 'react-hook-form'
import { Label } from 'reactstrap'
const NewCarrierInput = ({ label, name, type, placeholder, message }) => {
  const { register, errors } = useFormContext()
  return (
    <>
      <Label for="carrierName">{label}</Label>
      <input
        className="form-control"
        type={type}
        name={name}
        ref={register({ required: true })}
        placeholder={placeholder}
      />
      <ErrorMessage errors={errors} name={name} message={message} />
    </>
  )
}

export default NewCarrierInput
