import React,{useState, useEffect,  } from 'react'
import { Container, Row, Col, Button, Modal, Form, } from 'react-bootstrap'
import {CreateEditButton } from '../../profile/components/CreateEditButton'
import { useTranslation } from '../../translations/Translations'

const AddForm = (props) => {


    const { translate } = useTranslation()
    
    const [customer, setCustomer] = useState(props.customer)

    const [cust_ID, setCustID] = useState(props.id)


    const [cust_name, setCust_name] = useState()
    const [cust_size, setCust_size] = useState()

    const [cust_mobile, setCust_mobile] = useState()
    const [cust_note, setCust_Note] = useState()

    let custo = {
        name: cust_name,
        size: cust_size,
        mobile: cust_mobile,
        note: cust_note,
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
        hit:hit,
        height:height,
        width: width,
        chest: chest,
        bust: bust,
        waist: waist,
        hip: hip,
        top_hip: top_hip,
        low_waist: low_waist,
        back_waist: back_waist,
        front_waist: front_waist,
        schoulder_width: schoulder_width,
        back_width: back_width,
        bust_height: bust_height,
        apex: apex,
        arm_hole_depth: arm_hole_depth,
        hip_height: hip_height,
        top_arm: top_arm,
        wrist_circ: wrist_circ,
        sleeve_length: sleeve_length,
        elbow_length: elbow_length,
         rise: rise,
        crotch_depth: crotch_depth,
        waist_to_knee: waist_to_knee,
        knee: knee,
        thigh: thigh,
        dress_length: dress_length,
        blouse_length: blouse_length,
        pants_length: pants_length,
        skirt_length: skirt_length,
        customer_id: null,

       
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
        console.log('submit#: ', customer, cust_name, custo)
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

        console.log(prefObj, custo)
        

    }


    useEffect(() => {

       // fill()

    })
  
  
  return (
    <div>
     

       <Container>
            <Row>
                <Col>
                    <Form onSubmit={handleSubmit}>

                        <Row className='mt-4 pt-4'>
                              <h5>{translate("client")}</h5>
                        </Row>

                        <Container className='mt-4 pt-4 pb-4 border'>
                            <Row>
                                <Col>
                                    <Form.Group as={Row} controlId="name">
                                        <Form.Label > Name </Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="name"
                                            
                                            defaultValue={""}


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
                                           
                                            defaultValue={CheckPropsTypeAndPassValue('cst', 'size')}
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
                                            defaultValue={CheckPropsTypeAndPassValue('cst', 'note')}
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
                                            defaultValue={CheckPropsTypeAndPassValue('pRef', 'hit')}
                                            onChange={(e) => setHit(e.target.value)}
                                        />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group as={Row} controlId="name">
                                        <Form.Label > height</Form.Label>
                                        <Form.Control
                                            type="number"
                                            name="height"
                                            defaultValue={CheckPropsTypeAndPassValue('pRef', 'height')}
                                            onChange={(e) => setHeight(e.target.value)}
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
                                            defaultValue={CheckPropsTypeAndPassValue('pRef', 'width')}
                                            onChange={(e) => setWidth(e.target.value)}
                                        />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group as={Row} controlId="name">
                                        <Form.Label > chest</Form.Label>
                                        <Form.Control
                                            type="number"
                                            name="chest"
                                            defaultValue={CheckPropsTypeAndPassValue('pRef', 'chest')}
                                            onChange={(e) => setChest(e.target.value)}
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
                                            defaultValue={CheckPropsTypeAndPassValue("pRef", 'bust')}
                                            onChange={(e) => setbust(e.target.value)}
                                        />
                                    </Form.Group>
                                  </Col>
                                  <Col>
                                    <Form.Group as={Row} controlId="name">
                                        <Form.Label > waist</Form.Label>
                                        <Form.Control
                                            type="number"
                                            name="waist"defaultValue={CheckPropsTypeAndPassValue("pRef", 'waist')}
                                            onChange={(e) => setwaist(e.target.value)}


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
                                            defaultValue={CheckPropsTypeAndPassValue("pRef", 'hip')}
                                            onChange={(e) => sethip(e.target.value)}
                                        />
                                    </Form.Group>

                                  </Col>
                                   <Col>
                                    <Form.Group as={Row} controlId="name">
                                        <Form.Label > top_hip</Form.Label>
                                        <Form.Control
                                            type="number"
                                            name="top_hip"
                                            defaultValue={CheckPropsTypeAndPassValue("pRef", 'top_hip')}
                                            onChange={(e) => settop_hip(e.target.value)}
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
                                            defaultValue={CheckPropsTypeAndPassValue("pRef", 'low_waist')}
                                            onChange={(e) => setlow_waist(e.target.value)}
                                        />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group as={Row} controlId="name">
                                        <Form.Label > back_waist</Form.Label>
                                        <Form.Control
                                            type="number"
                                            name="back_waist"
                                            defaultValue={CheckPropsTypeAndPassValue("pRef", 'back_waist')}
                                            onChange={(e) => setback_waist(e.target.value)}
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                    <Form.Group as={Row} controlId="name">
                                        <Form.Label > front_waist</Form.Label>
                                        <Form.Control
                                            type="number"
                                            name="front_waist"
                                            defaultValue={CheckPropsTypeAndPassValue("pRef", 'front_waist')}
                                            onChange={(e) => setfront_waist(e.target.value)}
                                        />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group as={Row} controlId="name">
                                        <Form.Label > schoulder_width</Form.Label>
                                        <Form.Control
                                            type="number"
                                            name="schoulder_width"
                                            defaultValue={CheckPropsTypeAndPassValue("pRef", 'schoulder_width')}
                                            onChange={(e) => setschoulder_width(e.target.value)}
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
                                            defaultValue={CheckPropsTypeAndPassValue("pRef", 'back_width')}
                                            onChange={(e) => setback_width(e.target.value)}
                                        />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group as={Row} controlId="name">
                                        <Form.Label > bust_height</Form.Label>
                                        <Form.Control
                                            type="number"
                                            name="bust_height"
                                            defaultValue={CheckPropsTypeAndPassValue("pRef", 'bust_height')}
                                            onChange={(e) => setbust_height(e.target.value)}
                                        />
                                    </Form.Group>
                                </Col>
                               
                              </Row>
                              <Row>
                                   <Col>
                                    <Form.Group as={Row} controlId="name">
                                        <Form.Label > apex</Form.Label>
                                        <Form.Control
                                            type="number"
                                            name="apex"
                                            defaultValue={CheckPropsTypeAndPassValue("pRef", 'apex')}
                                            onChange={(e) => setapex(e.target.value)}
                                        />
                                    </Form.Group>
                                  </Col>
                                  <Col>
                                    <Form.Group as={Row} controlId="name">
                                        <Form.Label > arm_hole_depth</Form.Label>
                                        <Form.Control
                                            type="number"
                                            name="arm_hole_depth"
                                            defaultValue={CheckPropsTypeAndPassValue("pRef", 'arm_hole_depth')}
                                            onChange={(e) => setarm_hole_depth(e.target.value)}
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
                                            defaultValue={CheckPropsTypeAndPassValue("pRef", 'hip_height')}
                                            onChange={(e) => sethip_height(e.target.value)}
                                        />
                                    </Form.Group>

                                  </Col>

                                   <Col>
                                    <Form.Group as={Row} controlId="name">
                                        <Form.Label > top_arm</Form.Label>
                                        <Form.Control
                                            type="number"
                                            name="top_arm"
                                            defaultValue={CheckPropsTypeAndPassValue("pRef", 'top_arm')}
                                            onChange={(e) => setTop_arm(e.target.value)}
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
                                            defaultValue={CheckPropsTypeAndPassValue("pRef", 'wrist_circ')}
                                            onChange={(e) => setWrist_circ(e.target.value)}
                                        />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group as={Row} controlId="name">
                                        <Form.Label > sleeve_length</Form.Label>
                                        <Form.Control
                                            type="number"
                                            name="sleeve_length"
                                            defaultValue={CheckPropsTypeAndPassValue("pRef", 'sleeve_length')}
                                            onChange={(e) => setSleeve_length(e.target.value)}
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
                                            defaultValue={CheckPropsTypeAndPassValue("pRef", 'elbow_length')}
                                            onChange={(e) => setElbow_length(e.target.value)}
                                        />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group as={Row} controlId="name">
                                        <Form.Label > rise</Form.Label>
                                        <Form.Control
                                            type="number"
                                            name="rise"
                                            defaultValue={CheckPropsTypeAndPassValue("pRef", 'rise')}
                                            onChange={(e) => setrise(e.target.value)}
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
                                            defaultValue={CheckPropsTypeAndPassValue("pRef", 'crotch_depth')}
                                            onChange={(e) => setCrotch_depth(e.target.value)}
                                        />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group as={Row} controlId="name">
                                        <Form.Label > waist_to_knee</Form.Label>
                                        <Form.Control
                                            type="number"
                                            name="waist_to_knee"
                                            defaultValue={CheckPropsTypeAndPassValue("pRef", 'waist_to_knee')}
                                            onChange={(e) => setWaist_to_knee(e.target.value)}
                                        />
                                    </Form.Group>
                                  </Col>
                              </Row>
                              <Row>
                                <Col>
                                    <Form.Group as={Row} controlId="name">
                                        <Form.Label > knee</Form.Label>
                                        <Form.Control
                                            type="number"
                                            name="knee"
                                            defaultValue={CheckPropsTypeAndPassValue("pRef", 'knee')}
                                            onChange={(e) => setKnee(e.target.value)}
                                        />
                                    </Form.Group>
                                  </Col>
                                  <Col>
                                    <Form.Group as={Row} controlId="name">
                                        <Form.Label > thigh</Form.Label>
                                        <Form.Control
                                            type="number"
                                            name="thigh"
                                            defaultValue={CheckPropsTypeAndPassValue("pRef", 'thigh')}
                                            onChange={(e) => setThigh(e.target.value)}
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
                                            defaultValue={CheckPropsTypeAndPassValue("pRef", 'dress_length')}
                                            onChange={(e) => setDress_length(e.target.value)}
                                        />
                                    </Form.Group>

                                </Col>

                                <Col>
                                    <Form.Group as={Row} controlId="name">
                                        <Form.Label > blouse_length</Form.Label>
                                        <Form.Control
                                            type="number"
                                            name="blouse_length"
                                            defaultValue={CheckPropsTypeAndPassValue("pRef", 'blouse_length')}
                                            onChange={(e) => setBlouse_length(e.target.value)}
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
                                            defaultValue={CheckPropsTypeAndPassValue("pRef", 'pants_length')}
                                            onChange={(e) => setPants_length(e.target.value)}
                                        />
                                    </Form.Group>

                                </Col>
                                <Col>
                                    <Form.Group as={Row} controlId="note">
                                        <Form.Label > skirt_length</Form.Label>
                                        <Form.Control
                                            type="number"
                                            name="skirt_length"
                                            defaultValue={CheckPropsTypeAndPassValue("pRef", 'skirt_length')}
                                            onChange={(e) => setSkirt_length(e.target.value)}
                                        />
                                    </Form.Group>

                                </Col>

                            </Row>
                        </Container>




                        {/* <Button variant="primary" type='submit' className='mt-3'>Create</Button> */}
                        {<CreateEditButton type={props.type} customer={custo} customerID={CheckPropsTypeAndPassValue("cst", 'id')} preferences={prefObj} event={Submit} />}
                    </Form>
                </Col>
            </Row>


        </Container>
    </div>
  )
}

export default AddForm
