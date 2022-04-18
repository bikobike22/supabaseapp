import React, {} from 'react'
import { Container, Row,Col, } from 'react-bootstrap'
import Sidebar from '../sidebar/Sidebar'

const Page = (props) => {
    return (
      
        <Container className="">
            <br/>
          <Row>
              <Col sm={1}>
                  <Sidebar/>
              </Col>
              <Col  sm={10}>
                  { props.children }
              </Col>
          </Row>
          
    </Container>
  )
}

export default Page