import React from 'react'
import Moment from 'react-moment'
const CarrierProfileData = ({ label, data }) => {
  return (
    <>
      {label === 'Setup Date' ? (
        <section>
          <h4>{label}</h4>
          <p>
            <Moment format="MM-DD-YYYY">{data}</Moment>
          </p>
        </section>
      ) : (
        <section>
          <h4>{label}</h4>
          <p>{data}</p>
        </section>
      )}
    </>
  )
}

export default CarrierProfileData
