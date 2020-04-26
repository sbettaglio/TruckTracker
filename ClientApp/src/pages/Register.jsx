import React from 'react'
import UserRegistration from '../components/UserRegistration/UserRegistration'
import './styles/registration.scss'
const Register = () => {
  return (
    <>
      <div className="title-div-registration">
        <h1>Registration</h1>
      </div>
      <main className="registration">
        <UserRegistration />
      </main>
    </>
  )
}

export default Register
