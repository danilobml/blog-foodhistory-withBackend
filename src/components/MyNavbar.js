import { Navbar, NavDropdown, Container, Nav, Form, FormControl, Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./MyNavbar.css";
import logo from "../images/logo.jpg";

const MyNavbar = ({ onInput, onSubmit, userInput, onClickHome }) => {
  return (
    <Navbar className="color-nav" expand="lg" collapseOnSelect>
      <Container fluid>
        <Navbar.Brand>
          <Link className="custom-link" id="brand-link" to="/" onClick={onClickHome}>
            <Image width="100px" height="50px" className="logo img-responsive" src={logo} alt="logo" />A Taste of History
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
          <Nav className="mr-auto align-items-end">
            <Nav.Item>
              <Nav.Link to="/" as={Link} eventKey="1" className="custom-link" onClick={onClickHome}>
                Home{" "}
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link to="/about" as={Link} eventKey="2" className="custom-link">
                About{" "}
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link to="/books" as={Link} eventKey="3" className="custom-link">
                Books{" "}
              </Nav.Link>
            </Nav.Item>
            <NavDropdown title="Categories" id="categories-dropdown">
              <NavDropdown.Item>
                <Nav.Link to="/categories/Ingredients" as={Link} eventKey="4" className="custom-link">
                  Ingredients
                </Nav.Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Nav.Link to="/categories/Recipes" as={Link} eventKey="5" className="custom-link">
                  Recipes
                </Nav.Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Nav.Link to="categories/Travels" as={Link} eventKey="6" className="custom-link">
                  Travels
                </Nav.Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                <Nav.Link to="categories/Lost_foods" as={Link} eventKey="7" className="custom-link">
                  Lost Foods
                </Nav.Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex mr-auto" onSubmit={(e) => onSubmit(e)}>
            <FormControl type="search" placeholder="Search" className="me-2" aria-label="Search" value={userInput} onInput={(e) => onInput(e)} />
            <Button variant="outline-dark" type="submit">
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
