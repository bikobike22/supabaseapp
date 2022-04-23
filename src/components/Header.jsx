import React from 'react'
import { Nav, Navbar, Container,NavItem, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import i18Next from '../translations/i18Init'
import { useTranslation } from '../translations/Translations'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEarth, faCake } from '@fortawesome/free-solid-svg-icons'




const Header = () => {
  
  const { changeLng, getLng } = useTranslation()

  const changeLang = (e) => {
    e.preventDefault()
    console.log("change")
    changeLng()
  }
  return (
    <>



      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/">{i18Next.t("warsha", {lng: getLng})}</Navbar.Brand>
          <Nav className="me-auto">

            <Nav.Link href="/">{i18Next.t("home", {lng: getLng})}</Nav.Link>
            
            <Nav.Link href="/add">{i18Next.t("add", {lng: getLng})}</Nav.Link>
            
            <Nav.Link href="/profile"></Nav.Link> 

            <Nav.Link href="/login">{i18Next.t("login", { lng: getLng })}</Nav.Link> 
            
             <Nav.Link >{<FontAwesomeIcon icon={faEarth} onClick={changeLang}/>}</Nav.Link> 

         

            
            
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Header