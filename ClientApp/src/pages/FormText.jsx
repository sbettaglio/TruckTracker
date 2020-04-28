import React, { useState } from 'react'
import { Button } from 'reactstrap'
import axios from 'axios'

const FormText = () => {
  const [distance, setDistance] = useState(0)
  const [attribution, setAttribution] = useState('')
  const getDistance = async () => {
    console.log('getting distance', distance)
    const resp = await axios.get(
      `https://www.mapquestapi.com/directions/v2/route?key=B4L7zPogojJFdsgmWAELJaS2Wtlehzmx&from=Miami FL&to=tampa`
    )
    setAttribution(resp.data.info.copyright.text)
    setDistance(resp.data.route.distance)
  }

  return (
    <>
      <div>
        <form>
          <label>{distance}</label>
          <Button className="btn-danger" onClick={getDistance}>
            get distance
          </Button>
          <label>{attribution}</label>
        </form>
      </div>
    </>
  )
}

export default FormText
