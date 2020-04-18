import React from 'react'
import CustomNav from '../components/NavMenu/CustomNav'

const NotFound = () => {
  return (
    <div>
      <CustomNav />
      <h2>
        {Math.ceil(Math.random() * 100) % 2 === 0 ? (
          <span role="img" aria-label="emoji boy confused">
            🤷🏼‍♂️
          </span>
        ) : (
          <span role="img" aria-label="emoji girl confused">
            🤷‍♀️
          </span>
        )}
        Not sure how you got here. Do you want to{' '}
        <a href="/" onclick="window.history.go(-1); return false;">
          go back?
        </a>
      </h2>
    </div>
  )
}

export default NotFound
