import NavDropdown from "react-bootstrap/NavDropdown";
import {
  Navbar,
  Container,
  Nav,
  Form,
  FormControl,
  Button,
  Image,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import "./MyNavbar.css";
import logo from "../images/logo.jpg";

const MyNavbar = ({ onInput, onSubmit, userInput }) => {
  return (
    <Navbar className="color-nav" expand="lg">
      <Container fluid>
        <Navbar.Brand>
          <Link className="custom-link" id="brand-link" to="/">
            <Image
              width="100px"
              height="50px"
              className="img-responsive"
              src={logo}
              alt="logo"
            />
            A Taste of History
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
              <NavDropdown.Item>
                <Link className="custom-link" to="/Ingredients">
                  Ingredients
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link className="custom-link" to="/Recipes">
                  Recipes
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link className="custom-link" to="/Travels">
                  Travels
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                <Link className="custom-link" to="/Lost_foods">
                  Lost Foods
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex mr-auto" onSubmit={(e) => onSubmit(e)}>
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={userInput}
              onInput={(e) => onInput(e)}
            />
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
