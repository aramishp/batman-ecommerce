import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import profile from './profile.svg';
import './NavigationBar.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function NavigationBar(props) {
    const [searchProduct, setSearchProduct] = useState('');
    const navigate = useNavigate();

    function searchForProduct() {
        navigate(`/products/${searchProduct}`);
    }

    function checkIsLoggedIn() {
        if(props.isLoggedIn) {
            navigate('/profile');
        } else {
            navigate('login');
        }
    }
    
    return (
        <Navbar expand="lg" sticky='top' bg="warning" variant="light" className="x">
            <Container>
                <Navbar.Brand href="/">
                    <img
                        alt="company logo"
                        src="/nav-bar-imgs/logo.png"
                        className="d-inline-block align-top logo-img"
                    />{' '}
                    Free Market
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/sales">Sales</Nav.Link>
                        <NavDropdown title="Categories" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="/laptops">Laptops</NavDropdown.Item>
                            <NavDropdown.Item href="/phones">Phones</NavDropdown.Item>
                            <NavDropdown.Item href="/memories">Memories</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form className="d-flex" onSubmit={(e) => {searchForProduct(); e.preventDefault();}}>
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                            value={searchProduct}
                            onChange={(e) => {setSearchProduct(e.target.value)}}
                        />
                        <Button type='submit' className='btn btn-primary'>Search</Button>
                    </Form>
                    <Nav>
                        <Nav.Link href={props.isLoggedIn ? "/purchases" : "/login"}>Purchases</Nav.Link>
                        <Nav.Link href={props.isLoggedIn ? "/history" : "/login"}>History</Nav.Link>
                        <Nav.Link onClick={checkIsLoggedIn}>
                            <img 
                                src={profile}
                                alt='myprofile'
                                className='images'
                            />
                        </Nav.Link>
                        <Nav.Link href={props.isLoggedIn ? "/cart" : "/login"}>
                            <img 
                               src='/nav-bar-imgs/cart.png'
                                alt='cart'
                                className='images'
                            />
                        </Nav.Link>
                        <Nav.Link href={props.isLoggedIn ? "/wishlist" : "/login"}>
                            <img 
                                src='/nav-bar-imgs//favorites.png'
                                alt='favorites'
                                className='images'
                            />
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
