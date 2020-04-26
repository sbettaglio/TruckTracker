import React from 'react'
import { Alert } from 'reactstrap'
const AlertComponent = ({ isOpen, toggle, fade, msg, color }) => {
  return (
    <>
      <Alert color={color} isOpen={isOpen} toggle={toggle} fade={fade}>
        {msg}
      </Alert>
    </>
  )
}

export default AlertComponent
