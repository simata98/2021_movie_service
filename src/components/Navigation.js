import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Navigation() {
  return (
    <div className="nav" style={{ width: "100%" }}>
      <Navbar bg="dark" variant="dark" style={{ width: "100%" }}>
        <Navbar.Brand to="/home">Jeong's Movie</Navbar.Brand>
        <Nav className="mr-auto">
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "white",
              marginRight: "10px",
            }}
          >
            Home
          </Link>
          <Link
            to="/about"
            style={{
              textDecoration: "none",
              color: "white",
              marginRight: "10px",
            }}
          >
            About
          </Link>
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "white",
              marginRight: "10px",
            }}
          >
            NotYet
          </Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>
    </div>
  );
}

export default Navigation;
