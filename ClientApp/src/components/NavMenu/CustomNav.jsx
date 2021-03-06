import React, { useState } from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap'

const CustomNav = props => {
  const [isOpen, setIsOpen] = useState(false)
  const clearToken = () => {
    localStorage.removeItem('token')
  }

  const toggle = () => setIsOpen(!isOpen)
  return (
    <header className="bg-primary">
      <Navbar color="primary" dark expand="md" fixed="top">
        <NavbarBrand href="/userHome">Home</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Menu
              </DropdownToggle>
              <DropdownMenu>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    Loads
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem>
                      <NavItem>
                        <NavLink href="/picks">Today's Picks</NavLink>
                      </NavItem>
                    </DropdownItem>
                    <DropdownItem>
                      <NavItem>
                        <NavLink href="/drops">Today's Drops</NavLink>
                      </NavItem>
                    </DropdownItem>
                    <DropdownItem>
                      <NavItem>
                        <NavLink href="/late">Late Trucks</NavLink>
                      </NavItem>
                    </DropdownItem>
                    <DropdownItem>
                      <NavItem>
                        <NavLink href="/available">Available Loads</NavLink>
                      </NavItem>
                    </DropdownItem>
                    <DropdownItem>
                      <NavItem>
                        <NavLink href="/create">Create New Load</NavLink>
                      </NavItem>
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Close</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <DropdownItem>
                  <NavItem>
                    <NavLink href="/search">Search</NavLink>
                  </NavItem>
                </DropdownItem>
                <DropdownItem>
                  <NavItem>
                    <NavLink href="/newCarrier">New Carrier</NavLink>
                  </NavItem>
                </DropdownItem>
                <DropdownItem>
                  <NavItem>
                    <NavLink href="/" onClick={clearToken}>
                      Log Out
                    </NavLink>
                  </NavItem>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Close</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </header>
  )
}

export default CustomNav
