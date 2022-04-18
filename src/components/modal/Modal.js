import React, { useState, } from 'react'
import { Container, Row, Button, Modal, } from 'react-bootstrap'


const ModalUI = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return (
        <div>
            <Modal show={show} onHide={handleClose} fullscreen>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <Row>
                            model...!
                        </Row>
                        <Row>
                            <Button variant="primary" size="sm" onClick={handleClose} >
                                Close
                            </Button>
                        </Row>
                    </Container>


                </Modal.Body>
            </Modal>
        </div>
    )
}

export default Modal