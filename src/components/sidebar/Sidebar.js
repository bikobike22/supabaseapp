import React from 'react'
import { Container, Nav } from 'react-bootstrap'
import i18Next from '../../translations/i18Init'
import { useTranslation } from '../../translations/Translations'

const Sidebar = () => {
    const { getLng } = useTranslation()
    return (
        <Container className="">

            <Nav defaultActiveKey="/add" className="flex-column">
                <Nav.Link eventKey="/" href='/'>{i18Next.t("clients", {lng: getLng})}</Nav.Link>
                <Nav.Link eventKey="/add" href="/add">{i18Next.t("add", {lng: getLng})}</Nav.Link>
                <Nav.Link eventKey="/profile" href="/profile"></Nav.Link>
            </Nav>
        </Container>
    )
}

export default Sidebar