import React from 'react'
import Moment from 'react-moment'
const LoadInfoTimeComponent = ({ text, date }) => {
  return (
    <>
      <section>
        <h4>{text}</h4>
        <p>
          <Moment format="MM-DD-YYYY HH:mm">{date}</Moment>
        </p>
      </section>
    </>
  )
}

export default LoadInfoTimeComponent
