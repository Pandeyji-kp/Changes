import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import NavDropdown from 'react-bootstrap/NavDropdown';
import Footer from './Footer';


export default function Jodhpur() {
  return (
    <div className='main'>
        <Navbar expand="lg" className="bg-body-tertiary ">
      <Container >
        <Navbar.Brand href="#">Zomato</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">log in </Nav.Link>
            <Nav.Link href="#action2">Sign up</Nav.Link>
            
           
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>




    <Nav defaultActiveKey="/home" as="ul">
      <Nav.Item as="li">
        <Nav.Link href="/home">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link href="/home">|</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link eventKey="link-1">India</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link href="/home">|</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link eventKey="link-2">Jodhpur</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link href="/home">|</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link eventKey="link-2">Basni</Nav.Link>
      </Nav.Item>
    </Nav>



    <div className="jtbh">Jodhpur</div>
    <div className="tea">Tea</div>
    <div className='basani'>Basani , Jodhpur</div>
    <div className="panding">PENDING MODERATION</div>


<div className="tab">
    <Nav variant="pills" defaultActiveKey="/home">
      
    <Nav.Item className='border m-3 rounded'>
        <Nav.Link href="/home" eventKey="link-1">Share</Nav.Link>
      </Nav.Item>
      <Nav.Item className='border m-3 rounded'>
        <Nav.Link href="/home" eventKey="link-1">Share</Nav.Link>
      </Nav.Item>
      <Nav.Item className='border m-3 rounded'>
        <Nav.Link href="/home" eventKey="link-1">Share</Nav.Link>
      </Nav.Item>
    </Nav>
</div>



<div className="food">
  <div className="row">

    <div className="col-12 col-md-5">
      <img src="image/food.jpg" alt="" className='images1'/>
    </div>
    
    <div className="col-12 col-md-7">
      <img src="image/tea.avif" alt="" className='images2'/>
    </div>
    
  </div>
</div>


<div className="tab1">
<Nav variant="underline" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link href="/home">Active</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Option 2</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="disabled" disabled>
          Disabled
        </Nav.Link>
      </Nav.Item>
    </Nav>
    <header>____________________________________________________________________________________________________________________</header>
    <div className="phtos fs-3 fw-bold">Jodhpur Photos</div>



    <Nav variant="pills" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link href="/home">Active</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Option 2</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="disabled" disabled>
          Disabled
        </Nav.Link>
      </Nav.Item>
    </Nav>



    <div className="">
  <div className="row">

    <div className="col-12 col-md-4">
      <img src="image/food.jpg" alt="" className=''/>
    </div>
    
    <div className="col-12 col-md-4">
      <img src="image/food.jpg" alt="" className=''/>
    </div>

    <div className="col-12 col-md-4">
      <img src="image/food.jpg" alt="" className=''/>
    </div>
    
  </div>
</div>

<div className="div p-3">
<div className="Related fw-bold"> Related to Jodhpur , Basni </div>
<div className="conatent"> Restaurants in Jodhpur, Jodhpur Restaurants, Basni restaurants, Best Basni restaurants, Jodhpur City restaurants, Tea Restaurants in Jodhpur, Tea near me, Tea Restaurants in Basni, in Jodhpur, near me, in Basni, in Jodhpur, near me, in Basni </div>
</div>

<div className="div p-3">
<div className="Related fw-bold"> Restaurants around Basni </div>
<div className="conatent"> Sangriya restaurants, Pal Gaon restaurants, Bhadu Market restaurants, Bhagat Ki Kothi restaurants </div>
</div>

<div className="div p-3">
<div className="Related fw-bold"> Frequent searches leading to this page </div>
<div className="conatent"> jodhpur menu, jodhpur basni menu, jodhpur jodhpur, jodhpur jodhpur menu, jodhpur restaurant </div>
</div>

    </div>

    






<div className='footercomn'>
   <Footer/>
</div>
    
       
    </div>
    
    
  )
}