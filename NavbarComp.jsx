import React from "react";
import { Container, Navbar } from "react-bootstrap";

function NavbarComp() {
  return (
    <div>
      <Navbar className="bg-warning">
        <Container>
          <Navbar.Brand href="#home">DudSagar Trip Form</Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
} 

