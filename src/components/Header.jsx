import React from 'react'
import { Nav, Navbar, Container,NavItem } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Header = ()=> {
  return (
    <>



      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/">Warsha</Navbar.Brand>
          <Nav className="me-auto">

            <Nav.Link href="/">Home</Nav.Link>
            
            <Nav.Link href="/add">Add</Nav.Link>
            
            <Nav.Link href="/profile"></Nav.Link> 

            <Nav.Link href="/login">Login</Nav.Link> 
            
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Header