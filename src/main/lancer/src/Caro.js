import { useState } from "react"
import { Button, Carousel, CarouselItem, Offcanvas } from "react-bootstrap"

export const Caro=()=>{
    const[show,setShow]=useState(false)
    const handleShow=()=>setShow(true)
    const handleClose=()=>setShow(false)
    return(
        <>
         <Carousel>
            <Carousel.Item>
                <img className="d-block w-100"
                 style={{height:'562px'}} src="pic1.avif">
                </img>
                <Carousel.Caption>
                    <h1 className="text-black display-3 text-center"><b>Welcome to Lancer</b></h1>
                    <Button className="btn btn-info" onClick={handleShow}>Help?</Button>
                    <Offcanvas show={show} onHide={handleClose}>
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title>Lancer</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <p>If you need any help,Please contact us!.</p>
                            <pre><i>Mobile No-8248648330</i><br/>
                            <i>Email-lancerweb@gmail.com</i>
                            <address>
                                <h3>Address</h3>
                                251-1 E S.K.Township<br/>
                                Ammapet Dist 636003 <br/>
                                Salem State<br/>
                                Tamilnadu Country
                            </address>
                            </pre>
                        </Offcanvas.Body>
                    </Offcanvas>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                 className="d-block w-100"
                 style={{height:'562px'}}
                 src="pic2.avif"
                />
                <Carousel.Caption>
                    <h1 className=" text-center">Biggest Platform in the world for Programmers!</h1>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                 className="d-block w-100"
                 style={{height:'562px'}}
                 src="pic3.avif"
                />
                <Carousel.Caption>
                    <h1 className=" text-center">Make your project here and get a profit here!.</h1>
                </Carousel.Caption>
                <Carousel.Item/>
            </Carousel.Item>
         </Carousel>
        </>
    )
}