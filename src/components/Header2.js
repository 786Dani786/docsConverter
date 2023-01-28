import React, { useState, useEffect } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem, 
  NavbarText,
} from 'reactstrap';
import { Link } from 'react-router-dom';

function Example(args) {
  const [isOpen, setIsOpen] = useState(false); 
  const toggle = () => setIsOpen(!isOpen);

   
  return (
    <div> 
      <Navbar  className="navbar navbar-expand-lg navbar-light bg-light main-menu">
        <NavbarBrand href="/">reactstrap</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ms-auto " navbar >
            <NavItem>
            <Link to="/" onClick={(e) => setIsOpen(!isOpen)}>Home</Link>
            </NavItem>
            <NavItem>
            <Link to="/converter">Compress PDF</Link>
            </NavItem> 
            <NavItem>
            <Link to="/about">About</Link>
            </NavItem>
            <NavItem>
            <Link to="/contact">Contact</Link>
            </NavItem>
          </Nav>
          <NavbarText>Simple Text</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;