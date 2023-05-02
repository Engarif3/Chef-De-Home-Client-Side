import React, { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { FaUserCircle } from "react-icons/fa";
import { AuthContext } from "../../Provider/AuthProvider";


const Navigationbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut().then().catch(error => console.log(error));
  };

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      {user.email}
      {/* {user.displayName} */}
    </Tooltip>
  );


  return (
    <div
    
    >
      <div>
        <Navbar collapseOnSelect expand="lg" bg="black" variant="light" style={{position: "relative", top: 0}}>
          <Container>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" className="bg-white" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <h1 className="text-danger fst-italic">Chef De Home</h1>
              <Nav className="mx-auto d-flex align-items-center gap-4 ">
                
                <Link className="text-decoration-none text-white" to={"/"}>
                  Home
                </Link>

                <Link className="text-decoration-none text-white" to={"/blog"} >Blog</Link>
                {/* <Link className="text-decoration-none text-white" to={"/private"}>Private</Link> */}
              </Nav>
              <Nav className="d-flex  align-items-center gap-2">
                {user && (
                  <OverlayTrigger
                    placement="right"
                    delay={{ show: 50, hide: 200 }}
                    overlay={renderTooltip}
                  >
                    <Button className="d-flex justify-content-center align-items-center rounded-circle m-0 p-0  " variant="primary" >
                      <FaUserCircle
                        style={{ fontSize: "2.5rem" }}
                        className="m-0 p-0"
                      ></FaUserCircle>
                    </Button>
                  </OverlayTrigger>
                )}

                {user ? (
                  <Button variant="danger" onClick={handleLogOut}>Logout</Button>
                ) : (
                  <Link to={"/login"}>
                    <Button variant="danger">Login</Button>
                  </Link>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  );
};

export default Navigationbar;
