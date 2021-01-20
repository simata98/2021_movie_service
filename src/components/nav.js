import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Navigation() {
  return (
    <div className="nav">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand to="/home">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link to="/">Home</Nav.Link>
          <Nav.Link to="/about">Features</Nav.Link>
          <Nav.Link to="/">NotYet</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>
      <br />
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand to="/home">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link to="/home">Home</Nav.Link>
          <Nav.Link to="#features">Features</Nav.Link>
          <Nav.Link to="#pricing">Pricing</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-light">Search</Button>
        </Form>
      </Navbar>
    </div>
  );
}

export default Navigation;
