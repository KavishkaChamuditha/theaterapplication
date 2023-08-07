import React from 'react'
import {Navbar, Container, Nav, Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './navpart.css'

function Navpart() {
  return (
    <div>
       <Container>
        <Navbar className='backgroundclr navbar '>
          <Navbar.Brand href="#home" className='text-light navname'>KCC Multiplex</Navbar.Brand>
          <Nav className="me-auto navlinksmrgn">
            <Nav.Link href="#home" className='text-light navlinks'>Home</Nav.Link>
            <Button className='navlinks giveawys'>Giveaways</Button>
            <Button className='text-dark tickets'>Buy Tickets</Button>
            <Nav.Link href="#pricing" className='text-light navlinkslast'>Movies</Nav.Link>
            <Nav.Link href="#pricing" className='text-light navlinkslast'>Cinemas</Nav.Link>
            <Nav.Link href="#pricing" className='text-light navlinkslast'>Contact Us</Nav.Link>
          </Nav>
          </Navbar> 
        </Container>
    </div>
  )
}

export default Navpart
