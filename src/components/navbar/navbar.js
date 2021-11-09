import React from "react";
import { Container, Dropdown, DropdownButton, Nav, Navbar, Row, Col } from "react-bootstrap";
import "./navbar.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUserCircle } from "@fortawesome/free-solid-svg-icons"
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";


export default class TopMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <Navbar fixed="top" id="navbar" bg="primary" variant="dark">
                <Container>
                  {/*  <img className="logo" src= {logo}/>*/}
                  <img className="logo" src= "https://dwglogo.com/wp-content/uploads/2017/09/1460px-React_logo.png"/>
                    
                    <Navbar.Brand href="#home"> Grupo 14 MinTic <spam id="usuario-sub-branm"></spam>
                    </Navbar.Brand>
                    <NavbarToggle sria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            { /* <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>*/}
                        </Nav>

                        <DropdownButton id="dropdown-basic-button" title="Usuario">
                            <Dropdown.Header id="dropdown-header">
                                <Row>
                                    <FontAwesomeIcon icon={faUserCircle} />
                                </Row>
                                <Row>
                                    Usuario
                                </Row>
                                <Dropdown.Divider />
                            </Dropdown.Header>
                            <Dropdown.Item href="#/action-1">Cerrar Sesion</Dropdown.Item>
                            {/*  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>*/}
                        </DropdownButton>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}

