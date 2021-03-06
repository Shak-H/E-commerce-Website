import * as React from 'react'
import { removeToken } from '../helpers/auth'
import { useNavigate } from 'react-router-dom'
import {
  Navbar,
  Container,
  NavDropdown,
  Nav,
  Form,
  Offcanvas
} from 'react-bootstrap'
import home from '../styles/images/icons/home-white-24px.png'
import login from '../styles/images/icons/user-add.png'
import logout from '../styles/images/icons/user-delete.png'
import signup from '../styles/images/icons/document-signed.png'
import orders from '../styles/images/icons/list.png'
import account from '../styles/images/icons/user.png'

import Search from './Search'

const Nav2 = ({ isLoggedIn, setIsLoggedIn, productsData, setProducts }) => {
  const navigate = useNavigate()

  const handleLogout = () => {
    removeToken()
    setIsLoggedIn(false)
    navigate('/')
  }

  return (
    <>
      <Navbar bg="dark" variant="dark" expand={false}>
        <Container fluid>
          <Navbar.Brand href="/">SH Sports</Navbar.Brand>
          <Nav className="me-auto">
            <div className="home-drop-container">
              <Nav.Link href="/">
                <img src={home} alt="Home" />
              </Nav.Link>
              <NavDropdown title="Clothing" id="basic-nav-dropdown">
                <NavDropdown.Item href="/products/">
                  All Clothes
                </NavDropdown.Item>
                <NavDropdown.Item href="/products/mens">Mens</NavDropdown.Item>
                <NavDropdown.Item href="/products/womens">
                  Womens
                </NavDropdown.Item>
                <NavDropdown.Item href="/products/kids">Kids</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/products/">SALE</NavDropdown.Item>
                {isLoggedIn ? (
                  <>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/products/addproduct">
                      Add an item
                    </NavDropdown.Item>
                  </>
                ) : (
                  <></>
                )}
              </NavDropdown>
            </div>
          </Nav>
          <Form className="d-flex">
            <Search productsData={productsData} setProducts={setProducts} />
          </Form>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">
                Your Account
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                {isLoggedIn ? (
                  <>
                    <Nav.Link className="link" href="/products/orders">
                      <img src={orders} alt="Orders" /> My Orders
                    </Nav.Link>
                    <Navbar.Text href="/profile">
                      <img src={account} alt="Account" /> Account Details
                    </Navbar.Text>
                    <Navbar.Text onClick={handleLogout}>
                      <img src={logout} alt="Log Out" /> Log Out
                    </Navbar.Text>
                  </>
                ) : (
                  <>
                    <Nav.Link href="/login">
                      <img src={login} alt="Log In" /> Log In
                    </Nav.Link>
                    <Nav.Link href="/register">
                      <img src={signup} alt="Sign Up" /> Sign Up
                    </Nav.Link>
                  </>
                )}
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  )
}

export default Nav2
