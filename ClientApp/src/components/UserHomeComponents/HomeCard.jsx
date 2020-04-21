import React from 'react'
import { Link } from 'react-router-dom'
const HomeCard = ({ text, link }) => {
  return (
    <>
      <div className="card border-primary bg-secondary mb-3">
        <div className="card-body">
          <h4 className="card-text">
            <Link to={{ pathname: `/${link}` }}>{text}</Link>
          </h4>
        </div>
      </div>
    </>
  )
}

export default HomeCard
