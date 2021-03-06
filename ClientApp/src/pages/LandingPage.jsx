import React, { useState } from 'react'
import { Form } from 'reactstrap'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import LoginForm from '../components/LandingPage/LoginForm'
import RegisterRedirect from '../components/LandingPage/RegisterRedirect'
import './styles/landing.scss'
import AlertComponent from '../components/AlertComponent'
const LandingPage = () => {
  const [emailLogin, setEmailLogin] = useState('')
  const [passwordLogin, setPasswordLogin] = useState('')
  const [shouldRedirect, setShouldRedirect] = useState(false)
  const [visible, setVisible] = useState(false)
  const [loginError, setLoginError] = useState('')
  const onDismiss = () => setVisible(false)

  const logUserIntoApi = async () => {
    try {
      const resp = await axios.post('auth/login', {
        email: emailLogin,
        password: passwordLogin,
      })
      if (resp.status === 200) {
        localStorage.setItem('token', resp.data.token)
        setShouldRedirect(true)
      }
    } catch (error) {
      setVisible(true)
      setLoginError(error.response.data)
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
          {visible ? (
            <AlertComponent
              msg={loginError}
              isOpen={visible}
              toggle={onDismiss}
              fade={true}
              color="danger"
            />
          ) : (
            <></>
          )}
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
