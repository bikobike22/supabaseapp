import React, { useState, useEffect, } from 'react'
import Page from '../components/page/Page'
import * as service from "../service/service"
import { useParams, } from 'react-router-dom'
import { Container, Row, Col, Button, Modal, Form, } from 'react-bootstrap'
import EditForm  from './components/CreateEditForm'


const ProfileCustomer = (props) => {

  const [customer, setCustomer] = useState([])
    const [pref, setPref] = useState([])


  let { id } = useParams()
  console.log('id: ', id)



  const oneCustomer = async () => {
    const cust = service.fetchOneCustomer(id)
    cust.then(th => {
      th.map( m => ( setCustomer(m)))
      
    })
  }

  const onePrefByCustomerID = async () => {
    const cust = service.fetchOnePreferenceByCustomerID(id)
    cust.then(th => {
     th.map( m => ( setPref(m)))
      
    })
  }


  useEffect(() => {

    oneCustomer()
    onePrefByCustomerID()
  })


  return (
    <Page>

      <div>ProfileClientScreen</div>

      <EditForm type="edit" id={id} customer={customer} preference={pref} />

      
    </Page>

  )
}

export default ProfileCustomer