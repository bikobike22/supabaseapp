import React, { useState, useEffect, } from 'react'
import { Container, Row, Col, Button, Modal, } from 'react-bootstrap'
import { Navigate, NavLink,Link, } from 'react-router-dom'
import * as service from "../../service/service"

const AllClients = () => {

  const [customers, setCustomers] = useState([])
  const [all, setAll] = useState([])


  const fetchCustomers = async () => {
    const res = service.fetchPosts();
    res.then(th => {
      console.log('th: ', th);
      setCustomers(th);
      console.log('customers: ', customers)
    })
  }

  const fetchCustO = () => {
    const res = service.fetchAllCustomesWithOrders()
    res.then(th => {
      console.log('th: ', th);
      setAll(th)
      console.log('customers relation: ', th)
    
    })
  }

  const fetchCustomersWithPrefs = () => {
    const res = service.fetchAllCustomersWithPreferences()
    res.then(th => {
      console.log('th: ', th);
      setAll(th)
      console.log('customers prefs: ', th)
    
    })
  }

  


  useEffect(() => {

    fetchCustomers()
   //fetchCustO()
    fetchCustomersWithPrefs()
  })

  const viewCustomer = () => {
    return  <NavLink to="profile"  />
    
  }



  return (
    <>
      <p>All Clients</p>



       {/* <Button variant="primary" size="sm" >
        +
      </Button> */}
      



      <Container className="border mt-4 ">
        <Row>


        </Row>
        <Row >
          <Col sm>Name</Col>
          <Col sm>Phone</Col>
          <Col sm>Size</Col>
          <Col sm>Hit</Col>
          <Col sm></Col>
          <Col sm></Col>
        </Row>



        {
          all.map((cust, index) => (
            <Row className="mt-1 p-1 " key={cust.id} >
              <Col sm={2}>{cust.name}</Col>
              <Col sm={2}>{cust.mobile }</Col>
              <Col sm={2}>{cust.size}</Col>
              {/* <Col sm={2}>{cust.order[0]["type"]}</Col> */}
              <Col >
                <NavLink to={"profile/"+cust.id } >view
                </NavLink>
              </Col>
              
              {/* <Col >
                <Button variant="primary" size="sm" onClick={() => console.log('Edit: ', cust.id)} >
                  Edit
                </Button>
              </Col>
              <Col sm>
                <Button variant="danger" size="sm" onClick={() => console.log('Delete: ', cust.id)} >
                  Delete
                </Button>
              </Col> */}
            </Row>
          ))

        }


      </Container>
    </>
  )
}

export default AllClients