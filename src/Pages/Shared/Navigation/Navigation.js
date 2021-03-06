import React from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Authentication/hooks/useAuth';

const Navigation = () => {
    const { user, logOutUser } = useAuth();
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container fluid>
                <Navbar.Brand href="/">Travelo</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="m-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="/">Home</Nav.Link>
                            {/* <Nav.Link href="#action2">Link</Nav.Link> */}
                            {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                                Something else here
                            </NavDropdown.Item>
                        </NavDropdown> */}
                            {/* <Nav.Link href="#" disabled>
                            Link
                        </Nav.Link> */}
                        </Nav>
                        <Form className="d-flex">
                            {/* <FormControl
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        /> */}
                            {
                                user?.email
                                    ?
                                    <Button variant="outline-success" onClick={logOutUser}>Logout</Button>
                                    :
                                    <>
                                        <Link to='/login'>
                                            <Button variant="outline-success">Login</Button>
                                        </Link>
                                    </>
                            }
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Navigation;