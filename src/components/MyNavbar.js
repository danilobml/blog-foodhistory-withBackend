import NavDropdown from "react-bootstrap/NavDropdown";
import { Navbar, Container, Nav, Form, FormControl, Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./MyNavbar.css";
import logo from "../images/logo.jpg";

const MyNavbar = ({ onInput, onSubmit, userInput, onClickHome, onCategorySelect }) => {
  return (
    <Navbar className="color-nav" expand="lg">
      <Container fluid>
        <Navbar.Brand>
          <Link className="custom-link" id="brand-link" to="/" onClick={onClickHome}>
            <Image width="100px" height="50px" className="logo img-responsive" src={logo} alt="logo" />A Taste of History
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
          <Nav className="mr-auto align-items-end">
            <Link to="/" className="custom-link" onClick={onClickHome}>
              Home{" "}
            </Link>
            <Link to="/about" className="custom-link">
              About{" "}
            </Link>
            <Link to="/books" className="custom-link">
              Books{" "}
            </Link>
            <NavDropdown title="Categories" id="categories-dropdown">
              <NavDropdown.Item>
                <Link className="custom-link" to="/Ingredients" onClick={onCategorySelect}>
                  Ingredients
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link className="custom-link" to="/Recipes" onClick={onCategorySelect}>
                  Recipes
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link className="custom-link" to="/Travels" onClick={onCategorySelect}>
                  Travels
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                <Link className="custom-link" to="/Lost_foods" onClick={onCategorySelect}>
                  Lost Foods
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex mr-auto" onSubmit={(e) => onSubmit(e)}>
            <FormControl type="search" placeholder="Search" className="me-2" aria-label="Search" value={userInput} onInput={(e) => onInput(e)} />
            <Button variant="outline-dark">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;

// client.getEntries({
// 'query': state
// })
