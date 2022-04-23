import React,{useState, useEffect,   } from 'react'
import { Container, Row, Col, Button, Modal, Form, } from 'react-bootstrap'
import { useTranslation } from '../../translations/Translations'
import {CreateEditButton } from './CreateEditButton'

export const EditForm = (props) => {


  const { translate } = useTranslation()

    const [customer, setCustomer] = useState(props.customer)

    const [cust_ID, setCustID] = useState(props.id)


    const [cust_name, setCust_name] = useState()
    const [cust_size, setCust_size] = useState()

    const [cust_mobile, setCust_mobile] = useState()
    const [cust_note, setCust_Note] = useState()

    let cst = {
        name: (cust_name !== undefined) ? cust_name : props.customer.name,
        size: (cust_size !== undefined) ? cust_size : props.customer.size,
        mobile: (cust_mobile !== undefined) ? cust_mobile : props.customer.mobile,
        note: (cust_note !== undefined) ? cust_note : props.customer.note,
        id: props.id,
    }






    //
        const [pref, setPref] = useState([])



    const [hit, setHit] = useState()
    const [height, setHeight] = useState()
    const [width, setWidth] = useState()
    const [chest, setChest] = useState()
    const [bust, setbust] = useState()
    const [waist, setwaist] = useState()
    const [hip, sethip] = useState()
    const [top_hip, settop_hip] = useState()
    const [low_waist, setlow_waist] = useState()
    const [back_waist, setback_waist] = useState()
    const [front_waist, setfront_waist] = useState()
    const [schoulder_width, setschoulder_width] = useState()
    const [back_width, setback_width] = useState()
    const [bust_height, setbust_height] = useState()
    const [apex, setapex] = useState()
    const [arm_hole_depth, setarm_hole_depth] = useState()
    const [hip_height, sethip_height] = useState()



    const [top_arm, setTop_arm] = useState()
    const [wrist_circ, setWrist_circ] = useState()
    const [sleeve_length, setSleeve_length] = useState()
    const [elbow_length, setElbow_length] = useState()


    const [rise, setrise] = useState()
    const [crotch_depth, setCrotch_depth] = useState()
    const [waist_to_knee, setWaist_to_knee] = useState()
    const [knee, setKnee] = useState()
    const [thigh, setThigh] = useState()
    const [dress_length, setDress_length] = useState()
    const [blouse_length, setBlouse_length] = useState()
    const [pants_length, setPants_length] = useState()
    const [skirt_length, setSkirt_length] = useState()




    let part1 = {
        hit: "",
        height: "",
        width: "",
        chest: "",
        bust: "",
        waist: "",
        hip: "",
        top_hip: "",
        low_waist: "",
        back_waist: "",
        front_waist: "",
        schoulder_width: "",
        back_width: "",
        bust_height: "",
        apex: "",
        arm_hole_depth: "",
        hip_height: ""

    }

    let part2 = {
        top_arm: "",
        wrist_circ: "",
        sleeve_length: "",
        elbow_length: "",
    }

    let part3 = {
        rise: "",
        crotch_depth: "",
        waist_to_knee: "",
        knee: "",
        thigh: "",
    }

    let part4 = {
        dress_length: "",
        blouse_length: "",
        pants_length: "",
        skirt_length: "",
    }


    //
    let prefObj = {
        hit:(hit !== undefined) ? hit : props.preference.hit,
        height:(height!== undefined) ? height : props.preference.height,
        width: (width !== undefined) ? width : props.preference.width,
        chest: (chest !== undefined) ? chest : props.preference.chest,
        bust: (bust !== undefined) ? bust : props.preference.bust,
        waist: (waist !== undefined) ? waist : props.preference.waist,
        hip: (hip !== undefined) ? hip : props.preference.hip,
        top_hip: (top_hip !== undefined) ? top_hip : props.preference.top_hip,
        low_waist: (low_waist !== undefined) ? low_waist : props.preference.low_waist,
        back_waist: (back_waist !== undefined) ? back_waist : props.preference.back_waist,
        front_waist: (front_waist !== undefined) ? front_waist : props.preference.front_waist,
        schoulder_width:  (schoulder_width !== undefined) ? schoulder_width : props.preference.schoulder_width,
        back_width:  (back_width !== undefined) ? back_width : props.preference.back_width,
        bust_height:  (bust_height !== undefined) ? bust_height : props.preference.bust_height,
        apex:  (apex !== undefined) ? apex : props.preference.apex,
        arm_hole_depth:  (arm_hole_depth !== undefined) ? arm_hole_depth : props.preference.arm_hole_depth,
        hip_height:  (hip_height !== undefined) ? hip_height : props.preference.hip_height,
        top_arm:  (top_arm !== undefined) ? top_arm : props.preference.top_arm,
        wrist_circ:  (wrist_circ !== undefined) ? wrist_circ : props.preference.wrist_circ,
        sleeve_length:  (sleeve_length !== undefined) ? sleeve_length : props.preference.sleeve_length,
        elbow_length:  (elbow_length !== undefined) ? elbow_length : props.preference.elbow_length,
         rise:  (rise !== undefined) ? rise : props.preference.rise,
        crotch_depth:  (crotch_depth !== undefined) ? crotch_depth : props.preference.crotch_depth,
        waist_to_knee:  (waist_to_knee !== undefined) ? waist_to_knee : props.preference.waist_to_knee,
        knee:  (knee !== undefined) ? knee : props.preference.knee,
        thigh:   (thigh !== undefined) ? thigh : props.preference.thigh,
        dress_length: (dress_length  !== undefined) ? dress_length  : props.preference.dress_length ,
        blouse_length: (blouse_length  !== undefined) ? blouse_length  : props.preference.blouse_length ,
        pants_length: (pants_length  !== undefined) ? pants_length  : props.preference.pants_length ,
        skirt_length: (skirt_length  !== undefined) ? skirt_length  : props.preference.skirt_length ,
        customer_id: Number(props.id),
       
    }

    const new_customer = {

    }





    const setCustData = (e) => {
        e.preventDefault()
        setCustomer(cust =>
            [...cust, cust_name]
        )

        console.log('create#: ', customer, cust_name)
    }

    const setPrefData = (e) => {

        console.log(`dom element: ${e.target.name}`)

        const key = e.target.name;
        const value = e.target.value

        let obj = { key: key, value: value }

        console.log(' obj*: ', obj)

        setPref(pref => [...pref, obj])

        console.log('Pref state: ', pref)
    }


    const Submit = (e) => {
        e.preventDefault();
        console.log("submit");
        console.log('submit#: ', customer, cust_name, cst)
    }

    const fill = async () => {
        console.log('props: ', props.id)
        setCustID(props.id)
        //
       // getCustomer(id)
        //
       // console.log('cst: ', cst)
        // 
        //setCust_name(cst.name)
        // 
        //custo.name = cst.name


    }

   

    const CheckPropsTypeAndPassValue = (obj, key) => {

        if (props.type === "create") {
            return ""
        } else {
            return obj[key]
        }

    }

    const handleSubmit = (e) => {
        e.preventDefault()

        

        console.log("updated: ",prefObj, cst, cust_name, props.customer)
        

    }


    useEffect(() => {
       
        
        setCustomer(props.customer)
        console.log("customer EditForm: ", props.preference)
       // fill()

    },[])
  
  
  return (
    <div>
     
          <h5>{translate("edit-client") }</h5>

       <Container>
            <Row>
                <Col>
                    <Form onSubmit={handleSubmit}>

                        <Row className='mt-4 pt-4'>
                            <h5>Customer</h5>
                        </Row>

                        <Container className='mt-4 pt-4 pb-4 border'>
                            <Row>
                                <Col>
                                    <Form.Group as={Row} controlId="name">
                                        <Form.Label > Name , </Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="name"
                                            defaultValue={CheckPropsTypeAndPassValue(cst, 'name')}
                                            onChange={(e) => setCust_name(e.target.value)}
                                        />
                                    </Form.Group>

                                </Col>
                                <Col>
                                    <Form.Group as={Row} controlId="mobile">
                                        <Form.Label > Mobile</Form.Label>
                                        <Form.Control
                                            type="number"
                                            name="mobile"
                                            defaultValue={CheckPropsTypeAndPassValue(cst, 'mobile')}
                                            onChange={(e) => setCust_mobile(e.target.value)}
                                        />
                                    </Form.Group>

                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Group as={Row} controlId="size">
                                        <Form.Label > Size</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="size"
                                            defaultValue={CheckPropsTypeAndPassValue(cst, 'size')}
                                            onChange={(e) => setCust_size(e.target.value)}
                                        />
                                    </Form.Group>

                                </Col>

                            </Row>
                            <Row>
                                <Col>
                                    <Form.Group as={Row} controlId="cust_note">
                                        <Form.Label > Note</Form.Label>
                                        <Form.Control
                                            type="text"
                                              name="cust_note"
                                            defaultValue={CheckPropsTypeAndPassValue(cst, 'note')}
                                            onChange={(e) => setCust_Note(e.target.value)}
                                        />
                                    </Form.Group>

                                </Col>

                            </Row>
                        </Container>



                        <Row className='mt-4 pt-4 '>
                            <h5>{translate("measurements") }</h5>
                        </Row>

                        <Container className='mt-4 pt-4 pb-4 border'>
                            <Row >
                                <Col>
                                    <Form.Group as={Row} controlId="Hit">
                                        <Form.Label > Hit</Form.Label>
                                        <Form.Control
                                            type="number"
                                            name="Hit"
                                            defaultValue={CheckPropsTypeAndPassValue(prefObj, 'hit')}
                                            onChange={(e) => setHit(Number(e.target.value))}
                                        />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group as={Row} controlId="name">
                                        <Form.Label > height</Form.Label>
                                        <Form.Control
                                            type="number"
                                            name="height"
                                            defaultValue={CheckPropsTypeAndPassValue(prefObj, 'height')}
                                            onChange={(e) => setHeight(Number(e.target.value))}
                                        />
                                    </Form.Group>

                                </Col>

                               
                                
                              </Row>
                              

                              <Row>
                                   <Col>
                                    <Form.Group as={Row} controlId="name">
                                        <Form.Label > width</Form.Label>
                                        <Form.Control
                                            type="number"
                                            name="width"
                                            defaultValue={CheckPropsTypeAndPassValue(prefObj, 'width')}
                                            onChange={(e) => setWidth(Number(e.target.value))}
                                        />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group as={Row} controlId="name">
                                        <Form.Label > chest</Form.Label>
                                        <Form.Control
                                            type="number"
                                            name="chest"
                                            defaultValue={CheckPropsTypeAndPassValue(prefObj, 'chest')}
                                            onChange={(e) => setChest(Number(e.target.value))}
                                        />
                                    </Form.Group>
                                </Col>
                              </Row>
                              <Row>
                                  <Col>
                                    <Form.Group as={Row} controlId="name">
                                        <Form.Label > bust</Form.Label>
                                        <Form.Control
                                            type="number"
                                            name="bust"
                                            defaultValue={CheckPropsTypeAndPassValue(prefObj, "bust")}
                                            onChange={(e) => setbust(Number(e.target.value))}
                                        />
                                    </Form.Group>
                                  </Col>
                                   <Col>
                                    <Form.Group as={Row} controlId="name">
                                        <Form.Label > waist</Form.Label>
                                        <Form.Control
                                            type="number"
                                            name="waist"defaultValue={CheckPropsTypeAndPassValue(prefObj, 'waist')}
                                            onChange={(e) => setwaist(Number(e.target.value))}


                                        />
                                    </Form.Group>
                                </Col>
                                  

                              </Row>
                              <Row>

                                <Col>
                                    <Form.Group as={Row} controlId="name">
                                        <Form.Label > hip</Form.Label>
                                        <Form.Control
                                            type="number"
                                            name="hip"
                                            defaultValue={CheckPropsTypeAndPassValue(prefObj, 'hip')}
                                            onChange={(e) => sethip(Number(e.target.value))}
                                        />
                                    </Form.Group>

                                </Col>

                                <Col>
                                    <Form.Group as={Row} controlId="name">
                                        <Form.Label > top_hip</Form.Label>
                                        <Form.Control
                                            type="number"
                                            name="top_hip"
                                            defaultValue={CheckPropsTypeAndPassValue(prefObj, 'top_hip')}
                                            onChange={(e) => settop_hip(Number(e.target.value))}
                                        />
                                    </Form.Group>
                                </Col>
                              </Row>
                              <Row>


                              </Row>
                              <Row>

                                  <Col>
                                    <Form.Group as={Row} controlId="name">
                                        <Form.Label > front_waist</Form.Label>
                                        <Form.Control
                                            type="number"
                                            name="front_waist"
                                            defaultValue={CheckPropsTypeAndPassValue(prefObj, 'front_waist')}
                                            onChange={(e) => setfront_waist(Number(e.target.value))}
                                        />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group as={Row} controlId="name">
                                        <Form.Label > schoulder_width</Form.Label>
                                        <Form.Control
                                            type="number"
                                            name="schoulder_width"
                                            defaultValue={CheckPropsTypeAndPassValue(prefObj, 'schoulder_width')}
                                            onChange={(e) => setschoulder_width(Number(e.target.value))}
                                        />
                                    </Form.Group>

                                </Col>
                              </Row>
                              <Row>

                                   <Col>
                                    <Form.Group as={Row} controlId="name">
                                        <Form.Label > back_width</Form.Label>
                                        <Form.Control
                                            type="number"
                                            name="back_width"
                                            defaultValue={CheckPropsTypeAndPassValue(prefObj, 'back_width')}
                                            onChange={(e) => setback_width(Number(e.target.value))}
                                        />
                                    </Form.Group>
                                  </Col>

                                   <Col>
                                    <Form.Group as={Row} controlId="name">
                                        <Form.Label > arm_hole_depth</Form.Label>
                                        <Form.Control
                                            type="number"
                                            name="arm_hole_depth"
                                            defaultValue={CheckPropsTypeAndPassValue(prefObj, 'arm_hole_depth')}
                                            onChange={(e) => setarm_hole_depth(Number(e.target.value))}
                                        />
                                    </Form.Group>
                                </Col>
                                  

                              </Row>
                              

                            <Row>
                               
                               
                                <Col>
                                    <Form.Group as={Row} controlId="name">
                                        <Form.Label > low_waist</Form.Label>
                                        <Form.Control
                                            type="number"
                                            name="low_waist"
                                            defaultValue={CheckPropsTypeAndPassValue(prefObj, 'low_waist')}
                                            onChange={(e) => setlow_waist(Number(e.target.value))}
                                        />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group as={Row} controlId="name">
                                        <Form.Label > back_waist</Form.Label>
                                        <Form.Control
                                            type="number"
                                            name="back_waist"
                                            defaultValue={CheckPropsTypeAndPassValue(prefObj, 'back_waist')}
                                            onChange={(e) => setback_waist(Number(e.target.value))}
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row>
                                

                               
                                <Col>
                                    <Form.Group as={Row} controlId="name">
                                        <Form.Label > bust_height</Form.Label>
                                        <Form.Control
                                            type="number"
                                            name="bust_height"
                                            defaultValue={CheckPropsTypeAndPassValue(prefObj, 'bust_height')}
                                            onChange={(e) => setbust_height(Number(e.target.value))}
                                        />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group as={Row} controlId="name">
                                        <Form.Label > apex</Form.Label>
                                        <Form.Control
                                            type="number"
                                            name="apex"
                                            defaultValue={CheckPropsTypeAndPassValue(prefObj, 'apex')}
                                            onChange={(e) => setapex(Number(e.target.value))}
                                        />
                                    </Form.Group>
                                </Col>
                              </Row>
                              
                              <Row>
                                <Col>
                                    <Form.Group as={Row} controlId="name">
                                        <Form.Label > hip_height</Form.Label>
                                        <Form.Control
                                            type="number"
                                            name="hip_height"
                                            defaultValue={CheckPropsTypeAndPassValue(prefObj, 'hip_height')}
                                            onChange={(e) => sethip_height(Number(e.target.value))}
                                        />
                                    </Form.Group>

                                </Col>

                                <Col>
                                    <Form.Group as={Row} controlId="name">
                                        <Form.Label > top_arm</Form.Label>
                                        <Form.Control
                                            type="number"
                                            name="top_arm"
                                            defaultValue={CheckPropsTypeAndPassValue(prefObj, 'top_arm')}
                                            onChange={(e) => setTop_arm(Number(e.target.value))}
                                        />
                                    </Form.Group>
                                </Col>

                              </Row>


                            

                            <Row>
                               
                                
                                <Col>
                                    <Form.Group as={Row} controlId="name">
                                        <Form.Label > wrist_circ</Form.Label>
                                        <Form.Control
                                            type="number"
                                            name="wrist_circ"
                                            defaultValue={CheckPropsTypeAndPassValue(prefObj, 'wrist_circ')}
                                            onChange={(e) => setWrist_circ(Number(e.target.value))}
                                        />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group as={Row} controlId="name">
                                        <Form.Label > sleeve_length</Form.Label>
                                        <Form.Control
                                            type="number"
                                            name="sleeve_length"
                                            defaultValue={CheckPropsTypeAndPassValue(prefObj, 'sleeve_length')}
                                            onChange={(e) => setSleeve_length(Number(e.target.value))}
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>

                              <Row>
                                   <Col>
                                    <Form.Group as={Row} controlId="name">
                                        <Form.Label > elbow_length</Form.Label>
                                        <Form.Control
                                            type="number"
                                            name="elbow_length"
                                            defaultValue={CheckPropsTypeAndPassValue(prefObj, 'elbow_length')}
                                            onChange={(e) => setElbow_length(Number(e.target.value))}
                                        />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group as={Row} controlId="name">
                                        <Form.Label > rise</Form.Label>
                                        <Form.Control
                                            type="number"
                                            name="rise"
                                            defaultValue={CheckPropsTypeAndPassValue(prefObj, 'rise')}
                                            onChange={(e) => setrise(Number(e.target.value))}
                                        />
                                    </Form.Group>

                                </Col>
                                </Row>
                              


                            <Row>
                               

                               
                                <Col>
                                    <Form.Group as={Row} controlId="name">
                                        <Form.Label > waist_to_knee</Form.Label>
                                        <Form.Control
                                            type="number"
                                            name="waist_to_knee"
                                            defaultValue={CheckPropsTypeAndPassValue(prefObj, 'waist_to_knee')}
                                            onChange={(e) => setWaist_to_knee(Number(e.target.value))}
                                        />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group as={Row} controlId="name">
                                        <Form.Label > knee</Form.Label>
                                        <Form.Control
                                            type="number"
                                            name="knee"
                                            defaultValue={CheckPropsTypeAndPassValue(prefObj, 'knee')}
                                            onChange={(e) => setKnee(Number(e.target.value))}
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>

                              <Row>

                                   <Col>
                                    <Form.Group as={Row} controlId="name">
                                        <Form.Label > crotch_depth</Form.Label>
                                        <Form.Control
                                            type="number"
                                            name="crotch_depth"
                                            defaultValue={CheckPropsTypeAndPassValue(prefObj, 'crotch_depth')}
                                            onChange={(e) => setCrotch_depth(Number(e.target.value))}
                                        />
                                    </Form.Group>
                                  </Col>
                                  
                                   <Col>
                                    <Form.Group as={Row} controlId="name">
                                        <Form.Label > thigh</Form.Label>
                                        <Form.Control
                                            type="number"
                                            name="thigh"
                                            defaultValue={CheckPropsTypeAndPassValue(prefObj, 'thigh')}
                                            onChange={(e) => setThigh(Number(e.target.value))}
                                        />
                                    </Form.Group>
                                </Col>
                              </Row>

                             


                            <Row>
                               
                                <Col>
                                    <Form.Group as={Row} controlId="name">
                                        <Form.Label > dress_length</Form.Label>
                                        <Form.Control
                                            type="number"
                                            name="dress_length"
                                            defaultValue={CheckPropsTypeAndPassValue(prefObj, 'dress_length')}
                                            onChange={(e) => setDress_length(Number(e.target.value))}
                                        />
                                    </Form.Group>

                                </Col>

                                <Col>
                                    <Form.Group as={Row} controlId="name">
                                        <Form.Label > blouse_length</Form.Label>
                                        <Form.Control
                                            type="number"
                                            name="blouse_length"
                                            defaultValue={CheckPropsTypeAndPassValue(prefObj, 'blouse_length')}
                                            onChange={(e) => setBlouse_length(Number(e.target.value))}
                                        />
                                    </Form.Group>
                                </Col>

                            </Row>

                            <Row>
                                <Col>
                                    <Form.Group as={Row} controlId="note">
                                        <Form.Label > pants_length</Form.Label>
                                        <Form.Control
                                            type="number"
                                            name="pants_length"
                                            defaultValue={CheckPropsTypeAndPassValue(prefObj, 'pants_length')}
                                            onChange={(e) => setPants_length(Number(e.target.value))}
                                        />
                                    </Form.Group>

                                </Col>
                                <Col>
                                    <Form.Group as={Row} controlId="note">
                                        <Form.Label > skirt_length</Form.Label>
                                        <Form.Control
                                            type="number"
                                            name="skirt_length"
                                            defaultValue={CheckPropsTypeAndPassValue(prefObj, 'skirt_length')}
                                            onChange={(e) => setSkirt_length(Number(e.target.value))}
                                        />
                                    </Form.Group>

                                </Col>

                            </Row>
                        </Container>




                        {/* { <Button variant="primary" type='submit' className='mt-3'>Save</Button>} */}
                         <CreateEditButton type={props.type} customer={cst} customerID={CheckPropsTypeAndPassValue(cst, 'id')} preferences={prefObj} event={Submit} />
                    </Form>
                </Col>
            </Row>


        </Container>
    </div>
  )
}

