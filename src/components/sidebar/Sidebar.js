import React from 'react'
import { Container, Nav } from 'react-bootstrap'

const Sidebar = () => {
    return (
        <Container className="">

            <Nav defaultActiveKey="/add" className="flex-column">
                <Nav.Link eventKey="/" href='/'>Clients</Nav.Link>
                <Nav.Link eventKey="/add" href="/add">Add</Nav.Link>
                <Nav.Link eventKey="/profile" href="/profile"></Nav.Link>
            </Nav>
        </Container>
    )
}

export default Sidebar