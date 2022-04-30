import React from 'react'
import { Card, Container, Form, Button, Row, Col, } from 'react-bootstrap'
import { useTranslation } from '../translations/Translations'

const LoginScreen = () => {

  const { translate} = useTranslation()
  return (
    <div>
      
      <Container className="">
        <Row className="mt-5 p-5">
          <Col md={{ span: 4, offset: 4 }} className="border">

            <p class="login-title">{translate("login")}</p>
           
      <Form className="pb-4" >

        <Form.Group sm className="mb-4" as={Col} controlId="formBasicEmail">
          <Form.Label>{translate("email")}</Form.Label>
          <Form.Control type="email" placeholder={translate("enter-email")} />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-4" as={Col} controlId="formBasicPassword">
          <Form.Label>{translate("password")}</Form.Label>
          <Form.Control type="password" placeholder={translate("enter-password")}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label={translate("check-me-out")} />
        </Form.Group>
        <Button variant="primary" type="submit">
          {translate("login")}
        </Button>
      </Form>
          </Col>
        

      </Row>

</Container>








    </div>
  )
}

export default LoginScreen