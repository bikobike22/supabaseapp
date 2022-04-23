import React, { useState, useEffect, } from 'react'
import { Container, Row, Col, Button, Modal,Table, } from 'react-bootstrap'
import { Navigate, NavLink,Link, } from 'react-router-dom'
import * as service from "../../service/service"

const AllClients = () => {

  const [customers, setCustomers] = useState([])
  const [all, setAll] = useState([])


  const fetchCustomers = async () => {
    const res = service.fetchPosts();
    res.then(th => {
      console.log('th: ', th);
     // setCustomers(th);
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

    //fetchCustomers()
   //fetchCustO()
    fetchCustomersWithPrefs()
  })

  const viewCustomer = () => {
    return  <NavLink to="profile"  />
    
  }



  return (
    <>
      <p>All Clients</p>

      
      <Table striped bordered hover size="sm">
  <thead>
    <tr>
      <th>Name</th>
      <th>Phone</th>
      <th>Size</th>
      <th>Hit</th>
    </tr>
  </thead>
        <tbody>
          {
          all?.map((cust, index) => (
            <tr className="mt-1 p-1 " key={cust.id} >
              <td sm={2}>{cust.name}</td>
              <td sm={2}>{cust.mobile }</td>
              <td sm={2}>{cust.size}</td>
              {/* <Col sm={2}>{cust.order[0]["type"]}</Col> */}
              <td >
                <NavLink to={"profile/"+cust.id } >view
                </NavLink>
              </td>
              
            </tr>
          ))

        }
   
  </tbody>
</Table>



     </>
  )
}

export default AllClients