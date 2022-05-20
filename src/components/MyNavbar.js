import NavDropdown from "react-bootstrap/NavDropdown";
import { Navbar, Container, Nav, Form, FormControl, Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./MyNavbar.css";
import logo from "../images/logo.jpg";

const MyNavbar = () => {
  return (
    <Navbar className="color-nav" expand="lg">
      <Container fluid>
        <Navbar.Brand>
          <Link className="custom-link" id="brand-link" to="/">
            <Image width="100px" height="50px" className="img-responsive" src={logo} alt="logo" />A Taste of History
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link to="/" className="custom-link">
              Home{" "}
            </Link>
            <Link to="/about" className="custom-link">
              About{" "}
            </Link>
            <NavDropdown title="Categories" id="categories-dropdown">
              <NavDropdown.Item href="#action/3.1">Cuisines</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Recipes</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Travels</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">Lost Foods</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex mr-auto">
            <FormControl type="search" placeholder="Search" className="me-2" aria-label="Search" />
            <Button variant="outline-dark">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
