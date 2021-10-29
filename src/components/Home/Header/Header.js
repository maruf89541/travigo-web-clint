
import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hook/useAuth';



const Header = () => {
    const { user, logout } = useAuth();
    return (
        <div>
            <Navbar collapseOnSelect style={{ backgroundColor: '#061a3a' }} expand="lg" bg="#061a3a" variant="darkvb ">
                <Container>
                    <Navbar.Brand href="#home" className="bg-white pe-2 border rounded"><img style={{ height: '30px', width: '150px' }} src="https://i.ibb.co/hZ1zdXy/logo-3.png" alt=""></img></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end ms-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/service">service</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                        {
                            user?.email &&
                            <Navbar.Text>
                                Signed in as: <a href="#login">{user.displayName}</a>
                            </Navbar.Text>}


                        {user?.email ?
                            < Nav.Link><Button onClick={logout} variant="outline-secondary">Log out</Button>{' '}</Nav.Link> :
                            <Nav.Link as={Link} to="/login"><Button variant="outline-secondary">Login</Button>{' '}</Nav.Link>

                        }


                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div >
    );
};

export default Header;