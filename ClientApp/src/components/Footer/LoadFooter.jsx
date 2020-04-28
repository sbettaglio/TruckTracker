import React from 'react'
import { Link } from 'react-router-dom'
import GitHubLogo from './GitHubLogo.png'
import LinkedIn from './LinkedIn.png'
const LoadFooter = () => {
  return (
    <footer className="bg-primary load-footer" fixed="bottom">
      <nav className="navbar navbar-dark bg-primary nav-footer">
        <ul>
          <section>
            <li className="navbar-brand">Created by Stefan Bettaglio</li>
            <li className="navbar-brand">
              <a href="https://github.com/sbettaglio">
                <img src={GitHubLogo} heigh="25px" />
              </a>
            </li>
            <li className="navbar-brand">
              <a href="https://www.linkedin.com/in/stefanbettaglio/">
                <img src={LinkedIn} height="30px" />
              </a>
            </li>
          </section>
          <li className="navbar-brand">
            Powered by{' '}
            <Link
              className="navbar-brand"
              href="http://hello.mapquest.com/terms-of-use/"
            >
              © MapQuest.
            </Link>
          </li>
        </ul>
      </nav>
    </footer>
  )
}

export default LoadFooter
