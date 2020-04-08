import React from 'react'
import UserRegistration from '../components/SignUpForms/UserRegistration'

const Register = () => {
  return (
    <>
      <div className="title-div">
        <h1>Registration</h1>
        <h3>Please enter info below</h3>
      </div>
      <main className="registration">
        <UserRegistration />
      </main>
    </>
  )
}

export default Register
