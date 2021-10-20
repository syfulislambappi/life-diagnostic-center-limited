// dependencies
import { Container, Nav, Navbar, Button, Image } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useAuth from '../../hooks/useAuth'
import './Header.css';
import logo from '../../images/logo.png';

function Header() {
  // style for active nav item
  const activeStyle = {
    fontWeight: 'bold',
    color: '##296870'
  };

  // normal style for nav item
  const normalStyle = {
    textDecoration: 'none',
    color: 'black',
    marginLeft: '20px'
  };

  // user information from firebase
  const {user, logOut} = useAuth()

  // user name and avatar section
  const userSection = <div className="d-flex align-items-center ms-3">
                        <Image src={user.photoURL} height="30" width="30" className="rounded-circle" />
                        <h6 className="ms-2">{user.displayName}</h6>
                      </div>

  // login and register button
  const loginAndRegister = <>
                            <NavLink to="/login" style={normalStyle}><Button className="login-btn">Login</Button></NavLink>
                            <NavLink to="/register" style={normalStyle}><Button className="signup-btn">Register</Button></NavLink>
                          </>

  // logout button
  const logoutBtn = <Button variant='danger' className="login-btn ms-3" onClick={logOut}>Logout</Button>

    return (
        <header>
          <Navbar expand="lg" className="bg-white shadow">
            <Container>
              <Navbar.Brand>
                <img
                  src={logo}
                  width="180px"
                  className="d-inline-block align-top"
                  alt="Digital Hub Logo"
                />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto align-items-center">
                  <NavLink exact to="/" style={normalStyle} activeStyle={activeStyle}>Home</NavLink>
                  <NavLink to="/services" style={normalStyle} activeStyle={activeStyle}>Services</NavLink>
                  <NavLink to="/doctors" style={normalStyle} activeStyle={activeStyle}>Doctors</NavLink>
                  <NavLink to="/blogs" style={normalStyle} activeStyle={activeStyle}>Blogs</NavLink>
                  <NavLink to="/about" style={normalStyle} activeStyle={activeStyle}>About</NavLink>
                  <NavLink to="/contact" style={normalStyle} activeStyle={activeStyle}>Contact</NavLink>
                  <NavLink to="/appointment" style={normalStyle} activeStyle={activeStyle} className="my-2"><span className="border border-2 rounded border-danger p-2">Make Appointment</span></NavLink>
                  {user.displayName ? logoutBtn : loginAndRegister}
                  {user.displayName ? userSection : ''}
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </header>
    )
}

export default Header;