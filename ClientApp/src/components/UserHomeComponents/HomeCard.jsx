import React, { useState, Tooltip } from 'react'
import { Link } from 'react-router-dom'
const HomeCard = ({ text, link }) => {
  const [tooltipOpen, setTooltipOpen] = useState(false)

  const toggle = () => setTooltipOpen(!tooltipOpen)
  return (
    <>
      <div className="card border-primary bg-secondary mb-3">
        <div className="card-body">
          <h4 className="card-text">
            <Link to={`/${link}`} href="#" id="TooltipExample">
              {text}
            </Link>
          </h4>
        </div>
      </div>
    </>
  )
}

export default HomeCard
