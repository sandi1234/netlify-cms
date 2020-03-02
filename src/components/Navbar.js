import React from 'react'
import { Link } from 'gatsby'
import BusogaLogo from '../img/busoganordic.png'
import { Navbar ,Nav, Container} from "react-bootstrap"
// import styled from 'styled-components'


const Menu = class extends React.Component {

  render() {
    return (
      <>
<Navbar id="navbar" bg="light" expand="lg">
  <Container>
      <Navbar.Brand>   
    <Link to="/">
      <img src={BusogaLogo} alt="busoga" />
    </Link>           
    </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav>
          <Link className="navbar-item" to="/">Home</Link>
          <Link className="navbar-item" to="/about">About</Link>
          <Link className="navbar-item" to="/team">Team</Link>
          <Link className="navbar-item" to="/projects">Projects</Link>
          {/* <Link className="navbar-item" to="/products">Products</Link> */}
          {/* <Link className="navbar-item" to="/blog">Blog</Link> */}
          <Link className="navbar-item" to="/contact">Contact</Link>
          {/* <Link className="navbar-item" to="/contact/examples">Form Example</Link> */}
        </Nav>
      </Navbar.Collapse>
  </Container>
</Navbar>
      </>
    )
  }
}

export default Menu
