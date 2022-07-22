import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'


const Navbar1 = () => {
    const auth = localStorage.getItem('user');
    const navigate = useNavigate();

    

    const logout = () => {
        alert("You are being logged out")
        localStorage.clear();
        navigate('/signup');
    }

    return (
        <div>


            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <img className="logo" src="https://images01.military.com/sites/default/files/2018-04/amazon-logo-1800.jpg"></img>

                    <Navbar.Brand href="#home">E-Comm</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">

                        {
                            auth ?
                                <Nav>
                                    <Link className="nav-bar-link" to="/">Products</Link>
                                    <Link className="nav-bar-link" to="/addproduct">Add Product</Link>
                                    {/* <Link className="nav-bar-link" to="/updateproduct">Update Product</Link> */}


                                    <NavDropdown title="Settings" id="basic-nav-dropdown">
                                        <NavDropdown className="dropdown-2" title="Switch / Add account" id="basic-nav-dropdown">
                                            <Link className="dropdown-navlinks" to="/signup">SignUp</Link>
                                            <Link className="dropdown-navlinks" to="/login">Login</Link>
                                        </NavDropdown>
                                        <Link className="dropdown-navlinks" to="/signup" onClick={logout}>Logout ({JSON.parse(auth).name}) </Link>

                                    </NavDropdown>

                                </Nav>
                                :
                                <Nav>
                                    <NavDropdown title="Login / SignUp" id="collasible-nav-dropdown">
                                        <Link className="dropdown-navlinks" to="/signup">SignUp</Link>
                                        <Link className="dropdown-navlinks" to="/login">Login</Link>
                                    </NavDropdown>
                                </Nav>
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>






            {/* <img className="logo" src="https://images01.military.com/sites/default/files/2018-04/amazon-logo-1800.jpg"></img>
            {
                auth ?
                    <ul className="navbar1">
                        <li><Link className="nav-bar-link" to="/">Product</Link></li>
                        <li><Link className="nav-bar-link" to="/addproduct">Add Product</Link></li>
                        <li><Link className="nav-bar-link" to="/updateproduct/10">Update Product</Link></li>
                        <li><Link className="nav-bar-link" to="/profile">Profile</Link></li>
                        <li><Link className="nav-bar-link" to="/signup" onClick={logout}>Logout ({JSON.parse(auth).name}) </Link></li>
                    </ul>
                    :
                    <ul className="navbar1">
                        <li><Link className="nav-bar-link" to="/signup">SignUp</Link></li>
                        <li><Link className="nav-bar-link" to="/login">Login</Link></li>
                    </ul>

            } */}

        </div>
    )
}

export default Navbar1;