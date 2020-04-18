import React from 'react'

const LoadInfoDataComponent = ({ text, data }) => {
  return (
    <>
      {text === 'Carrier Rate' || text === 'Customer Rate' ? (
        <section>
          <h4>{text}</h4>
          <p>${data}.00</p>
        </section>
      ) : (
        <section>
          <h4>{text}</h4>
          <p>{data}</p>
        </section>
      )}
    </>
  )
}

export default LoadInfoDataComponent
