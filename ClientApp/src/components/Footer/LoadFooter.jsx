import React from 'react'
import { Link } from 'react-router-dom'
import GitHubLogo from './GitHubLogo.png'
import LinkedIn from './LinkedIn.png'
import Google from './google_logo.png'
const LoadFooter = () => {
  return (
    <footer className="bg-primary load-footer" fixed="bottom">
      <nav className="navbar navbar-dark bg-primary nav-footer">
        <ul>
          <section>
            <li className="navbar-brand">Created by Stefan Bettaglio</li>
            <li className="navbar-brand">
              <a href="https://github.com/sbettaglio">
                <img alt="GitHub logo" src={GitHubLogo} heigh="25px" />
              </a>
            </li>
            <li className="navbar-brand">
              <a href="https://www.linkedin.com/in/stefanbettaglio/">
                <img alt="LinkedIn logo" src={LinkedIn} height="30px" />
              </a>
            </li>
          </section>
          <li className="navbar-brand">
            {' '}
            <img alt="Google logo" src={Google} height="20px" />
          </li>
        </ul>
      </nav>
    </footer>
  )
}

export default LoadFooter
