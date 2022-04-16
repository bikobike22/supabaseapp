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
            {/* <NavItem>
                          <Link to="/" >Home</Link>
            </NavItem>

             <NavItem>
                          <Link to="/clients" >Clients</Link>
            </NavItem>

             <NavItem>
                          <Link to="/add" >Add</Link>
            </NavItem>

             <NavItem>
                           <Link to="/profile" >Profile</Link>
            </NavItem> */}


            

            

           


            <Nav.Link href="/">Home</Nav.Link>
            
            <Nav.Link href="/all">Clients</Nav.Link>
            
            <Nav.Link href="/add">Add</Nav.Link>
            
            <Nav.Link href="/profile">Profile</Nav.Link> 
            
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Header