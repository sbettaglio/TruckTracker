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
  NavbarText,
} from 'reactstrap'

const CustomNav = props => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)
  return (
    <header className="bg-primary">
      <Navbar color="primary" dark expand="md">
        <NavbarBrand href="/">Truck Tracker</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Loads
              </DropdownToggle>
              <DropdownMenu right>
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
            <NavItem>
              <NavLink href="/search">Search</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/newCarrier">New Carrier</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">Log Out</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </header>
  )
}

export default CustomNav
