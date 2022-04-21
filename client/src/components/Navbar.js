import React from "react";
import { Navbar, Container, Form, FormControl, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Navbar.css";

function NavbarComponent() {
  return (
    <Navbar id="nav-body" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">
          <img
            alt=""
            src="https://www.pinclipart.com/picdir/big/279-2793569_donate-clipart.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
          <span id="app-name">Pitchpls!</span>
        </Navbar.Brand>

        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            style={{ borderRadius: "25px" }}
          />
          <Button variant="outline-warning" className="btn-nav" style={{ marginLeft: 10 }}>
            Post
          </Button>
          <Button variant="outline-warning" className="btn-nav" style={{ marginLeft: 10 }}>
            Login
          </Button>
        </Form>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
