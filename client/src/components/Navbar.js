import React, { useEffect, useState } from "react";
import { Navbar, Container, Form, FormControl, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import Cookies from "js-cookie";

function NavbarComponent() {
  const navigate = useNavigate()
  const [isLogin, setIsLogin ] = useState(false)

  useEffect(() => {
    const cookie =  Cookies.get('token')
  
  if(cookie){
    setIsLogin(true)
  } 
  }, [])

  const logout = () => {
    Cookies.remove('token', { path: '/' })
    navigate('/login')
  }

  if(isLogin === true){
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
          <Button variant="outline-warning" className='btn-nav' style={{ marginLeft: 10 }} onClick={logout}>
            Logout
          </Button>
        </Form>
      </Container>
    </Navbar>
  );}
  else{
    return (<Navbar id="nav-body" expand="lg">
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
        <Button variant="outline-warning" className='btn-nav' style={{ marginLeft: 10 }}>
          Login
        </Button>
      </Form>
    </Container>
  </Navbar>)
   }
}

export default NavbarComponent;
