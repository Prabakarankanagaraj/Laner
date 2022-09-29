import { useState } from "react"
import { Badge, Button, Container, Modal, Nav, Navbar, NavDropdown } from "react-bootstrap"
import { Caro } from "./Caro"
import { onSubmitDelete, onSubmitLogout } from "./Connect"

 
export const Main=()=>{
    const[show,setShow]=useState(false)
    const handleShow=()=>setShow(true)
    const handleClose=()=>setShow(false)
      return(
        <>
        <Navbar bg="warning" expand="lg">
            <Container fluid>
                <Navbar.Brand href="/view" className="text-danger">
                <img
                src="pic5.png"
                width="35"
                height="30"
                className="d-inline-block align-top"
                />    
                    Lancer
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="fai" />
                    <Navbar.Collapse id="fai">
                        <Nav className="ms-auto">
                            <a className="btn btn-outline-danger rounded-5 ms-2" href="/#/view" >Home</a>
                            <a className="btn btn-outline-danger rounded-5 ms-2" href="/#/fresh">New</a>
                            <a className="btn btn-outline-danger rounded-5 ms-2" href="/#/alter">Alter</a>
                            <a className="btn btn-outline-danger rounded-5 ms-2" href="/#/remove">Remove</a>
                            <NavDropdown title="Filter" id="fai"  className=" ms-2">
                                <NavDropdown.Item href="/#/skillShort">Skills</NavDropdown.Item>
                                <NavDropdown.Item href="/#/skillTwo">Extech</NavDropdown.Item>
                                <NavDropdown.Item href="/#/filterSkills">Tech</NavDropdown.Item>
                                <NavDropdown.Item href="/#/filterSalary">Salary</NavDropdown.Item>
                                <NavDropdown.Item href="/#/filterExperience">Experience</NavDropdown.Item>
                             </NavDropdown>
                                <Button variant="danger" onClick={handleShow}>
                                    Notification<Badge bg="info">New</Badge>
                                </Button>
                                <Modal show={show} onHide={handleClose}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Update's</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>New user will get a new Commercial after achieving 10 Project's</Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="secondary" onClick={handleClose} >Close</Button>
                                    </Modal.Footer>
                                </Modal>
                            <button className="btn btn-outline-danger rounded-5 ms-2 " onClick={async()=>{
                                await onSubmitLogout()
                                window.location.assign("/")
                             }}>
                                Logout
                             </button>
                         </Nav>
                    </Navbar.Collapse>
           </Container>
        </Navbar>
        
         
        </>
    )
}