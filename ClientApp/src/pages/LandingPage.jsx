import React, { useState } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import LoginForm from '../components/LandingPage/LoginForm'
import RegisterRedirect from '../components/LandingPage/RegisterRedirect'
const LandingPage = () => {
  const [emailLogin, setEmailLogin] = useState('')
  const [passwordLogin, setPasswordLogin] = useState('')
  const [shouldRedirect, setShouldRedirect] = useState(false)
  const logUserIntoApi = async () => {
    const resp = await axios.post('auth/login', {
      email: emailLogin,
      password: passwordLogin,
    })
    if (resp.status === 200) {
      localStorage.setItem('token', resp.data.token)
      setShouldRedirect(true)
    }
  }
  if (shouldRedirect) {
    return <Redirect to="/userHome" />
  }

  return (
    <>
      <main className="login">
        <div className="title-div">
          <h1>Truck Tracker</h1>
        </div>
        <Form>
          <RegisterRedirect />
          <LoginForm
            email={e => setEmailLogin(e.target.value)}
            password={e => setPasswordLogin(e.target.value)}
            login={logUserIntoApi}
          />
        </Form>
      </main>
    </>
  )
}
export default LandingPage
