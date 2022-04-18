import React, { useEffect, } from 'react'
import { Button, Alert, } from 'react-bootstrap'
import { Navigate, Link, NavLink,useNavigate,  } from 'react-router-dom'
import * as service from "../../service/service"


export const CreateEditButton = (props) => {

    const { customerID, preferences } = props

    

    let navigate = useNavigate(); 


    const UpdateCustomer = (id, customer) => {
        const res = service.updateCustomer(id, customer);
        res.then(th => {
            console.log('th: ', th);
            //
            //UpdatePreferencesByCustomerID(th.id, props.preferences)

        })


    }

    const UpdatePreferencesByCustomerID = (cust_id, pref) => {
        const res = service.updatePreferencesByCustomerID(cust_id, pref);
        res.then(th => {
            console.log('th: ', th);

        })
    }

    const createCustomerWithPreferences = (customer) => {
        const res = service.createCustomer(customer);
         res.then(th => {
            console.log('th create new cust: ', th)

         })
        setTimeout(() => {
            theLast()
        }, 1000)

        
        //createPreferences(25) 
        console.log('customer: ', customer, ' , pref: ', preferences)
        

    }

    const theLast = async () => {
        const last = service.getTheLastRowInCustomer()
            last.then( async th => {
                th.map( (m, idx) => ( createPreferences(m.id) ))
            })

    }

    const createPreferences = (cust_id) => {

    
        console.log('pref ?: ',)
        preferences.customer_id = cust_id

        const new_pref = service.createPreferencesByCustomerID(cust_id, preferences)
        new_pref.then(th => {
            console.log('th new pref: ', th);

        })


    }

    const showAlert = () => {
        return (
            <>

            </>
        )
    }

    const navigateToHome = () => {

        console.log('link')

        routeChange('/')

    }

    
  const routeChange = (path) =>{ 
    navigate(path);
  }

    const save = () => {

        if (props.type === "create")
        {
            // console.log('f*:', props.customer)
            createCustomerWithPreferences(props.customer)
           

        } else {
            console.log(' update f*:', props.customer)
            UpdateCustomer(customerID, props.customer)
            
            }
        
        //
        // navigateToHome()
        
        
    }

   
    useEffect(() => {
        console.log("customerID: ", customerID)
    })



    const create = () => {
        return <Button variant="primary" className='mt-3' onClick={save}>Create</Button>
    }

    const update = () => {
        return <Button variant="primary" className='mt-3' onClick={save}>Update</Button>

    }


    return (
        <div>
            {props.type === "edit" ? update() : create()}


        </div>
    )
}