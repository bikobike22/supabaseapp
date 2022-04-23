import React, { useEffect, } from 'react'
import { Button, Alert, } from 'react-bootstrap'
import { Navigate, Link, NavLink,useNavigate,  } from 'react-router-dom'
import * as service from "../../service/service"


export const CreateEditButton = (props) => {

    const { customerID, preferences } = props

    

    let navigate = useNavigate(); 


    const UpdateCustomer = (id, customer) => {
        console.log("UpdateCustomer props: ", props.customerID, preferences)

        console.log("UpdateCustomer btn: ", id, customer)
        const res = service.updateCustomer(id, customer);
        res.then( async th => {
            console.log('th UpdateCustomer: ', th, ' , pref: ',  props.preferences);
            //
            const customer_id = th[0].id
            const updatedPref = service.updatePreferencesByCustomerID(customerID, props.preferences)
            updatedPref.then(th => {
            console.log('th updated preferences: ', th);

        })
            //UpdatePreferencesByCustomerID(customer_Id, props.preferences)
            //th.map ( m => ( UpdatePreferencesByCustomerID(m.id, props.preferences)))
            //UpdatePreferencesByCustomerID(th.id, preferences)

        })


    }

    const UpdatePreferencesByCustomerID = (cust_id, pref) => {
        const res = service.updatePreferencesByCustomerID(cust_id, pref);
        res.then(th => {
            console.log('th: ', th);

        })
    }

    const createCustomerWithPreferences = async (customer) => {
        const res = service.createCustomer(customer);
         res.then( async th => {
             
             if (th) {
                 console.log('th create new cust: ', th)
                 const last = await theLast()
                 
             }
              
         })
        // setTimeout(() => {
        //     theLast()
        // }, 3000)

        
        //createPreferences(25) 
        console.log('customer: ', customer, ' , pref: ', preferences)
        

    }

    const theLast = async () => {
        console.log("last last **")
        const last = service.getTheLastRowInCustomer()
        last.then(async th => {
            if (th) {
                const customer_id = th[0].id
                console.log(' last th #: ', th[0].id, " , preferences: ", props.preferences)

                props.preferences.customer_id = customer_id
                
                const createPref = service.createPreferencesByCustomerID(customer_id, props.preferences)
                createPref.then(th => {
                        console.log('th createPref: ', th);

                    })
                }
                // th.map(async (m, idx) => {
                //     console.log( "last m: ", m)
                //      createPreferences(m.id, preferences) 
                // })
            })

    }

    const createPreferences = async (cust_id, preferences_) => {

    
        console.log('pref ?: ',)
        preferences["customer_id"] = cust_id

        const new_pref = service.createPreferencesByCustomerID(cust_id, preferences_)
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

    const save = (e) => {

        e.preventDefault()

        if (props.type === "create")
        {
            // console.log('f*:', props.customer)
            createCustomerWithPreferences(props.customer)
           

        } else if(props.type === "edit") {
            console.log(' update f*:', props.customer)
            UpdateCustomer(props.customerID, props.customer)
            
            }
        
        //
        navigateToHome()
        
        
    }

   
    useEffect(() => {
        console.log("customerID: ", customerID, props.customerID, props.customer)
        console.log("preferences: ", props.preferences)
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