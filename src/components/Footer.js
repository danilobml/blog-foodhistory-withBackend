import "./Footer.css";
import { Container, Row, Col } from "react-bootstrap";
import instagram from "../images/instagram-icon.png";
import twitter from "../images/twitter-icon.png";
import facebook from "../images/facebook-icon.png";

const Footer = () => {
  return (
    <Container fluid className="footer d-flex flex-column justify-content-center align-items-space-around text-center">
      <Row>
        <Col className="align-self-center">
          <a className="email" href="mailto:contact@tasteofhistory.com">
            Send us an E-mail
          </a>
        </Col>
        <Col>
          <h5>Follow us on: </h5>
          <a href="https://www.instagram.com" target="_blank">
            <img src={instagram} className="social-icon" />
          </a>
          <a href="https://twitter.com" target="_blank">
            <img src={twitter} className="social-icon" />
          </a>
          <a href="https://facebook.com" target="_blank">
            <img src={facebook} className="social-icon" />
          </a>
        </Col>
        <Col className="align-self-center">
          <h6>Copyright: 2022 - A Taste of History™</h6>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
