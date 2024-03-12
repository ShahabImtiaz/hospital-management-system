import { NavLink } from "react-router-dom";

import { useEffect } from "react";
import { useState } from "react";



import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import logo from "../../assets/logo/logo-ndc.png";

import "./Header.css";

function Header() {
  const [sticky, setSticky] = useState(false);
  // const navigate = useNavigate();
  // const [user] = useAuthState(auth);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 100 ? setSticky(true) : setSticky(false);
    });
  }, []);

  return (
    <>
      {/* <div className="header-divider"></div> */}
      <Navbar
        expand="lg"
        className={`primary-header  fixed-top ${
          sticky ? "shadow-sm bg-light" : "bg-transparent"
        }`}
      >
        <Container>
          <Navbar.Brand>
            <img src={logo} alt="MediTro" className="img-fluid logo" style={{height: '100px',width:'100px'}}/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-items-center" style={{ gap: "20px" }}>
              <NavLink className={"text-uppercase text-decoration-none"} to="/">
                Home
              </NavLink>
              <NavLink
                className={"text-uppercase text-decoration-none"}
                to="/about"
              >
                about
              </NavLink>
              <NavLink
                className={"text-uppercase text-decoration-none"}
                to="/service"
              >
                service
              </NavLink>
              {/* <NavLink
                className={"text-uppercase text-decoration-none"}
                to="/blog"
              >
                blog
              </NavLink> */}
              <NavLink
                className={"text-uppercase text-decoration-none"}
                to="/contact"
              >
                contact
              </NavLink>

              {/* <NavLink
                className={"text-uppercase text-decoration-none"}
                to="/dashboard/my_Appointments"
              >
                Appointments
              </NavLink> */}

            
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
