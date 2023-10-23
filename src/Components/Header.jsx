import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

function Header() {
  return (
    <Navbar  className='Navbar'>
      <Container>
        <Navbar.Brand href="#">
          <i class="fa-solid fa-cloud fa-2xl"  style={{marginRight: '20px', color: '#ffffff'}}></i>
          <h1 style={{display: 'inline', color: 'white'}}>Weather Agent</h1>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Header;
